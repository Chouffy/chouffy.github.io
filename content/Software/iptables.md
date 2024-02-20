---
aliases: Linux Firewall
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
- Update rules with
	- `sudo iptables-save > /etc/iptables/rules.v4`
	- `sudo ip6tables-save > /etc/iptables/rules.v6`
### Reset
```sh
sudo iptables -P INPUT ACCEPT
sudo iptables -P FORWARD ACCEPT
sudo iptables -P OUTPUT ACCEPT
sudo iptables -t nat -F
sudo iptables -t mangle -F
sudo iptables -F
sudo iptables -X
```
## Troubleshooting
### `unknown option --dport`
- Check that the protocol is defined, like `-p tcp`
- Check that you run as root
