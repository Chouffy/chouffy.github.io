---
aliases:
  - PCIe
---
Is a [[computer]] expansion bus
## PCIe Groups
- Can be checked with `find /sys/kernel/iommu_groups/ -type l`
## IOMMU / PCIe Passthrough
- Is the ability to redirect PCI device(s) to [[Virtualization|Virtual Machine]]
- On [[Linux]], check if active with `dmesg | grep -e DMAR -e IOMMU -e AMD-Vi`
	- Should return IOMMU, Directed I/O or Interrupt Remapping is enabled
