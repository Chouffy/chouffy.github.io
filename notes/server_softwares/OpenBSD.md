---
parent: Server Softwares
nav_order: 99
---

# OpenBSD - Not updated

FreeNAS runs on OpenBSD.

## Jails

Jails are containers, akin to Docker.

### Shell

* `jls` to list all jails
* `iocage console jailname` 

### Update a jail

* `iocage update jailname` to update a jail
* `iocage upgrade -r 12.1-RELEASE jailname` to update to a specific release
* `pkg update && pkg upgrade`

## Utils

* Text editor: `ee filename` - [Source](https://www.freebsd.org/doc/handbook/editors.html)
