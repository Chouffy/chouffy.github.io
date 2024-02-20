Is a wireless [[network]] router that runs on [[OpenWrt]].

Links:
- [AX3200 on the OpenWrt Wiki](https://openwrt.org/toh/xiaomi/ax3200)
- [AX3200 GitHub projet](https://github.com/mikeeq/xiaomi_ax3200_openwrt)
## Install [[OpenWrt]]
This device is shipped with a modded version of [[OpenWrt]], but the stock version can be installed. However, the [[telnet]] console is disabled by default.
### Find the telnet status and password
```sh
# Create temporary directory
mkdir -p xiaomi_openwrt
cd xiaomi_openwrt
# Pull scripts for generating telnet password
curl -L https://raw.githubusercontent.com/mikeeq/xiaomi_ax3200_openwrt/main/script.sh -o ./script.sh
curl -L https://raw.githubusercontent.com/mikeeq/xiaomi_ax3200_openwrt/main/password.py -o ./password.py
# Replace <STOK> with the session token grabbed from the login URL after the initial setup
## http://192.168.31.1/cgi-bin/luci/;stok=1675d313f8c5d384e191b653c44c5e3a/web/home#router
### i.e.: STOK="1675d313f8c5d384e191b653c44c5e3a" bash script.sh
STOK="<STOK>" bash script.sh
# look for telnet_en=1 or "telnet":true
```
### Enabling telnet using another Xiaomi router
1. Have both routers
	1. Router A: OpenWrt to be installed on it
	2. Router B: Another Xiaomi router
2. Connect a Ethernet cable between LAN of Router A and WAN of Router B
3. Router B: Factory reset

Then follow instruction of [this post](https://forum.openwrt.org/t/adding-openwrt-support-for-xiaomi-redmi-router-ax6s-xiaomi-router-ax3200/111085/936): 
If an ethernet cable is connected from the lan port of the device to which the method will be applied to the wan port of the second RB01, and the second device is returned to its factory settings from the button, it is added to the first device in mesh mode (mode 3). So the main device will be in mode 4.

First we will confirm that the device is in netmode 4 from this link.

Login to the router, in another tab use your token with link: `http://192.168.31.1/cgi-bin/luci/;stok={token}/api/xqnetwork/get_netmode`
If result is `{"netmode":4,"code":0}` proceed;

Login to the router, in another browser tab use your token with link;
`http://192.168.31.1/cgi-bin/luci/;stok={token}/api/misystem/set_sys_time?timezone=%20%27%20%3B%20zz%3D%24%28dd%20if%3D%2Fdev%2Fzero%20bs%3D1%20count%3D2%202%3E%2Fdev%2Fnull%29%20%3B%20printf%20%27%A5%5A%25c%25c%27%20%24zz%20%24zz%20%7C%20mtd%20write%20-%20crash%20%3B%20`
Link returns with result `{"code":0}`
Restart the router from the interface

When the device is turned on login to the router, in another browser tab use your new token with link;
`http://192.168.31.1/cgi-bin/luci/;stok={token}/api/misystem/set_sys_time?timezone=%20%27%20%3B%20bdata%20set%20telnet_en%3D1%20%3B%20bdata%20set%20ssh_en%3D1%20%3B%20bdata%20set%20uart_en%3D1%20%3B%20bdata%20commit%20%3B%20`
Link returns with result `{"code":0}`

After this, open another browser tab use same token (used in the second step) with link;
`http://192.168.31.1/cgi-bin/luci/;stok={token}/api/misystem/set_sys_time?timezone=%20%27%20%3b%20mtd%20erase%20crash%20%3b%20`
Link returns with result `{"code":0}`

Restart the router from the interface.

After reboot check the result with the link;
`http://192.168.31.1/cgi-bin/luci/api/xqsystem/bdata`
Result: 
`{"ssh_en":"1"..."telnet_en":"1"..."uart_en":"1"...}`
### Install OpenWrt
Follow [this guide](https://github.com/mikeeq/xiaomi_ax3200_openwrt#uart-flash):
#### Start SSH
```sh
# Create telnet terminal session, use TELNET_PASSWORD from script output from the previous point
telnet 192.168.31.1
# Enable SSH
nvram set ssh_en=1
# Add flags which allow you to recover from bad flashes without going back to the OEM firmware.
nvram set uart_en=1
nvram set boot_wait=on
nvram commit
sed -i '/flg_ssh.*release/ { :a; N; /fi/! ba };/return 0/d' /etc/init.d/dropbear
# Set password for root user, `echo -e “<PASSWORD>/n<PASSWORD>” | passwd root` didn't work for me
passwd root
# After changing root password it will be a persistent change even after restart, so if you'll be trying to telnet after reboot use this password instead of generated one from above
# Start SSHd (dropbear)
/etc/init.d/dropbear enable
/etc/init.d/dropbear start
# Test SSH connection, for authentication use password set earlier
ssh root@192.168.31.1
# cat /proc/mtd
```
#### Copy OpenWrt
```sh
# Create temporary directory
mkdir -p xiaomi_openwrt_images
# Download images from Internet
curl -L https://downloads.openwrt.org/releases/22.03.2/targets/mediatek/mt7622/openwrt-22.03.2-mediatek-mt7622-xiaomi_redmi-router-ax6s-squashfs-factory.bin -o xiaomi_openwrt_images/factory.bin
# Copy images over SSH to router
scp -r xiaomi_openwrt_images root@192.168.31.1:/tmp/
## If your factory firmware doesn't have sftp-server installed use command below
### ash: /usr/libexec/sftp-server: not found
### scp: Connection closed
ssh root@192.168.31.1 "mkdir -p /tmp/xiaomi_openwrt_images"
cat xiaomi_openwrt_images/factory.bin | base64 -w0 | ssh root@192.168.31.1 "cat | base64 -d > /tmp/xiaomi_openwrt_images/factory.bin"
```
#### Validate checksum and flash
```sh
# Open SSH terminal session
ssh root@192.168.31.1
cd /tmp/xiaomi_openwrt_images
# Validate those checksums against checksums found in github releases file sha256sums_artifacts_only
sha256sum *.bin
curl -Ls https://downloads.openwrt.org/releases/22.03.2/targets/mediatek/mt7622/sha256sums | grep -i factory | grep -i xiaomi
# Set NVRAM flags
## Run also first commented two lines if after flashing sysupgrade.bin image router restarts to stock firmware instead of OpenWRT
# nvram set flag_boot_rootfs=0
# nvram set "boot_fw1=run boot_rd_img;bootm"
nvram set flag_boot_success=1
nvram set flag_try_sys1_failed=0
nvram set flag_try_sys2_failed=0
nvram commit
# Flash image
mtd -r write factory.bin firmware
```
## Configure OpenWrt
### WLAN
- 160MHz wide 5GHz channels don't work on some clients
	- in General Setup select channel to `64`
	- in Advanced Settings change country code from `driver default` to `other`
## Unbrick router
According to [this guide](https://github.com/mikeeq/xiaomi_ax3200_openwrt#Router-debricking):
1.  Change your NIC IP address to 192.168.31.100
2.  Remember to disable any firewall on your PC which can block TFTP traffic
3.  Create TFTP server using `dnsmasq` or use [Xiaomi Recovery Tool](https://forum.openwrt.org/t/xiaomi-mi-router-4a-gigabit-edition-r4ag-r4a-gigabit-fully-supported-and-flashable-with-openwrtinvasion/36685/747?u=mikeeq):
```sh
mkdir -p /tmp/tftp
# Stock image should be renamed to TFTP server IP address in hex (Eg. C0A81F64.img), 192.168.31.2 - C0A81F02.img, 192.168.31.50 - C0A81F32.img, 192.168.31.100 - C0A81F64.img
curl -Ls http://cdn.awsde0-fusion.fds.api.mi-img.com/xiaoqiang/rom/rb01/miwifi_rb01_firmware_bbc77_1.0.71_INT.bin -o C0A81F64.img
# http://cdn.awsde0-fusion.fds.api.mi-img.com/xiaoqiang/rom/rb01/miwifi_rb01_firmware_36352_1.0.50_INT.bin
# To grab URL for stock firmware check http://192.168.31.1/cgi-bin/luci/;stok=<stok>/api/xqsystem/check_rom_update
# Check your interface name, in my case it's enp9s0
ip a

systemctl stop NetworkManager
systemctl stop firewalld
systemctl stop systemd-resolved.service
# Check if there's no iptables rules which could block dhcp/tftp traffic (UDP 67, UDP 69)
iptables -L
# Check if there are no services running on dhcp/tftp ports (UDP 67, UDP 69)
netstat -tulpn

ip address flush dev enp9s0
ip address add 192.168.31.100/24 dev enp9s0

dnsmasq --no-daemon -i enp9s0 --dhcp-range=192.168.31.1,192.168.31.99 --enable-tftp --tftp-root=/tmp/tftp --dhcp-boot=C0A81F64.img -p0 -K --log-dhcp --bootp-dynamic
```
1.  Power off your device by pulling out power cord from the device
2.  Push the reset button, keep pushing it and simultaneously put the power cord back on
3.  Release the reset button when Power LED will start fast blinking
4.  After successful tftp recovery flash Power LED will start blinking in blue colour, then you can safely restart your router by replugging the power cord.
5.  Please consider doing the Factory Reset if you're planning to stay on that FW