---
parent: Softwares
nav_order: 10
---

# Good Softwares
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## PortableApps

### Remove splash screen

In the same directory as `AppPortable.exe`
Put `AppPortable.ini` with proper parameter

## KiTTY

* In Window → Appearance, Use `Lucida Console` instead of `Courrier`
* In Connection → Data:
    * Define an auto-login username
    * Define a command, like an auto `screen` start: `screen -q && read -n1 -r -p "Press any key to exit, or Ctrl+C to continue." && exit`

### Fix screen output

In the setting for a connection, go to :

* *Window > Appearance*, Change font to *Lucida Console*
* *Window > Translation*, Change remote character set to *ISO-8859-1:1998 (Latin-1, West Europe)* ... but this will break other softwares.

## Duplicati

A very good backup solution, if you have a good storage provider.  
In Ubuntu, installed in `/usr/lib/duplicati/`, and use `'` in command line
There's also a [command-line Duplicati client](https://pypi.org/project/duplicati-client/)

Documentation for command line is [here](https://duplicati.readthedocs.io/en/latest/04-using-duplicati-from-the-command-line/).  
Useful commands:

* `Duplicati.CommandLine.exe delete <storage-URL> --version=<int>` to delete all files that belong to version `<int>`
* `Duplicati.CommandLine.exe test <storage-URL> <all/#> [<options>]` to check either all or a number (#) of sample

Troubleshooting:

1. Do a `repair` command from the command-line web interface
1. Do a `list-broken-files` to check affected files and versions
1. Do a `purge-broken-file` to remove the above

## Paint.Net (Paint/Photoshop alternative)

* [Official site](https://www.getpaint.net/index.html)
* [Great plugin pack](https://forums.getpaint.net/topic/110234-red-ochre-plugin-pack-101-march-2017/)

## Visual Studio Code (Text/Code editor)

* [How to make VSCode portable](https://code.visualstudio.com/docs/editor/portable)

## Cygwin (Linux on Windows)

* [Official website](https://www.cygwin.com/)
* [Portable installer](https://github.com/vegardit/cygwin-portable-installer)
* Useful commands:
    * `apt-cyg` packet manager, similar to `apt`

## OpenJDK (Java)

* [Download Java interpreter](https://adoptium.net/releases)
* Open a `jar`: `.\OpenJDK\bin\javaw.exe -jar "PathToJar"`

## VirtualBox (Virtual Machine)

* Fix permissions with shared folders on Linux
    * Message in Ubuntu: `This location could not be displayed.` and `You do not have the permissions necessary to view the contents of "sf_Manager".`
    * Solution: `sudo adduser $USER vboxsf` and reboot
* Compact a virtual hard drive `.vdi`
    1. Defragment the disk
    1. In the guest:
        * Linux: `dd if=/dev/zero of=/var/tmp/bigemptyfile bs=4096k ; rm /var/tmp/bigemptyfile`
        * Windows: `sdelete.exe c: -z` from Sysinternals
    1. Shutdown
    1. Run `VBoxManage.exe modifymedium --compact c:\path\to\thedisk.vdi`
