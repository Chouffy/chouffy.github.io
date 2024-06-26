---
aliases: Alpine Wall
---
Is a [[simplewall]] [[Software]] for [[Alpine Linux]], powered by [[JavaScript Object Notation]] (_policy file_) 
## Setup
1. Install
    ```bash
    apk add ip6tables iptables
    apk add -u awall
    ```
1. First time setup
    ```bash
    modprobe -v ip_tables # IPv4
    modprobe -v ip6_tables # if IPv6 is used
    modprobe -v iptable_nat # if NAT is used aka router
    rc-update add iptables
    rc-update add ip6tables
    ```
1. Setup rules
    * Awall is a front-end for iptables
    * Default are in `/usr/share/awall/mandatory/*`
    * Custom are in `/etc/awall/`
    * See example below        ```
1. Awall management
    * `awall list`
    * `awall enable X` to enable a policy
    * `awall activate` 
1. iptable management
    * `/etc/iptables/` view rules
    * `iptables -S` to view
    * `rc-service iptables {start|stop|restart|status}`
    * `rc-service ip6tables {start|stop|restart|status}`
## Rules
Some examples below - from [this tutorial](https://www.cyberciti.biz/faq/how-to-set-up-a-firewall-with-awall-on-alpine-linux/) or [this blog](https://www.zsiegel.com/2022/01/13/configuring-alpine-linux-firewall-with-docker)

Add the following in `/etc/awall/optional/`

`default.json`
```json
{
  "description": "default deny all",
  "zone": {
    "WAN": { "iface": ["eth0"] }
  },
  "policy": [{ "in": "WAN", "action": "drop" }, { "action": "reject" }]
}
```
- We define the WAN zone and apply a policy

`ssh.json`
```json
{
  "description": "allow ssh",
  "filter": [
    {
      "in": "WAN",
      "out": "_fw",
      "service": "ssh",
      "action": "accept"
    }
  ]
}
```
- `_fw` is the built-in zone
- `"ssh"` can be replace with `[{ "proto": "udp", "port": 1234 }]`

`ping.json`
```json
{
  "description": "allow ping",
  "filter": [
    {
      "in": "WAN",
      "service": "ping",
      "action": "accept"
    }
  ]
}
```
### Services
- Built-in services in `/usr/share/awall/mandatory/services.json`
- Services are defined in `/etc/awall/private/custom-services.json`
```json
{ 
	"service": {
		"wireguard": [{ "proto": "udp", "port": 1234 }]
	}
}
```