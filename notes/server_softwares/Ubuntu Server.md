---
parent: Server Softwares
last_modified_date: 2020-12-04
---

# Ubuntu Server

## Setup

### Livepatch service

1. `sudo snap install canonical-livepatch`
1. [Generate a token](https://auth.livepatch.canonical.com/)
1. `sudo canonical-livepatch enable UNIQUE_TOKEN`
1. `canonical-livepatch status --verbose` to check status

## Snaps

* Bundle application & all dependencies
* App are executed encapsulated
* Automatically updated
* Commands
    * `snap list`
    * `snap install APP`
    * `snap remove APP`
    * `snap logs APP`
    * On services
        * `snap services`
        * `snap logs APP.SERVICE`
        * `snap stop --disable APP.SERVICE` or `systemctl status snap.APP.SERVICE`
    * On configuration
        * `snap get APP` and `snap get APP key1` to go to level key1
        * `snap set APP key1.subkey1=value`
* Volumes created
    * `/snap/`: mount point for running snap
        * `core/`: virtualFS for snap apps
    * `/var/snap/`: user data & logs
    * `/var/lib/snapd/`
        * `snaps/`: contain \*.snaps
    * `/home/username/snap/`
* Source
    * [Managing Ubuntu Snaps - FreeCodeCamps](https://www.freecodecamp.org/news/managing-ubuntu-snaps/)
