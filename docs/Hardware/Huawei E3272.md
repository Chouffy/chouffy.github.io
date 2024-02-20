Is a [[WWAN]] [[Universal Serial Bus]] modem
## Characteristics
- 2G/3G/4G, up to 150 Mbps
- 3 modes with corresponding [[Universal Serial Bus]] VID/PID
	- `12d1` / `1f01` for Mass storage mode - default on connection 
	- `12d1` / `14db` for RNDIS mode with HiLink
		- switch from mass storage to HiLink with `usb-modeswitch`: `/sbin/usb_modeswitch -X -v 12d1 -p 15ca` and replace V and D with the proper VID/PID
	- `12d1` / `1c05` for TTY mode
## Notes
- HiLink is the NAT mode, where the stick act as a RNDIS interface in Windows
- TTY is the console mode, more compatible with [[Linux]] via [[Gammu]] for instance
### Switch from HiLink to TTY
This is required if you want to use the stick in [[Home Assistant]] for instance.
- Open the case, and plug the device while shorting the boot pin
	- Next to the microSD card reader
	- Bottom right when looking at the stick with USB on top
	- ![[Huawei E3272-20231023135811948.webp|272]]
	- If successful, the device should appear as a TTY USB0 - check with `ls /dev/*USB*`
- Download each repo and do a `make`:
	- `git clone https://github.com/forth32/balongflash.git`
	- `https://github.com/forth32/balong-usbdload.git`
	- You may need to  `apt install libz-dev`
- Download the firmware on [routerunlock](https://routerunlock.com/download-huawei-e3272-modem-firmware-software-update-free/)
	- AT interface should be present with firmware `21.420.07.00.00`
	- USB loader should be present with firmware `xx.xxx.99.xx.xx`
		- But can erase your device! - [Source](https://github.com/forth32/balong-usbdload#what-is-usblsafebin)
		- Better use the `usblsafebin` version on [GitHub](https://raw.githubusercontent.com/forth32/balong-usbdload/master/usblsafe-327x.bin)
- Flash the USB loader: `./balong-usbdload/balong-usbdload -p /dev/ttyUSB0 balong-usbdload/usblsafe-327x.bin`
	- Device should appear soon with 3 TTY interface
- Flash the firmware: `./balongflash/balong_flash -p /dev/ttyUSB2 E3272s_Update_21.420.99.07.00.BIN`
	- Try all 3 USB TTY if it doesn't work
- Unplug & replug
- Check if it worked:
	- On Linux host, you could see Mobile Broadband in the Network Manager
	- On Windows, try to connect to COMx via [[KiTTY]]
		- Issue the `AT` command
		- It should answer `OK`
- Set the profile in the TTY: `AT^SETPORT="FF;10,12"` then `AT^RESET`
### AT Commands
- Always put a space at the end, before the command!
- Multiple commands can be combined with `;`

| Commands       | Reply                        |
| -------------- | ---------------------------- |
| `AT`           | `OK` to check the connection |
| `ATI`          | Basic informations           |
| `AT^FHVER`     | Firmware info                |
| `AT^SETPORT?`  | List current profile         | 
| `AT^SETPORT=?` | List available profiles      |
| `AT^RESET`     | Reset the device             |
## Ressources
- [Example of AT commands on a Huawei modem](https://openwrt.org/docs/guide-user/network/wan/wwan/at_commands#huawei_e392)
- [Disable HiLink mode and force tty modem on NEW Huawei E3272 - blog.le-vert.net](https://blog.le-vert.net/?p=196)
- [Set Huawei E3372h from hilink to stick mode - Relix.de](https://markus.relix.de/index.php/Set_Huawei_E3372h_from_hilink_to_stick_mode)