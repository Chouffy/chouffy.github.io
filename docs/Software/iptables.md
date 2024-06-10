---
aliases:
  - Linux Firewall
  - network kill-switch
---
Is a [[simplewall]] [[Software]] on [[Linux]]
## Setup
- `-p`: protocol
- `--dport` or `--dports`: ports
	- `-p` is required
### Example

```sh
sudo iptables -A OUTPUT -o eth+ -p udp -m multiport --dports 53,1300:1302,1194:1197 -d 141.98.255.0/24,193.138.218.0/24 -j ACCEPT
```
### Persistence
- Install `iptables-persistent`
- Update rules with `iptables-save > /etc/iptables/rules.v4 && ip6tables-save > /etc/iptables/rules.v6`
### Reset
- Do the following according to [this post](https://serverfault.com/a/200658)
```sh
sudo iptables -P INPUT ACCEPT
sudo iptables -P FORWARD ACCEPT
sudo iptables -P OUTPUT ACCEPT
sudo iptables -t nat -F
sudo iptables -t mangle -F
sudo iptables -F
sudo iptables -X
sudo ip6tables -P INPUT ACCEPT
sudo ip6tables -P FORWARD ACCEPT
sudo ip6tables -P OUTPUT ACCEPT
sudo ip6tables -t nat -F
sudo ip6tables -t mangle -F
sudo ip6tables -F
sudo ip6tables -X
```
- Check the result with `iptables -nvL` the content
```
Chain INPUT (policy ACCEPT 0 packets, 0 bytes)
 pkts bytes target     prot opt in     out     source               destination

Chain FORWARD (policy ACCEPT 0 packets, 0 bytes)
 pkts bytes target     prot opt in     out     source               destination

Chain OUTPUT (policy ACCEPT 0 packets, 0 bytes)
 pkts bytes target     prot opt in     out     source               destination
```
- Save the rules
### Kill-switch
- Make sure that the interface is `eth` - check with `ip a`
	- On [[Virtualization|VM]], replace `eth*` by `ens*`
- From [[Mullvad]] guide: [Setup OpenVPN on Linux](https://mullvad.net/en/help/linux-openvpn-installation/)
```sh
sudo iptables -P OUTPUT DROP
sudo iptables -A OUTPUT -o tun+ -j ACCEPT
sudo iptables -A INPUT -i lo -j ACCEPT
sudo iptables -A OUTPUT -o lo -j ACCEPT
sudo iptables -A OUTPUT -d 255.255.255.255 -j ACCEPT
sudo iptables -A INPUT -s 255.255.255.255 -j ACCEPT
# Adapt the below as required
sudo iptables -A OUTPUT -o eth+ -p udp -m multiport --dports 53,1300:1302,1194:1197 -d 141.98.255.0/24,193.138.218.0/24 -j ACCEPT
sudo iptables -A OUTPUT -o eth+ -p tcp -m multiport --dports 53,443 -d 141.98.255.0/24,193.138.218.0/24 -j ACCEPT
# Disable IPv6
sudo ip6tables -P OUTPUT DROP
sudo ip6tables -A OUTPUT -o tun+ -j ACCEPT
```
## Troubleshooting
### `unknown option --dport`
- Check that the protocol is defined, like `-p tcp`
- Check that you run as root
