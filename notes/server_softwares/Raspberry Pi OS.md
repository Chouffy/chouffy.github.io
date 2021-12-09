---
parent: Server Softwares
---

# Raspberry Pi OS

## Standard configuration

### Install

1. Download image [here](https://www.raspberrypi.org/downloads/raspberry-pi-os/)
1. Enable SSH by placing a `ssh` file in the boot partition
1. Login with user `pi` and password `raspberry`
1. Change user password with `passwd` and root password with `sudo passwd`
1. Config with `sudo raspi-config`
1. Change swap size if needed - [Source](https://pimylifeup.com/raspberry-pi-swap-file/)
    1. Stop swap `sudo dphys-swapfile swapoff`
    1. Edit `sudo nano /etc/dphys-swapfile` and change `CONF_SWAPSIZE=100`
    1. Setup new swap `sudo dphys-swapfile setup`
    1. Start swap `sudo dphys-swapfile swapon`
    1. Reboot

Check also common Linux setup in the Linux page!

### Manage IP address / DHCP

1. Edit `sudo nano /etc/dhcpcd.conf`
1. At the bottom, uncomment and change `interface eth0` and following
1. If you want to use Cloudflare DNS: `static domain_name_servers=1.1.1.1 1.0.0.1 2606:4700:4700::1111 2606:4700:4700::1001`

### Overclock

1. CPU: in `raspi-config`
1. SD card:
    * `sudo bash -c 'printf "dtoverlay=sdhost,overclock_50=100\n" >> /boot/config.txt'` - [Source](https://www.jeffgeerling.com/blog/2016/how-overclock-microsd-card-reader-on-raspberry-pi-3)
    * `sudo cat /sys/kernel/debug/mmc0/ios` to check the clock

### Date & Time

Raspberry OS manage time with `timedatectl`:

* Show existing date & time: `date`
* Show status `timedatectl status`
* Enable NTP `timedatectl set-ntp True` then restart the NTP service `sudo systemctl restart systemd-timesyncd.service`

## Software install

### Docker

1. Download `docker` install script `curl -sSL https://get.docker.com >> docker.sh`
1. Run the script `sh ./docker.sh`
1. Add `pi` user to `docker` group `sudo usermod -aG docker pi`
1. Log-out and log-in

### Duplicati

#### Install on Raspberry Pi OS

1. Install *Mono Framework* `sudo apt install mono-complete ca-certificates-mono`
1. Sync certificates `sudo cert-sync /etc/ssl/certs/ca-certificates.crt`
1. `wget` the download `.deb.` from the [Duplicati website](https://www.duplicati.com/download)
1. Install `sudo apt install ./duplicati*.deb` or `sudo dpkg -i duplicati*.deb`
1. Check for additional missing dependencies `sudo apt -f install`
1. Allow Duplicati in the firewall `sudo ufw allow 8200`
1. Set up Duplicati as a service
    1. Edit new file `sudo nano /etc/systemd/system/duplicati.service`
    1. Copy-paste the service file content:
        ```bash
        [Unit]
        Description=Duplicati
        After=network.target

        [Service]
        Nice=19
        IOSchedulingClass=idle
        EnvironmentFile=-/etc/default/duplicati
        ExecStart=/usr/bin/duplicati-server $DAEMON_OPTS
        Restart=always

        [Install]
        WantedBy=multi-user.target
        ```
    1. Edit file `sudo nano /etc/default/duplicati`
    1. Replace the last line of the initscript content: `DAEMON_OPTS="--webservice-interface=any --webservice-port=8200 --portable-mode"`
    1. Enable and start the Duplicati service
        ```
        sudo systemctl enable duplicati.service
        sudo systemctl daemon-reload
        sudo systemctl start duplicati.service	
        sudo systemctl status duplicati.service
        ```
1. If wished, set-up system-wide backup:
    * Source data: `/etc, /home, /root, /var` excluding `/var/lock/, /var/run` and *Temporary file*
    * Options: `zip-compression-level: 1` - default on Linux is 6, but this slow down the Raspberry Pi
    * If only upload, in order to help the Raspberry Pi
        * `asynchronous-concurrent-upload-limit:`1
        * `asynchronous-upload-limit:1`

Sources:

* [Backup Domoticz with Duplicati - Sancla](https://sancla.com/domoticz/how-to-backup-domoticz-with-duplicati/)
* [Help with installing on Raspberry Pi - Duplicati forum](https://forum.duplicati.com/t/help-with-installing-on-raspberry-pi/397/3?u=jonmikelv)
* [How To Backup Nextcloud](https://kevq.uk/how-to-backup-nextcloud/)

### Samba - Windows Share

1. Install it `sudo apt install samba samba-common-bin`
1. Create a share on root directory `sudo mkdir -m 1777 /share`
    * 1 is sticky bit
    * 777 is everyone permission to r/w/e
1. Edit samba configuration `sudo nano /etc/samba/smb.conf`
    * Add at the bottom of the file
        ```
        [share]
        Comment = share
        Path = /share
        Browseable = yes
        Writeable = Yes
        guest only = no
        create mask = 0777
        directory mask = 0777
        valid users = joe, greg
        ```
    * This set up a r/w share only for *joe* and *greg* users
    * Check all options [here](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html)
1. Add a user
    1. Create a new UNIX user `sudo adduser joe`
    1. Add user to samba `sudo smbpasswd -a joe`
1. Add samba to *ufw* exception, if you have it `sudo ufw allow Samba`
1. Restart samba `sudo samba restart`

### Create an Access Point

From [this guide](https://www.raspberrypi.com/documentation/computers/configuration.html#setting-up-a-routed-wireless-access-point):

1. Install dependencies:

    ```sh
    sudo apt install hostapd
    sudo systemctl unmask hostapd
    sudo systemctl enable hostapd
    sudo apt install dnsmasq
    sudo DEBIAN_FRONTEND=noninteractive apt install -y netfilter-persistent iptables-persistent
    ```

1. Edit `sudo nano /etc/dhcpcd.conf`:

    ```conf
    interface wlan0
        static ip_address=192.168.4.1/24
        static routers=192.168.4.1
        static domain_name_servers=1.1.1.2 1.0.0.2
        nohook wpa_supplicant
    ```

1. Edit `sudo nano /etc/sysctl.d/routed-ap.conf` and/or in `/etc/sysctl.conf`:

    ```conf
    # Enable IPv4 routing
    net.ipv4.ip_forward=1
    ```

1. Update _iptables_

    ```sh
    sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
    sudo netfilter-persistent save
    ```

1. Configure _dnsmasq_

    1. Copy the original file `sudo mv /etc/dnsmasq.conf /etc/dnsmasq.conf.orig`
    1. Edit `sudo nano /etc/dnsmasq.conf`

        ```conf
        interface=wlan0 # Listening interface
        dhcp-range=192.168.4.2,192.168.4.20,255.255.255.0,24h
                        # Pool of IP addresses served via DHCP
        domain=wlan     # Local wireless DNS domain
        address=/gw.wlan/192.168.4.1
                        # Alias for this router
        ```conf

1. `sudo rfkill unblock wlan`

1. Change below to your liking and update `sudo nano /etc/hostapd/hostapd.conf`

    ```conf
    country_code=GB
    interface=wlan0
    ssid=NameOfNetwork
    hw_mode=g #g = 2.4 GHz, a = 5 GHz
    channel=7
    macaddr_acl=0
    auth_algs=1
    ignore_broadcast_ssid=0
    wpa=2
    wpa_passphrase=AardvarkBadgerHedgehog
    wpa_key_mgmt=WPA-PSK
    wpa_pairwise=TKIP
    rsn_pairwise=CCMP
    ```

1. `sudo reboot` and enjoy!

For some troubleshooting help:

* Check `sudo systemctl status hostapd.service`, `wpa_supplicant.service` and `dnsmasq.service` if you have troubles
* If error with `hostapd`: unmask the service, or `rfkill unblock wlan` and then `rfkill list wlan` to check
* If error with `dnsmasq.service:`:
    * Check configuration `sudo nano /etc/dnsmasq.conf`, last line should look like `dhcp-option=6,1.1.1.2,1.0.0.2` and not have a `,` at the end
    * If `DHCP packet received on wlan0 which has no address`, check `ifconfig` and try to manually set the IP `sudo ifconfig wlan0 192.168.4.1`
