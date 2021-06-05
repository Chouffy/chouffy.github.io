---
parent: Server Softwares
---

# Alpine Linux

## Setup

* run `alpine-install`
* `sys` is standard hard-disk install mode
* `apk add nano` to install `nano`
* Configure SSH
    1. Edit `/etc/ssh/sshd_config`
    1. At the bottom, add `AllowUsers XXX` with XXX your user name
    1. Reboot
* Refer also to the [post-install notes](https://wiki.alpinelinux.org/wiki/Installation#Post-Install)

### Docker

1. Un-comment community package in `/etc/apk/repositories`
1. `apk update`
1. `apk add docker`
1. `addgroup USERNAME docker` 
1. `rc-update add docker boot` and `service docker start` to start docker daemon at boot

## Management

### Packets & Software

`apk` is to tool used to manage packets, [documentation](https://wiki.alpinelinux.org/wiki/Alpine_Linux_package_management):

* `apk update` to update the index
* `apk upgrade` to upgrade installed package
* `apk add X` to add package X to system
* `apk del X` to remove package X to system
