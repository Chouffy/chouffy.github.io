Is a [[PowerShell]] [[script]] for [[Windows]] to disable PM of a specified device.
Useful to fix issues in the [[Lenovo ThinkPad X1 Carbon Gen 7|X1C7]] or the [[Kensington SD5560T]].
```powershell
# Source: https://hydrus.org.uk/journal/jet-touchpad.html
# Find device to disable
# "Allow the computer to turn off this device to save power"
#
$targetDevice =  "Intel(R) Serial IO I2C Host Controller - 9DE9"

$hostController = Get-PnpDevice | Where-Object {$_.FriendlyName -eq $targetDevice}
$instanceName = $hostController.InstanceId
# Find Windows Management Instrumentation instance
# NOTE: manually verify correct instance is found before using this script
$powerMgmt = Get-WmiObject MSPower_DeviceEnable -Namespace root\wmi | Where-Object {$_.InstanceName -like "${instanceName}*"}
$powerMgmt.Enable = $False
$powerMgmt.psbase.put()
```