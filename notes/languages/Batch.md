---
parent: Languages
---

# Batch

This one is about Microsoft Batch script language.

## Syntax

Command | Content
-|-
`cd X` | Move to folder X
`REM` | Comments / Remarks
`echo` | Write to console
`@echo off` | Don't write script content to console

### Variables

* Set and use a variable

    ```batch
    set message=Hello World
    REM Spaces are significants
    echo %message%
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
