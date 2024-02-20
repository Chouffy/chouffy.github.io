---
aliases:
  - GPT
---
Is a standard layout of [[disk partition]], used notably by [[Unified Extensible Firmware Interface|UEFI]] systems. It aims to replace [[Master Boot Record|MBR]].
## Usage
### Errors after a [[Virtualization|VM]] disk shrink
- Symptoms: the disk don't boot, and [[GParted]] complains of errors
- Why: GPT store partition table at the end of the disk
- Validation 
	- Run `gdisk -l /dev/sdX` 
	- The error "Warning! Disk size is smaller than the main header indicates!" will be there
- Resolution ([source](https://www.dotpointer.ga/?section=notes&view=note&id_notes=195))
	- Run `gdisk /dev/sdX`
	- Type `x` to go into experts mode, then `e` to relocate the backup partition table to the end of the disk, then `w` to write changes, then confirm.