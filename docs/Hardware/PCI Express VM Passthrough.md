Is about [[PCI Express|PCIe]] passthrough In [[Virtualization|VM]] like [[Proxmox]] or [[TrueNAS]]
## Notes
- Disable [[PCI Express|ASPM]] to start with 
- Connect a display or an dummy plug to the video card
## Useful commands
- `dmesg -w` too show hardware initialization errors
- `lspci` to list [[PCI Express|PCIe]] devices
	- `-k` to show driver in use
	- `lspci -nnv | grep VGA` to show list of display adapter
### Display IOMMU groups
```sh
#!/bin/bash
shopt -s nullglob
for g in $(find /sys/kernel/iommu_groups/* -maxdepth 0 -type d | sort -V); do
    echo "IOMMU Group ${g##*/}:"
    for d in $g/devices/*; do
        echo -e "\t$(lspci -nns ${d##*/})"
    done;
done;
```
### Dump vBIOS
```sh
lspci -nnv #to get the PCI address
cd /sys/bus/pci/devices/0000:01:00.0/
echo 1 > rom
cat rom > /tmp/image.rom
echo 0 > rom
```

Notes:
- If you have an "input/output error", check if [[Unified Extensible Firmware Interface|UEFI]] CSM is enabled (Legacy mode)
## Blacklist modules
- with [[GRUB]], add the required options 
## Links
- [GPU pass through tutorial](https://clayfreeman.github.io/gpu-passthrough/#imaging-the-gpu-rom) with a complete guide on how to setup the hypervisor and hide the VM environnement 
- [Proxmox guide](https://pve.proxmox.com/wiki/PCI_Passthrough) with how to dump VGA Rom
- For Intel GPU
	- [iGPU Passthrough to VM (Intel Integrated Graphics](https://3os.org/infrastructure/proxmox/gpu-passthrough/igpu-passthrough-to-vm/)
	- [i915 module with SR-IOV](https://github.com/strongtz/i915-sriov-dkms)