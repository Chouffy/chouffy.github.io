Is an [[eReader]].

This post is not organized, it's more a place to save useful links. I hope you'll find what you need !  
Please note that I have a NST *with GlowLight*. It was also published [on the XDA Forum here](http://forum.xda-developers.com/nook-touch/general/list-quick-useful-links-to-kernels-roms-t2990649 ).
## CWM Recovery
Differents version : on the SD Card (128 Mb or 2 Gb), or integrated in the system, [see here - XDA](http://forum.xda-developers.com/showthread.php?t=1360994 ).  
For launching it, just power on the Nook and press the two lower buttons (left & right) when the screen change for "*Read Forever*", and wait for the recovery
## Kernels
**Kernel installer via CWM** : [Download this archive file here](/img/nook/uImage_Flasher.zip ) and place the *uImage* and *uRamdisk* files in the */boot* directory, then flash it.

Compatible with the 1.2.x system :
- **v166** : Wifi, GlowLight, NoRefresh2, 1 Ghz - [XDA Link](http://forum.xda-developers.com/showpost.php?p=32790735&postcount=48 )
- v174 : Wifi, (GlowLight) sans on/off, NoRefresh2, 1 Ghz - [XDA Link](http://forum.xda-developers.com/showpost.php?p=34302321&postcount=78 )
- v174mod : Wifi, GlowLight, NoRefresh2, 1 Ghz  - [XDA Link](http://forum.xda-developers.com/showpost.php?p=35049488&postcount=93 )
- *Not tested :* Kernel with USB-Host : [original version](http://forum.xda-developers.com/showpost.php?p=43212551&postcount=164 ) and [version with the SD10 patch](http://forum.xda-developers.com/showpost.php?p=43797159&postcount=172 ).
- Just in case, the [original NSTG kernel](http://forum.xda-developers.com/showpost.php?p=55323403&postcount=239 )

FastMode application: [GitHub](https://github.com/marspeople/NoRefreshToggle/downloads ) and FastMode2 : [XDA](http://forum.xda-developers.com/showpost.php?p=39529578&postcount=140&nocache=1&z=7383330913478812 ) : very useful to switch refreshing mode !  
Finally, you'll find some [useful scripts here](http://forum.xda-developers.com/showpost.php?p=35362768&postcount=105 ).
## Roms
Base 1.1.x (NST) : [TouchNooter 2.1.31](http://forum.xda-developers.com/showthread.php?t=1343143 ) : *not tested*
Base 1.2.x (NST et NSTG) :
- [GlowNooter 1.12.25](http://forum.xda-developers.com/showthread.php?t=1675706 ) : **1.2.0**
- [pinguy1982 Tweaked Modded ROM](http://forum.xda-developers.com/showthread.php?t=2651053 )
- [1337 ROM](http://forum.xda-developers.com/nook-touch/development/1337-rom-t2931567 )
- [Original 1.2.1 - B&N **USA**](http://www.barnesandnoble.com/u/Software-Updates-NOOK-Simple-Touch/379003175/ ) : **English only, no dictionaries**
- [Original 1.2.1 - B&N **UK**](http://www.nook.com/gb/support/nook-simple-touch-GlowLight-software-updates ) : **Multi-lingual, dictionaries**
    - Install via CWM : check *Install zip > Toggle Signature Verification* before installer
    - If the checking process doesn't work, try a repack with the 1337 ROM (take the modded *update.zip* from it and replace all the files with the official one). The verification isn't needed with this method.
    - Root with [Nook Manager](http://forum.xda-developers.com/showthread.php?t=2040351 )
## Some useful applications
- [Nook Clear Screen-ST/GlowLight](https://play.google.com/store/apps/details?id=com.lggfc.nookclearscreen )
- [Amazon Kindle for Nook](http://forum.xda-developers.com/showthread.php?t=2024062 )
- ADW Launcher : I used this version (google it !) : (*ADW.Launcher_v1.3.6_Standalone*) with this [eInk theme](https://play.google.com/store/apps/details?id=com.david1171.minimalistblack ).
- [Calibre Sync](https://play.google.com/store/apps/details?id=net.sengjea.calibre&hl=en ) : sync Nook with a Calibre PC, [see the author site](http://sengjea.net/calibre-sync/ )
- [Scan Media](https://play.google.com/store/apps/details?id=com.dcd.scanmedia ) to refresh the list of books in the B&N Reader app.
- [Book button menu](http://forum.xda-developers.com/showthread.php?t=1280509 ), to customize the book button.
- [LinkPush](http://linkpush.appspot.com/ ) : send links to the Nook. The android application is not mandatory, just save this bookmark : *[http://http://linkpush.appspot.com/go](http://http://linkpush.appspot.com/go )*.
- [APK-Info, to check the proprieties of an APK on Windows](http://forum.xda-developers.com/showthread.php?t=2359373 )
## Note
- [Extended power menu](http://forum.xda-developers.com/showthread.php?t=2171818 ) : *doesn't work with me !*
- [Best Android non-PDF Reader Apps for NST](http://forum.xda-developers.com/showthread.php?t=2597842 )
- [Some RAM ameliorations](http://forum.xda-developers.com/showpost.php?p=45783923&postcount=191 )
## Usefuls ADB commands
- Remount the system with Read-Write rights : `mount -o rw,remount /dev/block/stl12 /system`
- See the actual CPU speed (BogoMIPS) : `cat /proc/cpuinfo`
