---
aliases: KVM, Linux Virtualization, virt-install, virsh, QEMU, VirtIO
---
Is a set of [[Software]] (modules) to enable [[Virtualization]] on [[Linux]] hosts.
## Reference
- [Comprehensive guide to performance optimizations for gaming on virtual machines with KVM/QEMU and PCI passthrough - MathiasHueber.com](https://mathiashueber.com/performance-tweaks-gaming-on-virtual-machines/)
### Devices
#### Chipsets
- I440FX is the standard chipset
- [Q35](https://wiki.qemu.org/Features/Q35) supports PCI-Express, and seems to have better idle performance ([source](https://altechnative.net/virtualized-windows-10-i440fx-vs-q35/))
### Manage VM with `virsh`
* `virt-install` to create a Virtual Machine
* `sudo virsh --all` ...
    * `list` to list VM
    * Status
        * `start ID/Name`
        * `reboot ID/Name`
        * `suspend ID/Name`
        * `shutdown ID/Name`
    * To edit a VM
        * `edit ID/Name`
    * To delete a VM
        1. `undefine ID/Name`
        1. ` virsh destroy ID/Name`
### Add [[TPM]] support
1. Install `swtpm swtpm-tools`
2. Add the TPM to the machine
	1. If using `virt-install`: `--tpm backend.type=emulator,backend.version=2.0,model=tpm-tis`
	2. Edit the VM file with `virsh edit HOSTNAME`
	```xml
	 </devices>
	    <tpm model='tpm-tis'>
	      <backend type='emulator' version='2.0'/>
	    </tpm>
	 </devices>
	```
### [[Universal Serial Bus|USB]] support
- Per [this page](https://www.linux-kvm.org/page/USB), `PIIX3 UHCI` is the default USB controller - however it's USB 1.1!
- Better use `EHCI`
### Balloon Driver
- Helps memory management
- Shouldn't be used on [[Windows]] ([source](https://pve.proxmox.com/wiki/Performance_Tweaks#Windows))
## Notes
### Install KVM Guest Agent
- On [[Linux]]: `apt-get install qemu-guest-agent`
- On [[Windows]] with [VirtIO ISO](https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/stable-virtio/virtio-win.iso)
### Setup KVM on [[Ubuntu Server]]
Based on [this great tutorial by OSTechnix](https://ostechnix.com/install-and-configure-kvm-in-ubuntu-20-04-headless-server/).

1. Install QEMU and some other libs
    1. `sudo apt install qemu qemu-kvm libvirt-clients libvirt-daemon-system virtinst bridge-utils`
    1. `systemctl status libvirtd` - must be enabled and started

1. Configure network bridge
    1. `ip a` list existing network, including `virbr` which is the preinstalled bridge
    1. Disable netfilter on bridge
        1. Create `/etc/sysctl.d/bridge.conf` and add the following

            ```bash
            net.bridge.bridge-nf-call-ip6tables=0
            net.bridge.bridge-nf-call-iptables=0
            net.bridge.bridge-nf-call-arptables=0
            ```

        1. Create `/etc/udev/rules.d/99-bridge.rules` and add `ACTION=="add", SUBSYSTEM=="module", KERNEL=="br_netfilter", RUN+="/sbin/sysctl -p /etc/sysctl.d/bridge.conf"`
    1. Remove default KVM bridge
        1. `virsh net-destroy default`
        1. `virsh net-undefine default`
        1. `ip link` check that `virbr` interfaces are gone
    1. Edit `/etc/netplan/00-installer-config.yaml`
        1. Backup first
        1. Add a new section under defined interface - Careful about the indentation

            ```bash
            network:
              ethernets:
                enp0sXYZ:
                  #config
              bridges:
                br0:
                  interfaces: [ enp0s3 ]
                  addresses: [192.168.225.52/24]
                  gateway4: 192.168.225.1
                  mtu: 1500
                  nameservers:
                    addresses: [8.8.8.8,8.8.4.4]
                  parameters:
                    stp: true
                    forward-delay: 4
                  dhcp4: no
                  dhcp6: no
              version: 2
            ```

        1. `sudo netplan --debug  apply` apply
        1. `ip a` to check, also `brctl show br0`
    1. Configure KVM to use this bridge
        1. Edit `host-bridge.xml` somewhere and add:

            ```xml
            <network>
              <name>host-bridge</name>
              <forward mode="bridge"/>
              <bridge name="br0"/>
            </network>
            ```

        1. `virsh net-define host-bridge.xml`
        1. `virsh net-start host-bridge`
        1. `virsh net-autostart host-bridge`
        1. `virsh net-list --all` to check
### Install [[Windows|Windows 11]] as a Guest
- Disable TPM check
	- ![[Windows#During setup]]
- [[Windows]] guests can use [VirtIO drivers](https://pve.proxmox.com/wiki/Windows_VirtIO_Drivers) for better performances. Fedora makes a signed version available [here (stable branch)](https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/stable-virtio/virtio-win.iso)
	- Mount the ISO during install and load the driver from `\amd64\w11`