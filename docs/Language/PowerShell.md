Is a [[shell]] and [[programming language]] designed for task automation and configuration. Aim to replace [[Batch]].

See the [[powershell-cheat-sheet.pdf]] - [Source](http://ramblingcookiemonster.github.io/images/Cheat-Sheets/powershell-cheat-sheet.pdf)
## Concept
- Unix is object-based, while Windows is API-based
- Usually note case-sensitive
- `Commandlets` or `Cmdlets`
	- Verb - Noun
	- Commands are small, so users can write what they want
- Commands that can be used
	- Specific to PowerShell
	- Standard Windows and Linux via alias
		- Aliases naming is consistent
		- `get-alias` to list them all
		- `get-alias sa*` to get all aliases starting with `sa`
		- `get-alias -Definition get-process` to get all aliases for command `get-process`
- Help system to find how you want to do
	- `get-help get-service` to bring help on `get-service`
		- `... -Detailed` to have more things, like parameters
		- `... -Full` for even more
		- `... -Online` to get the web version
		- `... -ShowWindow` to get a windowed version of the help
	- `get-help about_*` for conceptual helps 
	- `get-help g*service*` to list all commands with start with `g` then have `service` in the name
	- `update-help -Force` to update all helps  
- Modules to have more functionalities
	- `Get-Module` to view currently loaded modules
	- `Get-Module - ListAvailable` to list all modules
## Language
### Syntax
| Command                 | Action                                                                                                               |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `# comment`             | Comment                                                                                                              |
| `<# comment block #>`   | Comment block                                                                                                        |
| `get-service -Name XYZ` | Call the command `get-service` with parameter `Name` and variable `XYZ`                                              |
| `net view`              | Call the parameter set `view` of the command `net`                                                                   |
| `abc; def`              | Call `abc`, then `def `                                                                                              |
| `abc (def)`             | Call `def`, then `abc`                                                                                               |
| `abc \| def`            | Call `abd`, then pipe the *output object* into `def` (new line can be added after `\|` for visibility) (without `\`) |
| `*string*`              | Wildcard                                                                                                             |
| `$_` or `$PSItem`       | Current object in the pipeline                                                                                       |
| `{}`                    | Script block to be called within another command                                                                     |
| `$a`                    | Call variable `a`                                                                                                    |
| `backtick`              | Escape character, or Go to a next line for clarity in script                                                         |
| `Set-PSDebug -Trace 2`  | Trace everything on the console                                                                                      |

### Value type
- Object
	- `get-member` or `gm` to find them
	- `properties`: Thing the object has
		- Can be browsed with `.` within the object
		- Called `ByPropertyX` in the documentation
	- `method`: Thing the object can do
- String
- Arrays with `[]`
### Piping
- *Objects* are piped from one command to another using `|`, not the text representation
- A carriage return can be done after `|` for clarity
- Allow chain of commands like
	- `get-service -name bits | stop-service`
- Sender
	- Use `gm` to find the Type of object sent
- Receiver
	- Check the documentation to verify if an input can take pipeline `get-help abc -Full`
		- "Accept pipeline input": true
		- `-InputObject xyz[]` accept `xyz` object type - must match the Sender Object Type name
		- Sometime the Receiver that accepts pipe has a different name
	- Sometime the receiver doesn't accept Object 
		- Build the sender query and filter using `select` down to the necessary information
		- Use `select -ExpandProperty x` to convert to a string
		- Bundle that in parenthesis `(get-xyz | select -ExpandProperty y)` and pass it as a parameter
		- Dot syntax: `(get-xyz).name` 
		- Script block: `get-abc | get-xyz {$_.Name}` to do `get-abc`, then call `get-xyz` for each value `Name` of `get-abc`
- If the Sender and receiver have a match noun, t
### Loops & Conditions
- `foreach {}`
## Useful commands
- Some parameter commands are common to any cmdlet - check `help about_CommonParameters`
	- Output
		- `abc -OutVariable a` to output to variable `a`
	- Risk Mitigation
		- `abc -whatif`: Dry-call the function `abc` and describe what could happen, without doing it
		- `abc -confirm`: Call a confirm box before executing `abc`
### Variables
- `$MyVar = "hello"` to set `MyVar` to `hello`
	- `$MyVar = Get-service xyz` will put the object in it
	- `$` is necessary to differentiate variables to programs
	- `${path\to\file} = "content"` will assign `"content"` to a variable stored in `path\to\file`
- `$MyVar` to read it
	- `$MyVar.status` to get the property `status` of variable `MyVar`
		- Sometime the property isn't refreshed in real-time, so maybe you need to call `.refresh()` or similar
	- `$MyVar.stop()` to call method `stop `
- `Remove-Variable` to delete a variable
	- Useful in scripts, as a `""` variable doesn't have the same effect than a non-existing variable
- If in a script, parameters variables can also be defined in `param ()` - see [[PowerShell#Functions]]
- Advanced help: `get-help *variable*`
- Environment variable in [[Batch]] are defined as `$Env:ENVIRONMENT_VARIABLE_NAME`
### Interaction with CLI
- Input
	- `read-host`
- Output 
	- `write-host` but consume the object
	- `write-output`
		- `write-warning`
		- `write-error`: throw an error
### Interaction with scripts or other commands
-  `Get-State A1`: Call function `Get-State` with parameter `A1`
-  `.\script.ps1`: Call `script.ps1`
	-  `. .\script.ps1`: Call `script.ps1` in the current scope - see [dot-sourcing operator](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_operators#dot-sourcing-operator-)
	-  `& .\script.ps1`: Call `script.ps1` in a child scope - see [call operator](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_operators#call-operator-)
	- `$?` will contain last command's execution status with `True` if it succeeded - see [about_Automatic_Variables](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_automatic_variables?view=powershell-7.2#section-1)
- `$output = pwd 2>&1`
	- 1 is standard output descriptor (`stdout`) and 2 is error output (`stderr`) - See [about_redirection](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_redirection)
	- `2>&1` redirect stream from 2 to 1, `>` send to file and `>>` appends 
### Analysis of output
- `Select-object` or `select` 
	- `-Property x` to show column `x` only
		- `-Property @{n='abc';e={$_.Name}}` to create column `abc` that will contain the `Name` 
			- `n` for name - or `l` for label (but it looks like `1`)
			  - `e` for expression
		- `@{}` is a "hash table syntax", documented in manual 
	- `-ExpandProperty x` to convert column `x` to String
- `Where-object` or `where`
	- `{ }` to define filter
	- Will return `$true` or `$false` for each row, and `$true` objects are kept
	- `get-help *comparison*` and `get-help *operators*`
- `sort`
- `group`
- `split`
- `Measure-Command {command}` to measure the time `command` take
- `Tee-Object` to copy the output object into something, while passing it to the next in pipe
### File manipulation
- `copy-item`
### Import & Export data
- `compare-object`
- `export-` have a file output, while `ConvertTo-` can be piped
- Text
	- `out-file` to export content to file
	- `get-content`
- [[CSV]]
	- `export-csv`
	- `ConvertTo-CSV`
	- `import-csv`
- [[XML]]
	- `export-clixml`
	- `$x = [xml](cat .\file.xml)` load `file.xml` as [[XML]] object
		- Can be browsed via `x.a[0]` to display content of 1st object
		- Or `x.a` to list everything
- [[HTML]]
	- `ConvertTo-html`
### Windows-specific
- Processes
	- `get-process`
- Events
	- `get-eventlog`
## Usage
- Check that you're admin before doing something
### Setup
#### Linux 
- [List of supported Linux OS](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-linux) and how to install them
##### Raspberry Pi OS
- [PowerShell releases on GitHub](https://github.com/PowerShell/PowerShell/releases)
- See [[Linux#Install a software on system]]
### Interface
- In the console window, right-click on icon -> `Properties`
### Remoting to other PCs
- Setup
	- Called WinRM - Windows Remote Management
	- Need to be enabled
- When a script is finished, the session is destroyed
- Control another PC
	- `Enter-PSSession`
	- `invoke-command` or `icm`
- Control sessions
	- `New-PSSession` to open a session, can be assigned to a `$var`
	- `Get-PSSession`
- Use modules from another session
	- `Import-PSSession`
### Scripting
- Scripts saved as `.ps1` files
- Modules are saved as `.psm1`
	- Import via via `Import-Module`
	- Or place them in directories defined in `cat Env:\PSModulePath`
		- The name of the subfolder need to be the name of the module file
- Can be called with `.\script.ps1`
	- Doesn't work without `.\`
	- Need the Execution Policy to be set
	- `. .\script.ps1` to keep all the script in memory
	- By default, nothing is shown to the user except errors
		- `Set-PSDebug -Trace 1` to script each line, and `2` for more - see help
- The PowerShell ISE can be used as an [[IDE]]
	- Auto-completion with `CTRL+Space`
	- Snippets with `CTRL+J`
- `param()` to set parameters for [[PowerShell#Variables|Variables]], set within and the whole script called with `-MyVar`
	- Mandatory parameters will be called out when calling the function via CLI
		- It's already a string in that case, so no need to put `""` for instance!
- `function Verb-Noun{ ... }` to set function
- `get-help` will work with the script with info in `<# #>`

```powershell
<#
.Synopsis
Short description

.Description
This is the long description

.Parameter MyVar
Description of MyVar

.Example
ScriptName -MyVar toto
#>

[CmdletBinding()] # To be able to set variables as mandatory
# Param must be on the 1st line
param (
	$MyVar = 'helloWorld' # Variable that can be passed on as a parameter (-MyVar) with a default variable
	[Parameter(Mandatory=$True)]  # The next variable is mandatory
	[string[]]$MyVar2     # String array variable
)

function Verb-Noun{ # Start a function
	# Do something
}
# Call the function
Verb-Noun
```

### Security
- `New-SelfSignedCertificate`
- Execution Policy direct scripting
	- `Get-ExecutionPolicy`
	- `Set-ExecutionPolicy`
		- `allsigned`: Everything must be signed 
			- And ask confirmation if untrusted publisher
		- `remotesigned`: Remote files must be signed, not local ones
- `get-psdrive` will bring you also the `Cert` drive
	- `dir Cert:\CurrentUser -Recurse -CodeSigningCert -OutVariable a` to export all code signing certificate
	- `$cert = $a[0]` to take the 1st certificate from last command
- `Set-AuthenticodeSignature -Certificate $cert -FilePath .\script.ps1` to sign `Script.ps1`
- See [[kloppenborg.net - Restic Backup for Windows Client]] for tips on how to enable PowerShell scripts and automate them
### External calls
- Parameters for the `PowerShell.exe` commands:
	- Path: `C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe`
	- `-Command "Set-Location /path/to/dir"` to do a command
	- `-Command "& '/path/to/script.ps1'` to run a script
	- `-File "/path/to/script.ps"` to run a script 
	- `-NoExit` to keep the window open
	- `-WindowStyle Hidden` to hide the window - Seems to work only with admin privilege
	- `-ExecutionPolicy Bypass` to bypass the [[PowerShell#Security]] check
- Scheduling: See [[Windows Task Scheduler#Schedule PowerShell scripts]]
## Ressources
- [PowerShell For Beginners Full Course](https://www.youtube.com/watch?v=UVUd9_k9C6A)