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

In the same directory than `AppPortable.exe`
Put `AppPortable.ini` with proper parameter

## KiTTY / PuTTY

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

## Paint.Net (Paint/Photoshop alternative)

* [Official site](https://www.getpaint.net/index.html)
* [Great plugin pack](https://forums.getpaint.net/topic/110234-red-ochre-plugin-pack-101-march-2017/)

## Visual Studio Code (Text/Code editor)

* [How to make VSCode portable](https://code.visualstudio.com/docs/editor/portable)
