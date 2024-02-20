---
aliases:
  - iPadOS
---
Is an [[Operating System]] for Phone & Tablets made by [[Apple]].
## Setup
* [DFU Mode](https://support.apple.com/en-us/HT201412)
    * Devices without Home button: quick *Volume Up*, quick *Volume Down*, hold *Side/Top* button
    * 7th generation: *Volume Down + Side/Top*
    * Other: *Home + Side/Top*
## Hardware repair
* iPhone 6
    * [iFixit - Rear case](https://www.ifixit.com/Guide/iPhone+6+Rear+Case+Replacement/31503)
    * [iFixit - Front sensors](https://www.ifixit.com/Guide/iPhone+6+Front-Facing+Camera+and+Sensor+Cable+Replacement/31672)
## Nice apps
### Use iOS device as external screen
### Needs
- Low latency
- Low CPU usage
- Preferably wired
- Free or even FOSS
#### Available [[Software]]
* [SpaceDesk](https://spacedesk.net/)
    * On Windows, this installs a service which run as SYSTEM
    * If manual control is needed, ~~switch startup type to Manual and manage with `net start/stop spacedeskService`~~ use the built-in `spacedesk DRIVER Console`
    * Ideal settings with an iPad 7th Gen
        * Resolution 1400x1050
        * 1/3 image quality, YUV 4.2.0, 30 FPS
        * Use integrated [[Windows#Wi-Fi Hotspot]]

* Other explored services
	* [Weylus](https://github.com/H-M-H/Weylus) but no built-in 2nd screen
	* [Chome Remote Desktop](https://remotedesktop.google.com/) but seems to be more for help
## Remote Control
* Use [across](http://www.acrosscenter.com/) to emulate a Bluetooth Mouse/Keyboard from a PC

Useful shortcuts with a Windows keyboard - Shortcuts are also listed in Accessibility → Keyboard → Full Keyboard Access → Commands

Shortcut | Action
-|-
`Win+H` | Go to Springboard / Home screen
`Win+Space` | Open the Search bar
`Win+Tab` | Switch between apps
`Win+Shift+3` | Take a screenshot
`Win+Alt+D` | Open dock
