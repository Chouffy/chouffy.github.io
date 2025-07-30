Is a [[Virtual Private Network|VPN]] to access internal [[network]] ressources from the internet.
## Notes
- Exit nodes to have a full-VPN
- IP ranges ([source](100.64.0.0/10)): `100.64.0.0/10` and `fd7a:115c:a1e0::/48`
## Setup
### [[OpenWrt]]
To expose a subnet to Tailscale - see [source](https://www.wundertech.net/how-to-set-up-tailscale-on-openwrt/)
```sh
opkg update
opkg install tailscale
opkg install iptables-nft
tailscale up --netfilter-mode=off --advertise-routes=[SUBNET] --advertise-exit-node
```
Then you can connect via the client and access internal IP
### [[Docker]]
- Check [documentation](https://tailscale.com/kb/1282/docker)
- [This website](https://www.wundertech.net/how-to-set-up-tailscale-on-docker/) recommend the following settings:
	- Network `host`
	- Volume `/dev/net/tun`
	- Capabilities: `NET_ADMIN`, `NET_RAW`