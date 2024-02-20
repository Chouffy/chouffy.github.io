---
aliases:
  - Linux Network Interfaces
  - ifup
  - ifdown
  - ifconfig
---
Is a [[Linux]] [[Software]] to manage [[network]] interfaces

Links: 
- [Official documentation](https://manpages.debian.org/stretch/ifupdown/interfaces.5.en.html)
## Edit
In `/etc/network/interfaces`:
```sh
auto eth0 #automatically brings eth0 on boo
allow-hotplug eth1
iface eth0 inet dhcp
iface eth0 inet6 auto
iface eth1 inet static
	address 192.168.1.2/24
	gateway 192.168.1.1
iface eth1 inet6 static
	address fec0:0:0:1::2/64
	gateway fec0:0:0:1::1
```
## Interact
- `ip a` to show all interfaces
- `ifdown`/`ifup` to bring down/up an interface *defined in the interface file*
	- Needs to be run with [[Sudo]], or from `/sbin/ifconfig`
## Notes
Relation with [other tools](https://www.debian.org/doc/manuals/debian-reference/ch05.en.html)

|obsolete net-tools|new iproute2 etc.|manipulation|
|---|---|---|
|`ifconfig`(8)|`ip addr`|protocol (IP or IPv6) address on a device|
|`route`(8)|`ip route`|routing table entry|
|`arp`(8)|`ip neigh`|ARP or NDISC cache entry|
|`ipmaddr`|`ip maddr`|multicast address|
|`iptunnel`|`ip tunnel`|tunnel over IP|
|`nameif`(8)|`ifrename`(8)|name network interfaces based on MAC addresses|
|`mii-tool`(8)|`ethtool`(8)|Ethernet device settings|