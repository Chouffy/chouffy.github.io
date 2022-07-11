---
parent: Languages
---

# Batch

This page is about Microsoft Batch script language.

## Syntax

Command | Content
-|-
`cd X` | Move to folder X
`REM` | Comments / Remarks
`echo` | Write to console
`@echo off` | Don't write script content to console
`a & b` | Do `a` and `b` commands in parallel
`a && b` | Do `a` and `b` commands in serial

### Variables

* Set and use a variable

    ```batch
    REM Spaces are significants
    set message=Hello World
    echo %message%

    REM to define variables to be local:
    setlocal
    REM to add something to PATH
    set PATH=%PATH%;c:\whatever\else
    ```

Environment variables | Content
-|-
`%COMPUTERNAME%` | Computer name

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
* `call`

Somewhat related: if you want to pass a command in a LNK shortcut to the command line, use `cmd.exe /k yourcommand`
