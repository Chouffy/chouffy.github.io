Is an [[Ubuntu]] [[Linux]] distribution running with the [[Xfce]] window manager. It's lighter than full blown Ubuntu!
## Tip & Tricks
### Network
#### Access [[Samba]] ressources with [[Thunar]]
- Install `gvfs` and `gvfs-backends`
- Access the ressource by typing `smb://IP/foldername` in the address bar
- Configure [[iptables]]
	```sh
	sudo iptables -I OUTPUT -d 192.168.X.X -p udp --dport 445 -j ACCEPT
	sudo iptables -I OUTPUT -d 192.168.X.X -p udp --dport 137 -j ACCEPT
	sudo iptables -I OUTPUT -d 192.168.X.X -p udp --dport 138 -j ACCEPT
	sudo iptables -I OUTPUT -d 192.168.X.X -p udp --dport 139 -j ACCEPT
	sudo iptables -I OUTPUT -d 192.168.X.X -p tcp --dport 445 -j ACCEPT
	sudo iptables -I OUTPUT -d 192.168.X.X -p tcp --dport 137 -j ACCEPT
	sudo iptables -I OUTPUT -d 192.168.X.X -p tcp --dport 138 -j ACCEPT
	sudo iptables -I OUTPUT -d 192.168.X.X -p tcp --dport 139 -j ACCEPT
	```