Is a [[Linux]] distro that is lightweight

* Default account: `root`, with no password
## Setup
* run `setup-alpine`
* `sys` is standard hard-disk install mode
* `adduser NAME` to add user
* `apk add nano` to install `nano`
* Configure SSH
    1. Edit `/etc/ssh/sshd_config`
    1. At the bottom, add `AllowUsers XXX` with XXX your user name
    1. Reboot
* Refer also to the [post-install notes](https://wiki.alpinelinux.org/wiki/Installation#Post-Install)
* On VM, don't bother to install VM addons - just create an user, allow SSH user and connect to it
    * If you use NAT, configure port forwarding with Host being the actual PC and Guest the VM
### Sudo
1. Un-comment community package in `/etc/apk/repositories`
1. `apk update`
2. `apk add sudo`
3. `visudo` 
4. Uncomment the `%wheel ...` line to allow `wheel` users to use `sudo`
5. Exit `vi`  - see [[Vi]]
6. Add yourself to the `wheel` group: `addgroup $USER wheel`
### Docker
- See also [[Docker]]
1. Un-comment community package in `/etc/apk/repositories`
2. `apk update`
3. `apk add docker`
4. `addgroup $USER docker` 
5. `rc-update add docker boot` and `service docker start` to start docker daemon at boot

Other:
- [[Awall]] - Firewall
- [[OpenRC]] - Init system
### Resize filesystem
1. Install `apk add cfdisk e2fsprogs-extra`
2. Use `cfdisk`
3. Run `resize2fs /dev/sda*` - change `*` with the partition number
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
