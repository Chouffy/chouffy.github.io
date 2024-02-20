---
aliases:
  - pCP
---
Is an [[Operating System]] for [[Raspberry Pi]] based on [[Linux]] to behave like an [[Music]] receiver & server

It is based on:
- [[Squeezelite]] for the renderer part
- [[Logitech Media Server]] for the server + UI part
## Setup
1. [Download](https://docs.picoreplayer.org/downloads/) and flash the image on a SD
2. Boot and access the Raspberry Pi IP on HTTP
3. In the main interface:
	1. Go to Squeezelite Settings, change audio output, reboot
	2. Go to Main Page, resize FS, reboot
	3. Go to LMS page, switch to Server at the bottom of the form and install the server
### [[Bluetooth]]
- "BT Output Device" has to be selected
- SBC, AAC and AptX worked for me, but not Apt-X HD & LDAC
#### Add unsupported [[Bluetooth]] adapter to [[piCorePlayer]]
1. From [this forum post](https://forums.slimdevices.com/forum/user-forums/linux-unix/111586-picoreplayer-8-0-0-bluetooth-discussion?p=1633747#post1633747):
1. On a separate computer
	1. `mkdir -p ~/tmp/lib/firmware/rtl_bt​`
	2. `cd ~/tmp/lib/firmware/rtl_bt​`
	3. Download the required firmware files from the [[Linux]] [upstream git](https://git.kernel.org/pub/scm/linux/kernel/git/firmware/linux-firmware.git/tree/rtl_bt) in plain, for example `rtl8761bu_config.bin` and `rtl8761bu_fw.bin` 
	4. `cd ~/`
	5. `mksquashfs tmp/ firmware-bluetooth-rtl8761bu.tcz`
		- Be careful to have an empty file, otherwise existing and new files will be merged
2. Check the archive with [[fstab#SquashFS]]
3. Send the package to your [[piCorePlayer|pCP]]
	1. Place it in `/mnt/mmcblk0p2/tce/optional/`
	2. Change `/mnt/mmcblk0p2/tce/onboot.lst` and add your package `firmware-bluetooth-rtl8761bu.tcz` on top
## Usage
- [[Secure Shell Protocol|SSH]]: `tc:piCore` by default, can be changed when Beta is activated, Main page → Security
	- Set up passwordless login: follow [[Secure Shell Protocol#Create keys]]
	- Then, do a backup: `pcp bu`
- Any changes on the file system is wiped, as [[piCorePlayer|pCP]] is read-only
	- Specify the directory you want to save in `/opt/.filetool.lst`
	- GUI: Go to Main Page → Backup to save the file system
	- CLI: `pcp bu`