---
aliases:
  - LuCI
---
Is an [[Operating System]] based on [[Linux]] for [[network]] router devices.
Few devices I own that can run it: [[Raspberry Pi]], [[Xiaomi AX3200]], [[TP-Link TL-WR841N]]
## Links
- [Website](https://openwrt.org/)
	- [Download](https://downloads.openwrt.org/)
	- [Firmware selector](https://firmware-selector.openwrt.org/)
- [Forum](https://forum.openwrt.org/)
## Hardware
- Check the [Table of Hardware](https://openwrt.org/toh/start)
- Annotation is RAM/ROM
	- 4/32 is deprectiated
	- 8/64 will be soon (in ~2023)
	- 16/128 is recommended
- Possibilities
	- A great device (for me) is [[Xiaomi AX3200]]
	- [GL.iNet](https://www.gl-inet.com/) is using OpenWrt as a base
### Generic x86/64 ([[Virtualization|VM]])
- Follow [this guide](https://openwrt.org/docs/guide-user/virtualization/virtualbox-vm) to install on [[VirtualBox]]
- After LAN setup, the LUCi interface is available on `192.168.56.2`
## Software
- Build custom builds using [OpenWrt ASU](https://github.com/openwrt/asu)
- Additional packets
	- It uses [[LuCI]] as the user front-end
	- You can use [[iPerf]] to measure performance
	- [[AdGuard Home]] can be installed - package `adguardhome` - see [[AdGuard Home#OpenWrt]]
	- [[Tailscale]] can be installed - [documentation](https://openwrt.org/docs/guide-user/services/vpn/tailscale/start)
	- [[Let's Encrypt]] can be installed with [acmesh](https://github.com/acmesh-official/acme.sh/wiki/dnsapi) - package `acme acme-dnsapi luci-app-acme`
		- If you use [[Cloudflare]], you'll need: `dns_cf` and 3 variables: `CF_Token` (API) and `CF_Account_ID` + `CF_Zone_ID` (visible in the Cloudflare dashboard)
	- [[Dynamic DNS]] can be installed with `luci-app-ddns`
- Get logs by using `logread`
### WAN
- Bridge is impossible to do on some routers (like Livebox 5)
- Workaround: firewall to Low and DMZ to the OpenWrt box
### WLAN
- Guest Wi-Fi: [Guide](https://openwrt.org/docs/guide-user/network/wifi/guestwifi/guest-wlan) and [additional tuning](https://openwrt.org/docs/guide-user/network/wifi/guestwifi/extras)
- [[Apple]] [[iOS]] devices cannot connect to WPA2/WPA3
#### IoT Network without internet access
- Create an additional Wi-Fi network
- Use the same zone than you main network
- Define an additional firewall rule to prevent the connection to internet - [Guide](https://openwrt.org/docs/guide-user/firewall/fw3_configurations/fw3_parent_controls#web_interface_instructions)
	1.  Navigate to **LuCI → Network → Firewall → Traffic Rules**.
	2.  Click **Add** and specify:
	    -   Name: `Filter-Parental-Controls`
	    -   Protocol: Any
	    -   Source zone: `lan`
	    -   Destination zone: `wan`
	    -   Action: reject
	3.  (Optional) If you want to add a MAC or IP limitation, on the **Advanced Settings** tab specify:
	    -   Source MAC address: `00:11:22:33:44:55`
	    -   Source IP address: `192.168.1.2`
	4.  Click **Save**, then **Save & Apply**.
### Interfaces
#### Default [[IPv6]] configuration
- Interface → LAN
	- Advanced Settings
		- IPv6 Assignment Lenght: 60
	- DHCP Server - IPv6 Settings
		- NDP-Proxy: disabled
### Statistics in [[Home Assistant]]
- See [OpenWRT Metrics & Automations with Home Assistant - Jon Brito](https://jonbrito.dev/articles/openwrt-mqtt-ha)
- Setup statistics collection
	- `opkg update`
	- `opkg install luci-app-statistics collectd-mod-mqtt collectd-mod-rrdtool collectd-mod-uptime collectd-mod-conntrack collectd-mod-thermal`
- Setup [[MQTT]] server like [[Mosquito MQTT Broker]]
- Setup [[MQTT]] client in `/etc/collectd/conf.d/mqtt.conf`
	```c
	LoadPlugin mqtt
	<Plugin "mqtt">
	  <Publish "OpenWRT">
	    Host "192.168.1.xxx" # Your MQTT broker IP address
	    Port 1883
	    User "openwrt"
	    Password "YourSuperSecretPassword"
	    ClientId "OpenWRT"
	    Prefix "collectd"
	    Retain true
	  </Publish>
	</Plugin>
	```
- In [[Home Assistant]], listen for the new MQTT topics