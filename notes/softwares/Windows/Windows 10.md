---
grand_parent: Softwares
parent: Windows
---

# Windows 10

## Tips & Tricks

### Explorer

* Extract MSI archive: `msiexec /a PathToMSIFile /qb TARGETDIR=DirectoryToExtractTo`
* Remove "Folders" from This PC, remove **sub-folders** of:
    * `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\`
    * `HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace`
    * [Source](https://www.howtogeek.com/222057/how-to-remove-the-folders-from-%E2%80%9Cthis-pc%E2%80%9D-on-windows-10/)

### CPU & Processes

* Start a software on login with admin: create a scheduled task

### Power & Battery

* Modern Standby: [Check S states](https://www.laptopmag.com/articles/how-to-use-modern-standby)

### Media

* Webcam: Disable Frame server mode: [(source)](https://www.winhelponline.com/blog/webcam-anniversary-update-windows-10-yuys-standard/)
    * `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows Media Foundation\Platform` create DWORD `EnableFrameServerMode` with 0
    * `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows Media Foundation\Platform` create DWORD `EnableFrameServerMode` with 0

### Network & Connections

* Change machine hostname with no caps lock: `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\ComputerName\ComputerName`
* Change network name: `secpol.msc` > Network List Manager Policies > Connection Name
* A great firewall is [TinyWall](https://tinywall.pados.hu/)
* View active network connections: TCPView by Sysinternals to know the executable, PID and service

#### Wi-Fi Hotspot

* Beware that old `netsh wlan start hosted network` doesn't work anymore with newer Windows 10 version! The *Mobile Hotspot* feature is different under the hood - [Source](https://stackoverflow.com/questions/41829382/wlanhostednetworkstartusing-or-how-windows-10-builtin-mobile-hotspot-works)
* [TwiDam77's WiFi HotSpot (Soft AP)](https://www.microsoft.com/en-us/p/wifi-hotspot-soft-ap/9n0bhfm56zlm?activetab=pivot:overviewtab) is great to start/stop hotspot even without Internet
    * Afterward, need to start sharing the Internet connection in *Network Connections* → Properties
* If you have a firewall, you need to clear out `svchost.exe` for ports 53, 68 out and 53, 67 in.

#### Bluetooth

* Connect to an A2DP client:
    1. Pair device to PC
    1. Install *Bluetooth Audio Receiver* from the Windows Store

### Control Panel / Settings

* Open performances options panel (System > Advanced system settings, inaccessible if admin) `C:\Windows\System32\SystemPropertiesPerformance.exe`.
* Reinstall Setting app - Setting app doesn't open: PowerShell `Get-AppXPackage | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\AppXManifest.xml"}` - [Source](https://www.maketecheasier.com/fix-settings-app-not-working-in-windows-10/)

## Command-line Kung Fu

### Services

* Manage a service: `net <start/stop> servicename`
* Scheduled task: run a task on-demand - `schtasks /Run /TN "task name"`

### Start a software

* Start a UWP app: `start shell:AppsFolder\Microsoft.Windows.Photos_8wekyb3d8bbwe!App` and replace name with UWP name in `.\AppData\Local\Packages\` - [Source](https://stackoverflow.com/questions/13257571/call-command-vs-start-with-wait-option)
* Do not close automatically: `Cmd /k`
