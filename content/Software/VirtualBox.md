Is a [[Virtualization]] [[Software]] that can runs on [[MacOS]], [[Windows]], [[Linux]] clients and/or hosts.
## Setup
- Nested [[Virtualization]] cannot be enabled on [[Windows|Windows 11]] as [[Hyper-V]] is active by default
### On [[Windows]]
- Change Host-Only adapter name → [[Windows#Change names in Device Manager]]
### On [[Linux]]
* Install VirtualBox Guests Addons manually on Ubuntu
	1. `sudo apt install gcc make perl` 
	2. Install Guest addition
		- Either autorun CD-ROM
		- Or open Terminal and run `sudo ./VBoxLinuxAdditions.run`
	3. Disable animations `gsettings set org.gnome.desktop.interface enable-animations false`
- Allow user to access Shared Folder:
	* Fix permissions with shared folders on Linux
		* Message in Ubuntu: `This location could not be displayed.` and `You do not have the permissions necessary to view the contents of "sf_Manager".`
	* Solution: `sudo adduser $USER vboxsf` and reboot
## Data
* Compact a virtual hard drive `.vdi`
    1. Defragment the disk
    1. In the guest:
        * Linux: `dd if=/dev/zero of=/var/tmp/bigemptyfile bs=4096k ; rm /var/tmp/bigemptyfile`
        * Windows: `sdelete.exe c: -z` from Sysinternals
    1. Shutdown
    1. Run `VBoxManage.exe modifymedium --compact c:\path\to\thedisk.vdi`