---
parent: Softwares
---

# Windows

## Tidbits

* Extract MSI archive: `msiexec /a PathToMSIFile /qb TARGETDIR=DirectoryToExtractTo`
* Change machine hostname with no capslock: `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\ComputerName\ComputerName`
* Change network name: `secpol.msc` > Network List Manager Policies > Connection Name
* Modern Standby: [Check S states](https://www.laptopmag.com/articles/how-to-use-modern-standby)
* Webcam: Disable Frame server mode: [(source)](https://www.winhelponline.com/blog/webcam-anniversary-update-windows-10-yuys-standard/)
    * `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows Media Foundation\Platform` create DWORD `EnableFrameServerMode` with 0
    * `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows Media Foundation\Platform` create DWORD `EnableFrameServerMode` with 0

## Control Panel / Settings

### Open performances options panel

You can't open this panel if you're not an admin (System > Advanced system settings).
Instead, start `C:\Windows\System32\SystemPropertiesPerformance.exe`.

### Reinstall Setting app - Setting app doesn't open

Taken from [this website](https://www.maketecheasier.com/fix-settings-app-not-working-in-windows-10/): open a PowerShell admin command line and execute `Get-AppXPackage | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\AppXManifest.xml"}`

## Commande line shortcuts

### Start a software

`Cmd /k` : do not close automatically

UWP app: `start shell:AppsFolder\Microsoft.Windows.Photos_8wekyb3d8bbwe!App`
and replace name with UWP name in `.\AppData\Local\Packages\`

[Source: Stakeoverflow - CALL command vs. START with /WAIT option](https://stackoverflow.com/questions/13257571/call-command-vs-start-with-wait-option)

### Scheduled task: run a task on-demand

`schtasks /Run /TN "task name"`
