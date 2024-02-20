Is an [[Operating System]] which is a [[Linux]] variant, based on [[Debian]].
## Setup
### Fixed IP / No DHCP
1. `sudo nano /etc/netplan/*.yaml`
1. Below adapter, change `dhcp4: no` and add
    ```
    addresses:
        - 192.168.1.100/24
    gateway4: 192.168.1.1
    nameservers:
        addresses: [1.1.1.1, 1.0.0.1]
    ````
1. `sudo netplan apply`
1. Check with `ip addr show`
### Livepatch service
1. `sudo snap install canonical-livepatch`
1. [Generate a token](https://auth.livepatch.canonical.com/)
1. `sudo canonical-livepatch enable UNIQUE_TOKEN`
1. `canonical-livepatch status --verbose` to check status
### [[Snap]]