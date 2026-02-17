This is a [[docs/How-To/index|How-To]] export a [[Virtualization|Virtual Machine]] disk from [[Proxmox]] to another system, like [[VirtualBox]] or [[TrueNAS]]. [From this source.](https://www.raffriff.com/blog/2022/10/moving-a-proxmox-vm-to-virtualbox/)
1. On the Proxmox host
	1. Lookup the VM config with `qm config <VMID>` and search for the disk, like `local-lvm:vm-102-disk-1`
	2. Lookup the format of the disk with `pvesm list local-lvm`
	3. Lookup the location of that disk with `pvesm path 'local-lvm:vm-102-disk-1'`
	4. Copy the raw disk to the new host
		1. Via direct mount: `dd bs=1M if=/dev/pve/vm-102-disk-1 status=progress of=/mnt/pve/something/`
		2. Via [[Secure Shell Protocol|SSH]]: `dd bs=1M if=/dev/pve/vm-102-disk-1 status=progress | ssh -J djm@virtualbox-host dd bs=1M of=tmp/vm-102-disk-1.raw`
	5. Create a checksum `sha256sum /dev/pve/vm-102-disk-1`
2. On the client
	1. Check the checksum `sha256sum ./vm-102-disk-1.raw`
	2. Using [[VirtualBox]], convert the `raw` image to `vdi` with `vboxmanage convertfromraw vm-102-disk-1.raw vm-102-disk-1.vdi`