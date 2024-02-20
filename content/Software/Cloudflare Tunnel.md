Is a [[Software]] to access applications outside your current network via [[Cloudflare]] and without opening up a firewall port.
This doesn't expose Public IP, and  protected against DDoS.

Links:
* [Introduction to Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/)
## Setup
1. Setup the [Cloudflare Package Repo](https://pkg.cloudflare.com/) if needed
2. Edit `/etc/hosts` file to add certificate DNS name to being able to self resolve it - and use this DNS name in the Cloudflare Tunnel Public Hostname (*not* `localhost`, you may end up with Error 502 as the certificate DNS and `localhost` won't match)
3. Follow the *New Tunnel* guide in the Cloudflare Tunnel dashboard
	1. For [[Nextcloud]]: use full defined name in the URL, not `localhost`
4. Or if you want to do it manually (not recommended)
	1. Follow the [step-by-step CLI guide](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/tunnel-guide/#set-up-a-tunnel-locally-cli-setup)
	1. Move configuration from `~/.cloudflared/` to `/etc/cloudflared/` before running the tunnel
	1. Install `cloudflared` as a service:
		```sh
		sudo cloudflared service install
		sudo systemctl start cloudflared
		sudo systemctl enable cloudflared
		```
5. Increase [UDP Buffer Size](https://github.com/quic-go/quic-go/wiki/UDP-Buffer-Sizes)
	1. Create/edit `/etc/sysctl.d/local.conf`
	2. Add the following
		- `net.core.rmem_max=2500000`
		- `net.core.wmem_max=2500000`
	3. Reboot
### Logging
- By default, `cloudflared` doesn't store logs
- If [[systemd]] is used: `systemctl status cloudflared`
## Reference
- If you install `cloudflared` via a package, the config is in 
* `cloudflared tunnel list` to list all tunnels
### Maintenance
* `cloudflared service uninstall`