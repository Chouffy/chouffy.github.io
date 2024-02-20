---
aliases:
  - Microsoft Batch
---
Is about a script [[programming language]] used in [[Windows]].
## Syntax
Command | Content
-|-
`cd X` | Move to folder X
`REM` or `::` | Comments / Remarks
`echo` | Write to console
`@echo off` | Don't write script content to console
`a & b` | Do `a` and `b` commands in parallel
`a && b` | Do `a` and `b` commands in serial
`echo^ test` | After `^`, one can continue the command in a new line but add a space!
### Variables
- Environment variables
	- `set message=Hello World` to set a variable
		- Caution, things like `"` shouldn't be used and are significant
		- But maybe you need to have it when you *use* the variable, like directories path
	- `echo %message%` to view a variable
- Local variables:
```batch
REM to define variables to be local:
setlocal
REM to add something to PATH
set PATH=%PATH%;c:\whatever\else
```

| Environment Variables | Content       |
| --------------------- | ------------- |
| `%COMPUTERNAME%`      | Computer name |
| `%~dp0`               | Current directory of the `.bat` launched              |
## Loops
```batch
if var1 == var (
    echo do something
) else (
    echo do else
)
```
## Files & Folder
* Folder
    * Create `mkdir`
* Files & folder
    * Rename `REN` or `rename`
    * Use a drag-n-dropped file in a batch: `"%~1"`
    * Shortcut to start a command line in the current directory: create a bat file containing `@cmd`
* Variables stored into a file
    * Save `echo %var%>filename`
    * Load `set /p var=<filename`
* Test if something exists
    * File `if exist filename (...)`
    * Folder `if exist folder\ (...)`
### Executables
There's several ways to launch an app:
* `start`
	* `start NAME.exe`
	* `start "" "NAME WITH SPACE.exe"` - the 1st `""` is for window title
* `call`
	* Great when calling other `.cmd`, otherwise the execution flow is transferred ([source](https://stackoverflow.com/a/29624321))
		* Otherwise will break other commands, like `pause`

Somewhat related: if you want to pass a command in a LNK shortcut to the command line, use `cmd.exe /k yourcommand`
#### Check that a process is running
```batch
tasklist /fi "ImageName eq MyApp.exe" /fo csv 2>NUL | find /I "myapp.exe">NUL
if "%ERRORLEVEL%"=="0" echo Program is running
if "%ERRORLEVEL%"=="1" echo Program isn't running
```