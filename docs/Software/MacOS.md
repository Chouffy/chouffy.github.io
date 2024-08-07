Is an [[Operating System]] made by [[Apple]], based [[OpenBSD]].
## Setup
* Install MacOS
	* From USB drive: [Apple Guide](https://support.apple.com/en-us/HT201372)
	* In VirtualBox: [Script on GitHub](https://github.com/myspaghetti/macos-virtualbox/)
	* On [[Docker]]: [Docker-OSX](https://github.com/sickcodes/Docker-OSX)
  * To change screen resolution: `VBoxManage setextradata "vm_name" "VBoxInternal2/EfiGraphicsResolution" "resolution"`
  * Supported resolutions: `5120x2880  2880x1800  2560x1600  2560x1440  1920x1200  1600x1200  1680x1050  1440x900   1280x800   1024x768   640x480`
  * For audio, *OpenCore bootloader could solve issue*
## Tips
* *Activity Monitor*: Task manager
* *Console*: Event viewer
* Files
    * `Command + Shift + .` to show hidden files
* Apps
    * *Force quit*: in the Apple menu
* Network
  * `sudo lsof -i -n -P` list all open connections
## Useful apps
### System health scan
* [EtreCheck](https://apps.apple.com/us/app/etrecheck/id1423715984?mt=12) to check for problems like adware
