---
parent: Server Softwares
---

# Alpine Linux

* Default account: `root`, with no password

## Setup

* run `setup-alpine`
* `sys` is standard hard-disk install mode
* `apk add nano` to install `nano`
* Configure SSH
    1. Edit `/etc/ssh/sshd_config`
    1. At the bottom, add `AllowUsers XXX` with XXX your user name
    1. Reboot
* Refer also to the [post-install notes](https://wiki.alpinelinux.org/wiki/Installation#Post-Install)
* On VM, don't bother to install VM addons - just create an user, allow SSH user and connect to it
    * If you use NAT, configure port forwarding with Host being the actual PC and Guest the VM

### Docker

1. Un-comment community package in `/etc/apk/repositories`
1. `apk update`
1. `apk add docker`
1. `addgroup USERNAME docker` 
1. `rc-update add docker boot` and `service docker start` to start docker daemon at boot

### Awall Firewall

Awall is a JSON-powered (_policy file_) firewall

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
    * Some examples below - from [this tutorial](https://www.cyberciti.biz/faq/how-to-set-up-a-firewall-with-awall-on-alpine-linux/).
        * `/etc/awall/optional/cloud-server.json`

            ```json
            {
            "description": "Default awall policy to protect Cloud server",

            "variable": { "internet_if": "eth0" },

            "zone": {
                "internet": { "iface": "$internet_if" }
            },

            "policy": [{ "in": "internet", "action": "drop" }, { "action": "reject" }]
            }
            ```

        * `/etc/awall/optional/ssh.json`

            ```json
            {
            "description": "Allow incoming SSH access (TCP/22)",

            "filter": [
                {
                "in": "internet",
                "out": "_fw",
                "service": "ssh",
                "action": "accept",
                "src": [ "192.168.2.0/24"],
                "conn-limit": { "count": 3, "interval": 60 }
                }
              ]
            }
            ```

        * `/etc/awall/optional/outgoing.json`

            ```json
            {
            "description": "Allow outgoing connections for dns, http/https, ssh, ntp, ssh and ping",

            "filter": [
                {
                "in": "_fw",
                "out": "internet",
                "service": ["dns", "http", "https", "ssh", "ntp", "ping"],
                "action": "accept"
                }
            ]
            }
            ```

        * `/etc/awall/private/custom-services.json`

        ```json
        {
        "service": {
            "wireguard": [{ "proto": "udp", "port": 1234 }]
        }
        }
        ```

1. Awall management

    * `awall list`
    * `awall enable X` to enable a policy
    * `awall activate`

1. iptable management

    * `/etc/iptables/` view rules
    * `iptables -S` to view
    * `rc-service iptables {start|stop|restart|status}`
    * `rc-service ip6tables {start|stop|restart|status}`

### Other nice tutorials

* [Setup Wireguard](https://www.cyberciti.biz/faq/how-to-set-up-wireguard-vpn-server-on-alpine-linux/)

## Management

### Packets & Software

`apk` is to tool used to manage packets, [documentation](https://wiki.alpinelinux.org/wiki/Alpine_Linux_package_management):

* `apk update` to update the index
* `apk upgrade` to upgrade installed package
* `apk add X` to add package X to system
* `apk del X` to remove package X to system
* `apk version X` to check version of X
