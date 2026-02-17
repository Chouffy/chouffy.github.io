This is a [[docs/How-To/index|How-To]] use [[OpenWrt]] to act as a [[Wi-Fi]] client and use it to connect [[LAN]] devices via it. [From this source](https://www.nerd-quickies.net/2019/08/20/setup-lan-wlan-bridge-with-openwrt-luci/).
1. Reset the device
2. Set password
3. Assign a fixed IP to LAN
4. Create a WLAN client connection
5. Install `luci-proto-relay relayd`
6. Add a new interface
	1. Name: `stabridge`
	2. Type: *Relay bridge*
	3. Relay between network: `lan:` and `wwan:`
7. Add a new firewall zone
	1. Name: `bridgezone`
	2. Forward: accept
	3. Covered network: `lan:` and `wwan:`
8. Reboot