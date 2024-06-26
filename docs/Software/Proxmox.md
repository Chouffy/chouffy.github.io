Is a [[Virtualization|Supervisor]] [[Operating System]]
## Links
- Proxmox [Documentation](https://pve.proxmox.com/pve-docs/)
- Proxmox [Wiki](https://pve.proxmox.com/wiki/Main_Page)
- [[Home Assistant]] custom [integration](https://github.com/dougiteixeira/proxmoxve)
## Setup
- In [[VirtualBox]]: see the [guide](https://pve.proxmox.com/wiki/Proxmox_VE_inside_VirtualBox)
- Remove Subscription notice with [pve-nag-buster](https://github.com/foundObjects/pve-nag-buster)
	- `wget https://raw.githubusercontent.com/foundObjects/pve-nag-buster/master/install.sh && chmod +x install.sh && ./install.sh`
	- Then disable the `entreprise` repository
- [Trove of scripts](https://tteck.github.io/Proxmox/)
	- Change CPU Scaling Governor to `powersave` to save some previous Watts
	- Clean old kernels
- [[Secure Shell Protocol|SSH]] port shouldn't be changed as it is used for cluster things
	- Setup [[Cloudflare]] DNS with Proxmox: [Guide](https://3os.org/infrastructure/proxmox/lets-encrypt-cloudflare/)
### Activate IOMMU / PCIe Passthrough
- See this [Wiki page](https://pve.proxmox.com/wiki/PCI_Passthrough) and [this documentation page](https://pve.proxmox.com/pve-docs/chapter-qm.html#qm_pci_passthrough)
- Add `intel_iommu=on` or `amd_iommu=on` to the [[GRUB#Kernel Command Lines]] or [[systemd-boot#Kernel Command Lines]] (in [[Unified Extensible Firmware Interface|UEFI]])
	- IOMMU Passthrough can also be added if supported with `iommu=pt`
- Edit `/etc/modules` and add 
	```
	vfio
	vfio_iommu_type1
	vfio_pci
	vfio_virqfd
	```
- `update-initramfs -u -k all`
- Reboot
- Check if active with [[PCI Express#IOMMU / PCIe Passthrough]]
- Check IOMMU groups with [[PCI Express#PCIe Groups]]
### Import a [[Virtualization|VM]] from [[TrueNAS SCALE]]
- Disk copy
	- Copy the raw file from TrueNAS to Proxmox - [[ZFS#Commands]] with [[dd#Transfer between two PC]]
	- Import the raw file with `qm importdisk <VMID> /path/to/file.raw local --format qcow2`
	- Attach the disk to the VM with VirtIO
- Other settings from TrueNAS
	- Boot loader: UEFI
	- Display: SPICE
### [[Universal Serial Bus|USB]] Passthrough
- The order of creation of passthrough *does* matter, like for [[Home Assistant]]
### Remote [[Simple Protocol for Independent Computing Environments|SPICE]] access without going through Web GUI
- Set up permissions
	- New role with `VM.Console, VM.Audit`
	- New group
	- New permission for the group with the role and the necessary path
	- New user in the PVE realm assigned to the group
- Set up token
	- Create API Token, with Privilege Separation
	- In each VM, assign the API token to the Role created
- Choose a script option
	- [cv4pve-pepper](https://github.com/Corsinvest/cv4pve-pepper)
	- Linux only script: [PVE Spice Connect](https://gitlab.com/pawlakm/pve-spice-connect)
### Configure [[ZFS]] settings
#### Limit ZFS Memory usage
- See [Wiki](https://pve.proxmox.com/wiki/ZFS_on_Linux#sysadmin_zfs_limit_memory_usage)
![[ZFS#Random Access Memory RAM]]
### Serial Console
- Add Serial device to the VM
- Edit `/etc/default/grub` with
```
GRUB_CMDLINE_LINUX="console=ttyS0,115200n8"
GRUB_TERMINAL=serial
GRUB_SERIAL_COMMAND="serial --speed=115200 --unit=0 --word=8 --parity=no --stop=1"
```
- Run `update-grub`
## Utilization
### Best settings when creating a [[Virtualization|VM]]
- [Windows 10 guest best practices](https://pve.proxmox.com/wiki/Windows_10_guest_best_practices)
- [System](https://pve.proxmox.com/pve-docs/chapter-qm.html#qm_system_settings)
	- QEMU Agent: enabled
		- Need to be installed with `qemu-guest-agent` or [Fedora VirtIO drivers](https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/stable-virtio/virtio-win.iso)
	- Machine type: `q35` + BIOS: `OVMF` for PCI Passthrough, otherwise default is fine
- [CPU](https://pve.proxmox.com/pve-docs/chapter-qm.html#qm_cpu)
	- Type:
		- `x86-64-v3` works fine
		- `host` will match the Host CPU, but will impact migration to to other systems
- [Memory](https://pve.proxmox.com/pve-docs/chapter-qm.html#qm_memory)
	- Ballooning: enabled, disable on Windows
	- Minimum memory: don't use on Windows
	- 1 GB must be made available for the host
- [Network](https://pve.proxmox.com/pve-docs/chapter-qm.html#qm_network_device)
	- Type: VirtIO
- [Display](https://pve.proxmox.com/pve-docs/chapter-qm.html#qm_display)
	- Type: `std` or `qxl` for [[Simple Protocol for Independent Computing Environments|SPICE]]
- [Firmware](https://pve.proxmox.com/pve-docs/chapter-qm.html#qm_bios_and_uefi)
	- SeaBIOS by default
	- OVMF for [[Windows|Windows 11]] and [[PCI Express#IOMMU / PCIe Passthrough]]
		- `pre-enroll-key` for Windows keys + Secure Boot on
		- Virtual screen resolution is set in the VM BIOS
- [Storage](https://pve.proxmox.com/pve-docs/chapter-qm.html#qm_hard_disk)
	- Controller: VirtIO SCSI ([source](https://pve.proxmox.com/pve-docs/chapter-qm.html#qm_hard_disk)) single with IO Thread enabled
	- Image Format: raw disk image by default if you use [[Logical Volume Manager|LVM]] or [[ZFS]]
	- Cache: `none` ([source](https://pve.proxmox.com/wiki/Performance_Tweaks#Disk_Cache))
		- `writeback` is faster, but can result in data lose
	- Discard: enabled + SSD emulation: enabled, to let the OS [[TRIM]]
	- IO Thread: enabled
- For [[Windows]]
	- Disable tablet device ([source](https://pve.proxmox.com/wiki/Performance_Tweaks#Windows))
	- Use raw disk ([source](https://pve.proxmox.com/wiki/Performance_Tweaks#Windows))
	- Don't use [[Kernel-based Virtual Machine|VirtIO]]
### Stop a VM
- Shutdown simulate an ACPI power off
- Stop simulate a sudden stops, like a power loss
- `qm stop <VMID>` with `VMID` the ID in Proxmox
- `ps aux | grep <VMID>` to grab the VM's process ID
- `kill -9 <PID>` to kill the process
### Mount a [[Universal Serial Bus|USB]] drive
- Mount the drive with [[fstab#USB Disks]]
- In the Proxmox interface, add the disk as a Directory
### Shrink a VM Disk
- Make sure that things are zeroed
	- Make sure that Discard is on
	- Resize a partition
- Change the size ([source](https://www.reddit.com/r/Proxmox/comments/qtpulx/shrink_disk_size_of_vm/))
	- If LV: `lvreduce -L 5G /dev/pve/disk-name` (reduce to 5G) or `lvreduce -L -5G /dev/pve/disk-name` (reduce by 5G)
	- If qcow2: `qemu-img resize --shrink <vmfile.qcow2>` [+-] or size
	- If ZFS:  `zfs set volsize=<new size>G rpool/data/vm-<vm id>-disk-<disk number>`
		- Find the ZFS path with `zfs list`
- Update Proxmox: `qm rescan`
- If you use [[GUID Partition Table]]
## Sources
-  [Before I do anything on Proxmox, I do this first...  - YouTube](https://www.youtube.com/watch?v=GoZaMgEgrHw)