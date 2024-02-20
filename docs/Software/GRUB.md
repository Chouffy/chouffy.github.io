Is a [[boot manager]]
## Configuration
### Kernel Command Lines
- Options lives in `/etc/default/grub`
	- Kernel commandlines are placed in the variable `GRUB_CMDLINE_LINUX_DEFAULT`
		- Separator is space: ` `
- `update-grub` must be launched to appends its content to all linux entries in `/boot/grub/grub.cfg`