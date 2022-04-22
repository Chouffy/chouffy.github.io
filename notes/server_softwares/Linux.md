---
parent: Server Softwares
---

# Linux
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

Please note: I mainly use Ubuntu Server, so your mileage may vary with other distros.

## Setup

* On a laptop: disable standby on lid close: in `/etc/systemd/logind.conf`, uncomment and change `HandleLidSwitch=ignore`

### Install Firewall

* Install `sudo apt install ufw`
* Configuration
    * Check status & list configuration `sudo ufw status`
    * Set default incoming to deny `ufw default deny incoming` and `ufw default allow outgoing` for instance
    * Allow a port `sudo ufw allow PORT`
    * Remove an allowance `sudo ufw delete PORT`
    * Rate limit a port (>6 connections within 30 sec) `sudo ufw limit PORT`
    * `PORT` can be replaced with a known app like `SSH` or specific protocol like `PORT/tcp`
    * Enable `sudo ufw enable`
    * On alpine `rc-update add ufw default`
* Verify
    * Check added rules `sudo ufw show added`
    * Check existing rules with numbers `sudo ufw status numbered`
* Enable `sudo ufw enable`

### Install FTP server

1. `sudo apt install vsftpd`
1. `sudo nano /etc/vsftpd.conf` to edit configuration
1. `sudo ufw allow 21`
1. `sudo systemctl restart vsftpd`

### Cron - Job scheduler

* Edit cron of a user `sudo crontab -u USER -e`
* Check if the cron expression is correct: [crontab guru](https://crontab.guru/)

### [Cockpit](https://cockpit-project.org/) - Remote administration of server

1. `sudo apt-get install cockpit` and with:
    * `cockpit-machines` for KVM
    * `cockpit-docker` for Docker
1. `sudo ufw allow 9090`
1. `sudo systemctl restart cockpit.socket`
1. If you cannot update packages, `network manager` may be in use, check with `nmcli d`
    * `sudo systemctl disable network-manager.service`
    * `sudo systemctl stop network-manager.service`

### Install on VirtualBox

1. Install `gcc make perl` packages
1. Install Guest addition
1. Disable animations `gsettings set org.gnome.desktop.interface enable-animations false`
1. Allow user to access Shared Folder `sudo adduser $USER vboxsf`

## Tips & Tricks

* Date & Time
    * `timedatectl` to check
    * `sudo timedatectl set-timezone TZ`

### Command-line kung-fu

* `less` to redirect output to a pager
* `watch` to _watch_ regularly an output
* `| grep x` to pipe to grep which is going to select lines with `x`
* `clear` to clear the command line
* Check [this Ars introduction](https://arstechnica.com/gadgets/2021/08/linux-bsd-command-line-101-using-awk-sed-and-grep-in-the-terminal/) about redirection, `grep`, `sed`, `awk`.

#### *Screen* Terminal Multiplexer

[Complete guide here](https://www.howtogeek.com/662422/how-to-use-linuxs-screen-command/)

* Start `screen`
* List sessions ID `screen -ls`
* In a session - Hotkey `CTRL+A` then:
    * `d`: Detach
    * `[`: Copy mode
        * Page-Up to scroll up, Page-Down to scroll down
    * `:sessionname  <Your_session_name>`: Rename
* Reattach `screen -r session_ID`

### CPU & Processes

* Check system stats
    * `htop` for processes
    * `nmon` for the whole system
* Health
    * Check CPU frequency `cat /proc/cpuinfo`
* System information `dmidecode`

### Services with systemctl

* `sudo systemctl status SERVICE`
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
    * `sudo systemctl status SERVICE`

### Disk & Data

* Check free disk space `df -h`
* Tree file & folder with space taken `ncdu`
* Check for partition corruption `fsck /dev/sdaXX00`
* Stop a disk
    1. Unmount `sudo umount /dev/sdXX`
    1. Spin down `sudo hdparm -Y /dev/sdXX`
* Erase a disk `sudo dd if=/dev/urandom of=/dev/sdXX bs=10M` - [Source](https://www.addictivetips.com/ubuntu-linux-tips/ways-to-securely-erase-a-hard-drive-on-linux/)

#### View SMART disk data

[Source](https://www.thomas-krenn.com/en/wiki/SMART_tests_with_smartctl)

1. Install `smartmontools`
1. View SMART data & status `sudo smartctl -i /dev/sdXX`
1. Find estimate & current SMART test `sudo smartctl -c /dev/sdXX`
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

1. Several options to see devices
    * `sudo blkid` to locate block devices
    * `sudo lsblk` to list mounted block devices
    * `ls /dev` to check where the USB stick is mounted
1. `sudo fdisk /dev/sdXX`
    1. `p` to list existing partition
    1. `g` to create a new GPT partition table or `o` for a DOS partition table
    1. `n` to create a new partition
    1. `w` write to disk and exit
1. `sudo mkfs.ext4 /dev/sdXX00` to create an ext4 partition
1. `sudo mkdir /media/usbdrive` to create a directory that will host the partition
    * Choose `/mnt` for temporary mounts
    * Choose `/media` for automatics mounts
1. `sudo mount /dev/sdXX00 /media/usbdrive -o umask=000` to mount the USB key with all user access
1. `sudo umount /dev/sdXX00` to unmount
1. If you want to make it permanent
    * Edit `sudo nano /etc/fstab`
    * Add a line `/dev/sdXX00       /media/usbdrive           ext4    defaults        0       0 `
    * [(Check how fstab works here)](https://www.howtogeek.com/howto/38125/htg-explains-what-is-the-linux-fstab-and-how-does-it-work/)

### Files

* `tar -xvzf file.tar.gz` to extract tarball and zip
* `find / -name filename` to find *filename* in entire system (/) or active folder (.), and `sudo` to avoid permissions problems

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
* Disable IPv6 - [Source](https://itsfoss.com/disable-ipv6-ubuntu-linux/)

    ```bash
    sudo sysctl -w net.ipv6.conf.all.disable_ipv6=1
    sudo sysctl -w net.ipv6.conf.default.disable_ipv6=1
    sudo sysctl -w net.ipv6.conf.lo.disable_ipv6=1
    ```

* Check Wi-Fi adapter status:
    * `rfkill list wlan` to list status
    * `rfkill unblock wlan` to unblock

### Users & Groups

* `useradd -m USERNAME` add a new user with a Home directory (`-m`)
* `passwd USERNAME` define a password
* `id $user` to get user PUID & GUID
* Setup SFTP for without Shell: [nice tutorial from Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-enable-sftp-without-shell-access-on-ubuntu-18-04)

### OS-related

* Know which OS, flavor or version you are running `cat /etc/os-release`
* Install fonts, check package `fonts-liberation`

### Hardware-related

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

## Recover

### Check logs

* System messages: `cat /var/log/messages | tail -n 50`

### Bootloader

Try [Super Grub2 Disk](https://www.supergrubdisk.org/)

## KVM - Virtual Machines

### Setup KVM

Based on [this great tutorial by OSTechnix](https://ostechnix.com/install-and-configure-kvm-in-ubuntu-20-04-headless-server/).

1. Install QEMU and some other libs
    1. `sudo apt install qemu qemu-kvm libvirt-clients libvirt-daemon-system virtinst bridge-utils`
    1. `systemctl status libvirtd` - must be enabled and started

1. Configure network bridge
    1. `ip a` list existing network, including `virbr` which is the preinstalled bridge
    1. Disable netfilter on bridge
        1. Create `/etc/sysctl.d/bridge.conf` and add the following

            ```bash
            net.bridge.bridge-nf-call-ip6tables=0
            net.bridge.bridge-nf-call-iptables=0
            net.bridge.bridge-nf-call-arptables=0
            ```

        1. Create `/etc/udev/rules.d/99-bridge.rules` and add `ACTION=="add", SUBSYSTEM=="module", KERNEL=="br_netfilter", RUN+="/sbin/sysctl -p /etc/sysctl.d/bridge.conf"`
    1. Remove default KVM bridge
        1. `virsh net-destroy default`
        1. `virsh net-undefine default`
        1. `ip link` check that `virbr` interfaces are gone
    1. Edit `/etc/netplan/00-installer-config.yaml`
        1. Backup first
        1. Add a new section under defined interface - Careful about the indentation

            ```bash
            network:
              ethernets:
                enp0sXYZ:
                  #config
              bridges:
                br0:
                  interfaces: [ enp0s3 ]
                  addresses: [192.168.225.52/24]
                  gateway4: 192.168.225.1
                  mtu: 1500
                  nameservers:
                    addresses: [8.8.8.8,8.8.4.4]
                  parameters:
                    stp: true
                    forward-delay: 4
                  dhcp4: no
                  dhcp6: no
              version: 2
            ```

        1. `sudo netplan --debug  apply` apply
        1. `ip a` to check, also `brctl show br0`
    1. Configure KVM to use this bridge
        1. Edit `host-bridge.xml` somewhere and add:

            ```xml
            <network>
              <name>host-bridge</name>
              <forward mode="bridge"/>
              <bridge name="br0"/>
            </network>
            ```

        1. `virsh net-define host-bridge.xml`
        1. `virsh net-start host-bridge`
        1. `virsh net-autostart host-bridge`
        1. `virsh net-list --all` to check

### Manage VM

* `virt-install` to create a Virtual Machine
* `sudo virsh --all` ...
    * `list` to list VM
    * Status
        * `start ID/Name`
        * `reboot ID/Name`
        * `suspend ID/Name`
        * `shutdown ID/Name`
    * To edit a VM
        * `edit ID/Name`
    * To delete a VM
        1. `undefine ID/Name`
        1. `sudo virsh destroy ID/Name`
