Is an [[Operating System]] running on [[Linux]]
## Setup
### Boot in [[Unified Extensible Firmware Interface|UEFI]] Shell and not in Debian
Sometime, the setup is successful, but you boot into the [[Unified Extensible Firmware Interface|UEFI]] Shell
If you do `efibootmgr`, you'll see that the debian entry is missing - see [Source](https://linuxconfig.org/how-to-manage-efi-boot-manager-entries-on-linux)

It can be edited from the [[BIOS]], or the EFI partition can be changed to the default name: from `/EFI/debian/grubx64.efi` to ![[Unified Extensible Firmware Interface#^333cb0]]
## Usage
- Default bash won't include `/sbin` directories in PATH except if called like this: `su -`
### Packages
- [Package directory](https://packages.debian.org/index) to manually download things