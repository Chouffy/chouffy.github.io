---
parent: Softwares
---

# Windows

## Tidbits

### Extract MSI archive

`msiexec /a PathToMSIFile /qb TARGETDIR=DirectoryToExtractTo`

### Change machine hostname with no capslock

`HKEY_LOCAL_MACHINE\SYSTEM\CURRENTCONTROLSET\CONTROL\COMPUTERNAME`

## Control Panel

### Open performances options panel

You can't open this panel if you're not an admin (System > Advanced system settings).
Instead, start `C:\Windows\System32\SystemPropertiesPerformance.exe`.

## Commande line shortcuts

### Start a software

`Cmd /k` : do not close automatically

UWP app: `start shell:AppsFolder\Microsoft.Windows.Photos_8wekyb3d8bbwe!App`
and replace name with UWP name in `.\AppData\Local\Packages\`

[Source: Stakeoverflow - CALL command vs. START with /WAIT option](https://stackoverflow.com/questions/13257571/call-command-vs-start-with-wait-option)

### Scheduled task: run a task on-demand

`schtasks /Run /TN "task name"`
