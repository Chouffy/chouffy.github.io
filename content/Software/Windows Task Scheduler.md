Is a [[Software]], part of the [[Windows]] system to [[Task Scheduling|schedule tasks]]
## Notes
### General
- `Run whether user is logged on or not` doesn't work on `AzureAD` domain
	- Workaround: create a local user for that
### Triggers
- `Workstation unlock` is done every time user logs in in an current session, but not (it seems) when the session is started
## Examples
### Schedule PowerShell scripts
- Select `Run whether user is logged on or not` to hide the prompt
	- Could not work on Domain PCs
- Program: `C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe`
- Argument: `-WindowStyle Hidden -ExecutionPolicy Bypass -Command "& 'path\to\script.ps1' -arg1='value' -arg2='path'"`
- Start in: `path\to\