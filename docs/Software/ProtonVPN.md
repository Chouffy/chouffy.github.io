Is a [[Virtual Private Network|VPN]] [[Software]] that happens to provide a free version
## Notes
- [[iptables]] configuration example (see [[iptables|network kill-switch]])
```sh
sudo iptables -A OUTPUT -o eth+ -p udp -m multiport --dports 80,5060,4569,1194,51820 -d 185.107.0.0/16,169.150.0.0/16 -j ACCEPT
```