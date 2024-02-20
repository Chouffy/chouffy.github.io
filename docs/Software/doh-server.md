Is a [[Software]] providing a [[Domain Name Server|DNS]]-over-HTTPS server
## Setup
1. [Download](https://github.com/DNSCrypt/doh-server/releases)and unzip the content with `bunzip2 doh-proxy*`
2. Copy the executable to `/usr/local/bin/`
3. One time setup for [[Alpine Linux]]
	1. `sudo adduser -s /usr/sbin/nologin -D -H doh-proxy`
	2. Edit a new service in `/etc/init.d/doh-proxy` and set pr

	```sh
	#!/sbin/openrc-run
	
	name=doh-proxy
	description="DNS over HTTPS server proxy"
	supervisor="supervise-daemon"
	command="/usr/local/bin/doh-proxy"
	command_args="-u 127.0.0.1:53"
	command_user="doh-proxy"
	
	depend() {
	        after syslog network-online
	}
	```
	
	1. Set proper 755 permissions
	2. `sudo rc-update add doh-proxy default`
	3. `sudo rc-service doh-proxy start` 