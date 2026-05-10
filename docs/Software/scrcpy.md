Is a [[Software]] to control [[Android]] phones over [[Android Debug Bridge|adb]]
## Notes
- [Website](https://github.com/Genymobile/scrcpy)
	- [ReadMe](https://github.com/Genymobile/scrcpy/blob/master/README.md#user-documentation)
- Useful options: 
	- `--max-size 1024`
	- `--stay-awake`
	- `--show-touches`
	- `--keyboard=uhid`
## [Shortcuts](https://github.com/Genymobile/scrcpy/blob/master/doc/shortcuts.md)
| Action                                     | Shortcut                                                                                                   |
| ------------------------------------------ | :--------------------------------------------------------------------------------------------------------- |
| Switch fullscreen mode                     | MOD+f                                                                                                      |
| Rotate display left                        | MOD+← _(left)_                                                                                             |
| Rotate display right                       | MOD+→ _(right)_                                                                                            |
| Flip display horizontally                  | MOD+Shift+← _(left)_ \| MOD+Shift+→ _(right)_                                                              |
| Flip display vertically                    | MOD+Shift+↑ _(up)_ \| MOD+Shift+↓ _(down)_                                                                 |
| Pause or re-pause display                  | MOD+z                                                                                                      |
| Unpause display                            | MOD+Shift+z                                                                                                |
| Reset video capture/encoding               | MOD+Shift+r                                                                                                |
| Resize window to 1:1 (pixel-perfect)       | MOD+g                                                                                                      |
| Resize window to remove black borders      | MOD+w \| _Double-left-click¹_                                                                              |
| Click on `HOME`                            | MOD+h \| _Middle-click_                                                                                    |
| Click on `BACK`                            | MOD+b \| MOD+Backspace \| _Right-click²_                                                                   |
| Click on `APP_SWITCH`                      | MOD+s \| _4th-click³_                                                                                      |
| Click on `MENU` (unlock screen)⁴           | MOD+m                                                                                                      |
| Click on `VOLUME_UP`                       | MOD+↑ _(up)_                                                                                               |
| Click on `VOLUME_DOWN`                     | MOD+↓ _(down)_                                                                                             |
| Click on `POWER`                           | MOD+p                                                                                                      |
| Power on                                   | _Right-click²_                                                                                             |
| Turn device screen off (keep mirroring)    | MOD+o                                                                                                      |
| Turn device screen on                      | MOD+Shift+o                                                                                                |
| Rotate device screen                       | MOD+r                                                                                                      |
| Expand notification panel                  | MOD+n \| _5th-click³_                                                                                      |
| Expand settings panel                      | MOD+n+n \| _Double-5th-click³_                                                                             |
| Collapse panels                            | MOD+Shift+n                                                                                                |
| Copy to clipboard⁵                         | MOD+c                                                                                                      |
| Cut to clipboard⁵                          | MOD+x                                                                                                      |
| Synchronize clipboards and paste⁵          | MOD+v                                                                                                      |
| Inject computer clipboard text             | MOD+Shift+v                                                                                                |
| Open keyboard settings (HID keyboard only) | MOD+k                                                                                                      |
| Enable/disable FPS counter (on stdout)     | MOD+i                                                                                                      |
| Pinch-to-zoom/rotate                       | Ctrl+_click-and-move_                                                                                      |
| Tilt vertically (slide with 2 fingers)     | Shift+_click-and-move_                                                                                     |
| Tilt horizontally (slide with 2 fingers)   | Ctrl+Shift+_click-and-move_                                                                                |
| Drag & drop APK file                       | Install APK from computer                                                                                  |
| Drag & drop non-APK file                   | [Push file to device](https://github.com/Genymobile/scrcpy/blob/master/doc/control.md#push-file-to-device) |