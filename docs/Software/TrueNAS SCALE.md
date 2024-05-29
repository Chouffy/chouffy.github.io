Is an [[Operating System]] for [[server]] based on [[Debian]]. It uses [[ZFS]]
## Setup
- This guide is pretty good:
	- [Getting Started with TrueNAS Scale | Part 1 | Hardware, Installation and Initial Configuration](https://forum.level1techs.com/t/getting-started-with-truenas-scale-part-1-hardware-installation-and-initial-configuration/182361/1) 
	- [Getting Started with TrueNAS Scale | Part 2 | Learning ZFS Storage in TrueNAS; Creating a Pool, Dataset and Snapshot Task](https://forum.level1techs.com/t/getting-started-with-truenas-scale-part-2-learning-zfs-storage-in-truenas-creating-a-pool-dataset-and-snapshot-task/182481)
- Pool
	- Create a pool named `tank`
		- *If you have only one pool on your system, do not select the **Encryption** option for this pool.* - [Source](https://www.truenas.com/docs/scale/scaletutorials/storage/datasets/encryptionscale/)
	- Auto SMART shouldn't be enabled by default, instead setup a weekly `zpool trim POOLNAME`
- Dataset
	- Configure an encrypted dataset below the root for all sensitive data
- System
	- [[Secure Shell Protocol|SSH]] in System Settings → Service
### Notes
- Reactivate [[Advanced Package Tool|apt]] ⚠️ but beware of the consequences: `chmod +x /bin/apt* /bin/dpkg*` 
- An [integration](https://github.com/tomaae/homeassistant-truenas/tree/master) exist with [[Home Assistant]]
## Applications
- Truecharts aren't super reliable according to [Wendel (July 2022)](https://youtu.be/R7BXEuKjJ0k?t=302)
- Better use a [[Kernel-based Virtual Machine|KVM]] which host [[Docker]]
### Hosting [[Docker]] on [[Virtualization|VM]]
- Recommendation: host the *files* in TrueNAS, not in the VM
	- So you can use compression, snapshots, … 
#### [[Unified Extensible Firmware Interface|UEFI]]
There's an issue with the [[Debian]] bootloader and the [[Virtualization|VM]]:
You have to copy `debian/grubx64.efi` to `EFI/BOOT/bootx64.efi`
This is inside `/boot/efi/`
#### Network 
There are issues with routing VM network to VM Host - see [this post](https://forum.level1techs.com/t/truenas-scale-ultimate-home-setup-incl-tailscale/186444#oh-but-wait-6)
- Connect to the console
- Start `1. Configure network interface`
- Disable DHCP on your main interface
- Create a new interface with N, bridge, and set the alias to 192.168.1.1/24 (or whatever is appropriate for your network).
- Apply and persist
- Reboot
#### [[Network File System]]
A dataset can contain all required data accessible via [[Network File System]] - config in [this post](https://forum.level1techs.com/t/truenas-scale-ultimate-home-setup-incl-tailscale/186444#setting-up-the-nfs-share-on-truenas-9) too
- When creating the dataset:
	- ACL Type: NFSv4
	- ACL Mode: Passthrough
- Create users & groups, same GUID as VM
- When creating the NFS share
	- Set the service to be NFSv4
	- Set the host to the Docker host ip
	- Security: `SYS`
	- Maproot user & Maproot group: the one created
- Mount the NFS on the client and set on boot - see [[Network File System|NFS]]
### [[Nextcloud]]
- Sync can be disabled to speed up performance on the dataset
- [Guide here](https://forum.level1techs.com/t/truenas-scale-ultimate-home-setup-incl-tailscale/186444#nextcloud-stack-docker-composeyml-for-portainer-11) if you use a host VM + [[Docker]]
- If you use [[Snap]]
	- Copy the content of `/var/snap/nextcloud` to the `/nfs/nextcloud`
	- Edit `/etc/fstab` to add a mount from [[Network File System|NFS]] to `/var/snap/nextcloud`
		- ⚠️ Don't mount a bind from the `/nfs` to the snap, otherwise you'll have an ordering problem in `fstab`
## Data
### NFS
- NFSv4 should be a bit better
## [[Virtualization|Virtual Machine]]
- Access [[Kernel-based Virtual Machine|virsh]]: `sudo virsh -c "qemu+unix:///system?socket=/run/truenas_libvirt/libvirt-sock" COMMAND`
- Get the `domain` of the VM: In the TrueNAS interface → Virtualization → Select the VM → Download Logs and observe the name
### Install [[Windows]] in a [[Virtualization|VM]]
See [[Kernel-based Virtual Machine#Install Windows Windows 11 as a Guest]]
### Enable [[TPM]] [[Virtualization]]
1. ⚠️ Not supported OOTB!
1. Binary installation
	1. `sudo chmod +x /bin/apt* /bin/dpkg*`
	2. Download the [swtpm](https://packages.debian.org/bullseye-backports/swtpm), [swtpm-libs](https://packages.debian.org/bullseye-backports/swtpm-libs), [libtpms0](https://packages.debian.org/bullseye-backports/libtpms0), [swtpm-tools](https://packages.debian.org/bullseye-backports/swtpm-tools), [gnutls-bin](https://packages.debian.org/bullseye/gnutls-bin) packages
	3. Install them with `sudo apt install -f /path/to/file.deb`
	4. `sudo chmod -x /bin/apt* /bin/dpkg*`
2. System setup
	1. `sudo chmod 770 /var/lib/swtpm-localca/`
	2. `sudo nano /etc/apparmor.d/abstractions/libvirt-qemu` and add at the end - [Source](https://github.com/clipos/bugs/issues/24#issuecomment-519490302)
		1. `IDTOREPLACE` can be found when starting the VM (which will fail) and check the kern log: `cat /var/log/kern.log` or is the VM UUID (seen in `virsh edit`) without the `-`
	```
	  /var/db/system/syslog-IDTOREPLACE/log/swtpm/libvirt/qemu/** rw,
	  /var/lib/libvirt/swtpm/** krw,
	  /var/log/swtpm/** rw,
	```
	1. `systemctl reload apparmor.service`
1. Run the VM - need to do that everytime
	1. `sudo virsh -c "qemu+unix:///system?socket=/run/truenas_libvirt/libvirt-sock" edit DOMAINVM` and add at the end (but before `</devices>`) - [Source](https://www.smoothnet.org/qemu-tpm/)
	```xml
	 <devices>
	    <tpm model='tpm-tis'>
	      <backend type='emulator' version='2.0'/>
	    </tpm>
	 </devices>
	```
	2. `sudo virsh -c "qemu+unix:///system?socket=/run/truenas_libvirt/libvirt-sock" start DOMAINVM`
		1. [[Simple Protocol for Independent Computing Environments]] and [[VNC]] **web** displays available from the interface won't be initialized - so you have to rely on a local [[VNC]] viewer
		2. Port is not opened if you didn't start the machine from the web UI at least once
### Display settings for [[Simple Protocol for Independent Computing Environments|SPICE]]
- Port: 5900 or higher
- Resolution: 1024x768
- Bind: 0.0.0.0
- Web interface: true
## References
- [TrueNAS SCALE official documentation](https://www.truenas.com/docs/scale/)