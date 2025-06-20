---
aliases: Windows 10, Windows 11
---
Is an [[Operating System]] from Microsoft.
## Tips & Tricks
- [Dockur/Windows](https://github.com/dockur/windows) puts [[Windows]] in a [[Docker]] with a bit of help of [[Kernel-based Virtual Machine|KVM]]
### Windows 11
- [ExplorerPatcher](https://github.com/valinet/ExplorerPatcher) to have more taskbar flexibility for the taskbar
- [CTT WinUtil](https://github.com/ChrisTitusTech/winutil) to remove other unnecessary features
#### Bypass [[TPM]] check
##### During setup
[Source](https://www.tomshardware.com/how-to/bypass-windows-11-tpm-requirement)
1. `Shift + F10`
2. `regedit`
3. `HKEY_LOCAL_MACHINE\SYSTEM\Setup. `
4. Create key `LabConfig`
5. Create DWORD 32 `BypassTPMCheck` and `BypassSecureBoot` and set both to 1
#### Bypass OOBE network requirement
Run `OOBE\BYPASSNRO` in command line (`Shift + F10`)
### Explorer
* Extract MSI archive: `msiexec /a PathToMSIFile /qb TARGETDIR=DirectoryToExtractTo`
* Remove "Folders" from This PC, remove **sub-folders** of:
    * `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\`
    * `HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace`
    * [Source](https://www.howtogeek.com/222057/how-to-remove-the-folders-from-%E2%80%9Cthis-pc%E2%80%9D-on-windows-10/)
* Configure folder views/column: [[WinSetView]]
#### Useful Firewall rules to block annoying things
- Hide Tenor GIF from Emoji Picker: Block `C:\Windows\SystemApps\MicrosoftWindows.Client.CBS_cw5n1h2txyewy\TextInputHost.exe`
- Prevent Windows Search to go on the web: `C:\Windows\SystemApps\MicrosoftWindows.Client.CBS_cw5n1h2txyewy\SearchHost.exe`
### CPU & Processes
* Start a software on login with admin: create a scheduled task
* Find which software blocks a file: open Sysinternals Process Explorer → Find → Find Handle or DLL
### Power & Battery
* Modern Standby: [Check S states](https://www.laptopmag.com/articles/how-to-use-modern-standby)
### Data & Files
- [EasyBCD](https://neosmart.net/EasyBCD/) to manage Windows bootloader
- Symbolic link / junction - [official documentation](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/mklink)
	- Create a symbolic link between 2 directories: `mklink /d \linkdir \referedDirectory` ^83db26
	- `\linkdir` is the directory/file where the link will be created
	- `\referedDirectory` is the referred directory/file (already existing)
		- Doesn't work in UNC
#### Clean `WinSxS` folder
* Use the *Disk Clean-Up* feature
- `Dism.exe /online /Cleanup-Image /StartComponentCleanup /ResetBase` according to [this](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/clean-up-the-winsxs-folder?view=windows-11#use-the-resetbase-switch-with-the-startcomponentcleanup-parameter)
### Media
- Reset video driver: `Win + Ctrl + Shift + B`
- Set an application as High DPI aware programmatically [with a reg edit](https://superuser.com/questions/1230346/overriding-high-dpi-scaling-from-the-command-line/1230356#1230356)
#### USB Issues
- Start checking whatever softwares that patch [[Universal Serial Bus|USB]] like [[Parsec]]'s virtual gamepad
#### Webcam
* Edit webcam properties: use OBS Studio → Add a source → Video Capture Device → Properties
* Disable Frame server mode: [(source)](https://www.winhelponline.com/blog/webcam-anniversary-update-windows-10-yuys-standard/)
    * `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows Media Foundation\Platform` create DWORD `EnableFrameServerMode` with 0
    * `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows Media Foundation\Platform` create DWORD `EnableFrameServerMode` with 0
#### Audio
- MME is an old technology, WASAPI is recent
- Virtual Inputs & Output: use [VB-Cable](https://vb-audio.com/Cable/)
- Peace Equalizer APO can provide EQ services
### Network & Connections
* Change machine hostname with no caps lock: `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\ComputerName\ComputerName`
* Change network name: `secpol.msc` > Network List Manager Policies > Connection Name
* A great firewall is [TinyWall](https://tinywall.pados.hu/)
* View active network connections: TCPView by Sysinternals to know the executable, PID and service
* Connect to a SMB share without being tied to your domain: `localhost\username`
* Avoid automatic setup of network devices: *Settings → Advanced network settings → Advanced sharing settings → Private network* → Untick "Set up network connected devices automatically"
#### File Sharing
- Test access with `\\localhost` before trying on the remote host
#### Wi-Fi Hotspot
* Beware that old `netsh wlan start hosted network` doesn't work anymore with newer Windows 10 version! The *Mobile Hotspot* feature is different under the hood - [Source](https://stackoverflow.com/questions/41829382/wlanhostednetworkstartusing-or-how-windows-10-builtin-mobile-hotspot-works)
* [TwiDam77's WiFi HotSpot (Soft AP)](https://www.microsoft.com/en-us/p/wifi-hotspot-soft-ap/9n0bhfm56zlm?activetab=pivot:overviewtab) is great to start/stop hotspot even without Internet
    * Afterward, need to start sharing the Internet connection in *Network Connections* → Properties
* If you have a firewall, you need to clear out `svchost.exe` for ports 53, 68 out and 53, 67 in.
##### Use a separate Wi-Fi adapter as AP
We want here to achieve the following
```
[Internet] <--- Guest WLAN via integrated Wi-Fi ---> Computer 
                                                        ^
            [Device]  <--- Private WLAN via USB Wi-Fi --┘
```

Process:
1. Turn off integrated Wi-Fi
2. Disconnect the USB Wi-Fi from existing network
3. Use `netsh` to set and start the `hostednetwork` on the USB adapter
4. Turn on integrated Wi-Fi and disconnect the USB Wi-Fi from any network
5. Turn on the "Share internet" feature from the integrated Wi-Fi to the USB Hosted Network
#### Bluetooth
* Connect to an A2DP client:
    1. Pair device to PC
    2. Install *Bluetooth Audio Receiver* from the Windows Store
- Alternative driver that support other codec: [Link](https://www.bluetoothgoodies.com/a2dp/)
### Control Panel / Settings
* Open performances options panel (System > Advanced system settings, inaccessible if admin) `C:\Windows\System32\SystemPropertiesPerformance.exe`.
* Reinstall Setting app - Setting app doesn't open: PowerShell `Get-AppXPackage | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\AppXManifest.xml"}` - [Source](https://www.maketecheasier.com/fix-settings-app-not-working-in-windows-10/)
* Disable Aero Shake / Shake to Minimize: ` HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced` DWORD
#### Change names in Device Manager
According to [this tutorial](https://www.eightforums.com/threads/tutorial-how-to-change-device-names-in-device-manager.15321/):
- From the Device Manager, go to the Properties of the device and copy the Driver Key in Details
- Open `regedit` and browse to `Computer\HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Enum`
- Change the key Permissions
	- Click "Add ...", add yourself and press OK
	- Click "Advanced", change the Owner to yourself, tick the "Replace owner ..." and press OK
	- Back on the User page, select yourself and give you Full control
- Search for the Driver Key
- Add or Edit the `FriendlyName` String key to the desired value
- In Device Manager, go to Action → "Scan for hardware changes"
#### Manage permission in an AzureAD-enrolled environment
AzureAD-enrolled systems have weird User account (`azuread\firstmiddlelastname`) that doesn't exist in "standard" Windows things, like Sharing Permissions.
(Note: Microsoft account lives in `MicrosoftAccount\<live_id_username>`)
A workaround is to create a group, then assign the user to it:
- `net localgroup AADLocalAdminGroup /add`
- `net localgroup AADLocalAdminGroup azuread\firstmiddlelastname /add`
### Users & Groups
* Auto-login into the PC: use [Autologon](https://learn.microsoft.com/en-us/sysinternals/downloads/autologon)
* Elevate an user to Administrator privilege on Azure AD: `net localgroup administrators /add "AzureAD\UserUpn"` ([source](https://learn.microsoft.com/en-us/azure/active-directory/devices/assign-local-admin))
### Services
* Manage a service: `net <start/stop> servicename`
* Scheduled task: run a task on-demand - `schtasks /Run /TN "task name"`
* If a service is run as `SYSTEM`, the `%USERPROFILE%\` will be located at `%WINDIR%\System32\config\systemprofile\`
## Remote Desktop Connection
- Reduce latency
	- Edit the required parameters in Group Policy → Computer → Administrative → Windows Components → Remote Desktop Services → Remote Desktop Session Host → Remote Session Environment
	- Edit the registry with [those recommended settings](https://github.com/Upinel/BetterRDP/) (also here [[UpinelBetterRDP - Edit.reg]])
## Start a software
* Start a UWP app: `start shell:AppsFolder\Microsoft.Windows.Photos_8wekyb3d8bbwe!App` and replace name with UWP name in `.\AppData\Local\Packages\` - [Source](https://stackoverflow.com/questions/13257571/call-command-vs-start-with-wait-option)
* Do not close automatically: `Cmd /k`
### Configure a portable environment
- Use [yaP](http://yap.rolandtoth.hu/) (untested) and package with [UPX](https://github.com/upx/upx)
- Create a [[Batch]] launcher, from [this forum link](https://forum.obsidian.md/t/run-in-portable-mode/915/23):
```batch
@echo off

:: Creating Folders
if not exist "%~dp0User\ProgramData" mkdir "%~dp0User\ProgramData"
if not exist "%~dp0User\Public" mkdir "%~dp0User\Public"
if not exist "%~dp0User\AppData\Roaming" mkdir "%~dp0User\AppData\Roaming"
if not exist "%~dp0User\Documents" mkdir "%~dp0User\Documents"
if not exist "%~dp0User\AppData\Local\Temp" mkdir "%~dp0User\AppData\Local\Temp"

:: Setting Env Variables
set ALLUSERSPROFILE=%~dp0User\ProgramData\Roaming
set APPDATA=%~dp0User\AppData
set LOCALAPPDATA=%~dp0User\AppData\Local
set HOMEPATH=%~dp0User
set ProgramData=%~dp0User\ProgramData
set Public=%~dp0User\Public
set TEMP=%~dp0User\AppData\Local\Temp
set TMP=%~dp0User\AppData\Local\Temp
set USERPROFILE=%~dp0User

:: Start
start XYZXYZXYZYXYXYX.exe
```