Is a wireless [[network]] router that runs on [[OpenWrt]].
## Links
- [AX3200 on the OpenWrt Wiki](https://openwrt.org/toh/xiaomi/ax3200)
- [AX3200 GitHub projet](https://github.com/mikeeq/xiaomi_ax3200_openwrt)
## Install [[OpenWrt]]
- [Installation guide](https://openwrt.org/toh/xiaomi/ax3200#installation) on stock firmware, including [[Telnet]] console activation
- [Debricking guide](https://openwrt.org/toh/xiaomi/ax3200#debricking) using [[Tftpd64]] for instance
## Configure OpenWrt
### WLAN
- 160MHz wide 5GHz channels don't work on some clients
	- in General Setup select channel to `64`
	- in Advanced Settings change country code from `driver default` to `other`