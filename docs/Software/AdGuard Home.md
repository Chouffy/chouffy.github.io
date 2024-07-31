Is a [[Linux]] [[Software]] that can handle [[Domain Name Server|DNS]] server duty.
It can be installed on [[OpenWrt]]
## Notes
- [[Android]] 9+ supports DNS-over-TLS natively (default port: 853)
## Setup
### [[OpenWrt]]
- Change DNS forwarding to your choosing like `9.9.9.9`, and the DNS port to `53`
- Install
```sh
opkg update
opkg install adguardhome
service adguardhome enable
service adguardhome start
```
- Execute the [Setup script](https://openwrt.org/docs/guide-user/services/dns/adguard-home#setup) on the OpenWrt documentation
```sh
# Get the first IPv4 and IPv6 Address of router and store them in following variables for use during the script.
NET_ADDR=$(/sbin/ip -o -4 addr list br-lan | awk 'NR==1{ split($4, ip_addr, "/"); print ip_addr[1] }')
NET_ADDR6=$(/sbin/ip -o -6 addr list br-lan scope global | awk 'NR==1{ split($4, ip_addr, "/"); print ip_addr[1] }')
 
echo "Router IPv4 : ""${NET_ADDR}"
echo "Router IPv6 : ""${NET_ADDR6}"
 
# 1. Enable dnsmasq to do PTR requests.
# 2. Reduce dnsmasq cache size as it will only provide PTR/rDNS info.
# 3. Disable rebind protection. Filtered DNS service responses from blocked domains are 0.0.0.0 which causes dnsmasq to fill the system log with possible DNS-rebind attack detected messages.
# 4. Move dnsmasq to port 54.
# 5. Set Ipv4 DNS advertised by option 6 DHCP 
# 6. Set Ipv6 DNS advertised by DHCP
uci set dhcp.@dnsmasq[0].noresolv="0"
uci set dhcp.@dnsmasq[0].cachesize="1000"
uci set dhcp.@dnsmasq[0].rebind_protection='0'
uci set dhcp.@dnsmasq[0].port="54"
uci -q delete dhcp.@dnsmasq[0].server
uci add_list dhcp.@dnsmasq[0].server="${NET_ADDR}"
 
#Delete existing config ready to install new options.
uci -q delete dhcp.lan.dhcp_option
uci -q delete dhcp.lan.dns
 
# DHCP option 6: which DNS (Domain Name Server) to include in the IP configuration for name resolution
uci add_list dhcp.lan.dhcp_option='6,'"${NET_ADDR}" 
 
#DHCP option 3: default router or last resort gateway for this interface
uci add_list dhcp.lan.dhcp_option='3,'"${NET_ADDR}"
 
#Set IPv6 Announced DNS
for OUTPUT in $(ip -o -6 addr list br-lan scope global | awk '{ split($4, ip_addr, "/"); print ip_addr[1] }')
do
	echo "Adding $OUTPUT to IPV6 DNS"
	uci add_list dhcp.lan.dns=$OUTPUT
done
uci commit dhcp
/etc/init.d/dnsmasq restart
```
- Restart
#### Notes on upgrade
- Configuration lives in `/etc/adguardhome.yaml`
- After a `sysupgrade`, no DNS request will be processed
	- Needs to configure DNS port back to 53
- AdGuard needs to be reinstalled but old settings will persists 
### [[Oracle Cloud]]
- Check the [excellent tutorial here](https://jmcglock.substack.com/p/installing-adguard-home-on-oracle)
### Encryption
If using [[Let's Encrypt]], use:
- Certificates: `fullchain.pem`
- Private key: `privkey.pem`
## Custom Filtering rules
- See [documentation](https://github.com/AdguardTeam/AdGuardHome/wiki/Hosts-Blocklists#client)
- Possibility of combining several rules, like `||something.local.net^$client=192.168.0.0/24,dnsrewrite=192.168.0.1`
