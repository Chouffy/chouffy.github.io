---
aliases: UEFI
---
Is a set of specification & [[Software]] platform that is used to boot and interface with an [[Operating System]]
## Secure Boot
- Is a method to check whether a bootloader is digitally signed.
- Boot Order Lock also lock book order and shim selection
### USB Key preparation
- In [[Rufus]], prepare a non-bootable MBR FAT32 key
- Then copy the required files, for example from [[Clonezilla]]
## UEFI Shell
- Works similarly to a bash shell
- The bootloader is searching for `/EFI/BOOT/bootx64.efi` by default ^333cb0
### Commands
- `map` to show the mapping table
- `cd /EFI/BOOT/` to browse to path
- `bcfg boot add 1 bootx64.efi "OSname"` to add an entry
	- `1` being the priority
### Recover from a bad boot
- You are greeted with the UEFI Shell, so try to find the loader:
- The mapping table will give you all devices that EFI see, like `FS0:` or `HD0b:`
- Browse to the bootloader
	- `FS0:`
	- `cd EFI\debian`
	- `grubx64.efi`