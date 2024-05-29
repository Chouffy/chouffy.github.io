Is an [[Operating System]] for all sort of things.
In this database, I refer to [[Unix]] via [[Linux]]

Please note: I mainly use [[Ubuntu Server]] or [[Debian]], so your mileage may vary with other distros.
## Setup
* On a laptop: disable standby on lid close: in `/etc/systemd/logind.conf`, uncomment and change `HandleLidSwitch=ignore`
### Related
- [[Secure Shell Protocol|SSH]]
- [[UFW Firewall|ufw]]
### Install FTP server
1. `sudo apt install vsftpd`
1. `sudo nano /etc/vsftpd.conf` to edit configuration
1. `sudo ufw allow 21`
1. `sudo systemctl restart vsftpd`
### Related softwares
- [[Cron]]: Job scheduler
### [Cockpit](https://cockpit-project.org/) - Remote administration of server
1. `sudo apt-get install cockpit` and with:
    * `cockpit-machines` for KVM
    * `cockpit-docker` for Docker
1. `sudo ufw allow 9090`
1. `sudo systemctl restart cockpit.socket`
1. If you cannot update packages, `network manager` may be in use, check with `nmcli d`
    * `sudo systemctl disable network-manager.service`
    * `sudo systemctl stop network-manager.service`
#### Advanced configuration
* See [this guide](https://cockpit-project.org/guide/latest/listen) to change port. Create file and directory if needed.
* Configuration file is `/etc/cockpit/cockpit.conf`, not created by default - see [reference](https://cockpit-project.org/guide/latest/cockpit.conf.5)
* Setup with Cloudflare Tunnel - Based on [this blog post](https://ryan.lovelett.me/posts/letsencrypt-cockpit/).
    1. Setup a Let's Encrypt certificate below
    1. Setup a copy script - [See example in Nextcloud](https://chouffy.net/notes/server_softwares/Nextcloud.html#preview-generator-for-thumbnails)

		```sh
        #!/bin/sh
        FQDN="DOMAIN.COM"

        echo "SSL certificates renewed"
        cp /etc/letsencrypt/live/$FQDN/fullchain.pem /etc/cockpit/ws-certs.d/$FQDN.crt
        cp /etc/letsencrypt/live/$FQDN/privkey.pem /etc/cockpit/ws-certs.d/$FQDN.key
        chown cockpit-ws:cockpit-ws /etc/cockpit/ws-certs.d/$FQDN.crt /etc/cockpit/ws-certs.d/$FQDN.key

        echo "Restarting Cockpit"
        systemctl restart cockpit
        ```
        
    1. Setup `/etc/cockpit/cockpit.conf`
      
		```conf
        [WebService]
        Origins = https://URL:PORT
        #ProtocolHeader = X-Forwarded-Proto
        AllowUnencrypted = false

        [Session]
        IdleTimeout = 10
        ```
        
    1. Setup Cloudflare Tunnel and Access
### Install on VirtualBox
See [[VirtualBox]] page.
## Tips & Tricks
* Date & Time
    * `timedatectl` to check
    * `sudo timedatectl set-timezone TZ`
* See also
	* [[Screen]] terminal multiplexer
### Command-line kung-fu
* `less` to redirect output to a pager
* `watch` to _watch_ regularly an output
* `| grep x` to pipe to grep which is going to select lines with `x` ^a163bc
* `clear` to clear the command line
* Check [this Ars introduction](https://arstechnica.com/gadgets/2021/08/linux-bsd-command-line-101-using-awk-sed-and-grep-in-the-terminal/) about redirection, `grep`, `sed`, `awk`.
* `echo $?` to inspect program exit code
* `du -h` like disk usage to check size of directory
* `which abc` to check where the `abc` binary is stored
* See also:
	* [[Vi]] - text editor
#### Install a software on system
```sh
wget the latest release of the chosen software
sudo apt-get install # dependencies
sudo mkdir -p /opt/software_name
mv # move the app to /opt/software_name
sudo chmod +x /opt/software_name/executable # make the executable executable
sudo ln -s /opt/software_name/executable /usr/bin/executable # create a simlink
```
### CPU & Processes
* Check system stats
    * `htop` for processes
    * `nmon` for the whole system
* Health
    * Check CPU frequency `cat /proc/cpuinfo`
* System information `dmidecode`
* Do a stress test with full CPU utilization: `for i in $(seq $(getconf _NPROCESSORS_ONLN)); do yes > /dev/null & done`
### Services with systemctl
* Service management
    * `sudo systemctl restart SERVICE`
    * `sudo systemctl start SERVICE`
    * `sudo systemctl stop SERVICE`
    * `sudo systemctl kill SERVICE`
* Service enable/disable
    * `sudo systemctl enable SERVICE`
    * `sudo systemctl disable SERVICE`
    * `sudo systemctl is-enabled SERVICE`
* Services mask/unmask
    * `sudo systemctl unmask SERVICE`
    * `sudo systemctl mask SERVICE`
* Service status
    * `sudo systemctl list-timers`
    * `sudo systemctl status SERVICE`
### Disk & Data
* Current working directory: `pwd`
* Check free disk space `df -h`
* Tree file & folder with space taken `ncdu`
* Check for partition corruption `fsck /dev/sdaXX00`
* Stop a (USB) disk
    1. Unmount `sudo umount /dev/sdXX`
    1. Spin down `sudo hdparm -Y /dev/sdXX`
* Erase a disk `sudo dd if=/dev/urandom of=/dev/sdXX bs=10M` - [Source](https://www.addictivetips.com/ubuntu-linux-tips/ways-to-securely-erase-a-hard-drive-on-linux/)
* Check what is mounted where: `findmnt`
* List all block devices: `lsblk`
* TRIM a [[Solid-State Drive|SSD]]: `sudo /sbin/fstrim -av`
#### View SMART disk data
[Source](https://www.thomas-krenn.com/en/wiki/SMART_tests_with_smartctl)
1. Install `smartmontools`
1. View SMART data & status `sudo smartctl -i /dev/sdXX`
1. Find estimate & current SMART test `sudo smartctl -a /dev/sdXX`
1. Launch a test: `sudo smartctl -t short /dev/sdXX`
    * Possible options instead of `short`:
    * `long`
    * `conveyance` (after transport) for ATA disks
    * If the HDD go to sleep (especially true for USB ones), try the following:

        ```bash
        while true; do
            dd if=/dev/sdXX iflag=direct count=1 of=/dev/null
            sleep 60
        done
        ```

1. Read the result `sudo smartctl -l selftest /dev/sdXX`
#### Test read/write speed
[Source](https://www.shellhacks.com/disk-speed-test-read-write-hdd-ssd-perfomance-linux/)
1. `sync; dd if=/dev/zero of=tempfile bs=1M count=256; sync`: write to *tempfile* 256 Mb
1. `sudo /sbin/sysctl -w vm.drop_caches=3`: clear the cache
1. `dd if=tempfile of=/dev/null bs=1M count=256`: read *tempfile*
#### Format & mount a USB stick
![[fstab#USB Disks]]
### Files
* `zip -r directoryname.zip ./` to zip current directory
	* `unzip ./file.zip` to unzip
	* `unzip -l ./file.zip` to list files in the zip (and the validity of the zip)
* `tar -xvf file.tar.gz` to extract tarball and zip (`x` for extract, `v` for verbose, `f` for file)
* `bunzip2 filename.bz2` to extract a bz2 file
* `find / -name filename` to find *filename* in entire system (/) or active folder (.), and `sudo` to avoid permissions problems
* `cp -a` to copy everything (`-Archive`)
* `find /path/to/folder -name "thing to search"` to find something
#### Virtual Systems: Mount QCoW2
1. `sudo apt install libguestfs-tools` to install required tool
1. `sudo guestmount -a /var/lib/libvirt/images/IMAGE.qcow2 -m DEVICE --ro /mnt/FOLDER`
    * `DEVICE` being the partition within this image. Make it bogus so a list will be shown
    * `--ro` if you only want read-only
1. `sudo guestunmount /mnt`
### Network & Internet
* View current information (IP, netmask, ...) `ifconfig`
    * Assign an IP to a network `sudo ifconfig wlan0 192.168.65.1 netmask 255.255.255.0 up` for instance
* Edit network configuration
    * with netplan `/etc/netplan/00-installer-config.yaml`
* Check Wi-Fi adapter status:
    * `rfkill list wlan` to list status
    * `rfkill unblock wlan` to unblock
* Check used ports: `ss -tunlp`
#### Activate [[IPv6]]
- Edit `/etc/network/interfaces`
- Add `iface eth0 inet6 dhcp` - more options [here](https://wiki.debian.org/NetworkConfiguration)
- Apply changes `service networking restart`
#### Disable [[IPv6]]
- `ip a` to list network adapters
- `sudo sysctl -w net.ipv6.conf.ADAPTER.disable_ipv6=1` to disable (temporary) IPv6, with ADAPTER like `br6`
- Add the above to `/etc/sysctl.conf` and apply with `sudo sysctl -p`
#### Set up Let's Encrypt with Cloudflare DNS
* [Source](https://ryan.lovelett.me/posts/letsencrypt-cockpit/)
* See [this documentation on Cloudflare certbot](https://certbot-dns-cloudflare.readthedocs.io/en/stable/)
    * `cloudflare.ini` can be placed in `/etc/cloudflared`
    * Define proper permission with `chmod 400`
* Steps
    1. `sudo snap install --classic certbot certbot-dns-cloudflare` You may need to proceed with additional commands as explained in the console
    1. `sudo ln -s /snap/bin/certbot /usr/bin/certbot`
    1. `sudo certbot certonly --dns-cloudflare --dns-cloudflare-credentials /etc/letsencrypt/cloudflare.ini -d <EXAMPLE.COM>`
    1. Automated renewal should be set up by the snap, check `systemctl list-timers`
### Users & Groups
* Users
    * `useradd USERNAME` add a new user
	    * With a Home directory: `-m`
	    * Remove shell access: `--shell /bin/false`
	* `usermod -L USERNANE` to lock access
    * `passwd USERNAME` define a password
    * `id $user` to get user PUID & GUID
* Groups
    * `usermod -a -G GROUP $USER` to add self to GROUP
    * `cat /etc/group` to list all groups
* Setup SFTP for without Shell: [nice tutorial from Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-enable-sftp-without-shell-access-on-ubuntu-18-04)
* Act as a user: `sudo -u USERNAME command`
#### Scripts execution
- Can be stored in `/usr/sbin/user_scripts/`
- `visudo` can help defining a script that can be run as sudo
	- `<user> ALL=(ALL) NOPASSWD: /path/to/script.sh`
- Don't forget to
	- Set the script as executable with `sudo chmod +x /path/to/script.sh`
	- Prevent edition with `chmod u-w,g-w /path/to/script.sh` (here we remove user and group write)
### OS-related
* Know which OS, flavor, distro, distribution or version you are running `cat /etc/os-release`
* Install fonts, check package `fonts-liberation` - can help you to fix `Fontconfig error: Cannot load default config file`
* Change host name: `hostnamectl set-hostname NEWHOSTNAME` and update `/etc/hosts`
- Check all installed packages, sorted by size: `dpkg-query -W -f='${Installed-Size;8}  ${Package}\n' | sort -n`
### Hardware-related
* Sometime `reboot` is not accessible ... then use `systemctl reboot`
* Test [[Random Access Memory|RAM]] with `sysbench --test=memory --memory-block-size=1M --memory-total-size=1000G`
* Check PCIe speed: `lspci -vvvv`
#### Power & Battery
* Check system temperature
    1. `sudo apt install lm-sensors`
    1. `sudo apt-get install lm-sensors`
    1. `sudo /etc/init.d/kmod start`
    1. `sensors`
* Check status & stats about battery
    1. List paths `upower -e`
    1. Get status `upower -i <path>`
* Plan a reboot: `shutdown -r 0:00` to restart at midnight for instance
#### BIOS
* Check BIOS version `sudo dmidecode | less`
### Display, Media & Sound
- Instead of changing the DPI to 125% which makes things weird, enable Large Text in Accessability
## Security
- Source: [OVH](https://docs.ovh.com/us/en/vps/tips-for-securing-a-vps/), [DigitalOcean](https://www.digitalocean.com/community/tutorials/an-introduction-to-securing-your-linux-vps), [DigitalOcean](https://www.digitalocean.com/community/tutorials/recommended-security-measures-to-protect-your-servers)
* Change all account passwords
* Regarding SSH
    * Disable all unnecessary users logins, like `root` - [Example](https://www.digitalocean.com/community/tutorials/how-to-disable-root-login-on-ubuntu-20-04)
    * Change default port (between 49152 and 65535) - [Generator](https://duckduckgo.com/?q=random+number+between+49152+and+65535&t=ffab&ia=answer)
    * Use SSH Keys instead of passwords
* Regarding network
    * Configure firewall like `ufw`
    * Configure fail2ban
    * Configure an Intrusion Detection System - [Example](https://www.digitalocean.com/community/tutorials/how-to-install-suricata-on-ubuntu-20-04)
* Disable unneeded services - [Example](https://www.digitalocean.com/community/tutorials/how-to-migrate-linux-servers-part-1-system-preparation), `sudo ss -atpu`
* Implement unattended/automated upgrades and livepatch - [Example](https://www.digitalocean.com/community/tutorials/how-to-keep-ubuntu-20-04-servers-updated)
* Regularly
    * Update software
    * Check logs
    * Check for malware - Example: `maldet`
    * Make backups
## Recover
### Check logs
* System messages: `cat /var/log/messages | tail -n 50`
### Bootloader
Try [Super Grub2 Disk](https://www.supergrubdisk.org/)
## KVM - Virtual Machines
![[Kernel-based Virtual Machine|KVM]]
## Related
```dataview
TABLE file.path as "Location"
FROM [[]] 
SORT file.name ASC
SORT file.path ASC
```