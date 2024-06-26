---
aliases: AHK
---
An open-source scripting [[programming language]] for [[Windows]]!
## Basics
- An elevated AHK process will start elevated processes by default
## Hotstrings
- Hotkey is created by single pair of colons, like `::mail::mail@example.com`
	- If the hotstring contains an emoji, save the file in `UTF-8 BOM` format - [See documentation](https://www.autohotkey.com/docs/v1/FAQ.htm#nonascii)
- Hotstrings can have [options](https://www.autohotkey.com/docs/v1/Hotstrings.htm#Options)
	- Case-insensitive by default
	- An ending character must be typed, except if [asterisk option](https://www.autohotkey.com/docs/v1/Hotstrings.htm#Asterisk) with `:*:` at the start
### Input trigger
- Sometime [[Windows]] UAC prevent scripts to run, see [documentation](https://www.autohotkey.com/docs/v2/Program.htm#Installer_uiAccess)
#### Keyboard & Mouse
* [Full list of Keys](https://www.autohotkey.com/docs/KeyList.htm) and [Special Keys](https://www.autohotkey.com/docs/v1/KeyList.htm#SpecialKeys)
* [Full description of Hotkeys, including Symbols](https://www.autohotkey.com/docs/Hotkeys.htm)
* [Full description of Hotstring](https://www.autohotkey.com/docs/Hotstrings.htm)

| Symbol | Description                                            |
|:------:| ------------------------------------------------------ |
|  `#`   | Windows key                                            |
|  `!`   | Alt key                                                |
|  `^`   | Ctrl key                                               |
|  `+`   | Shift key                                              |
|  `&`   | Combine keys/mouse buttons, like `Numpad0 & Numpad1::` |
|  `$`   | Only trigger with the exact key + avoid self-trigger   | 

## Examples
```autohotkey
^j::
Send, My first script
return

; Comment

^!F11::Send {F11} ; Send F11 when pressing Ctrl+Alt+F11
$F11::Send {Home} ; Send Home when pressing F11
```
### Window-specific
An action can be enabled in a certain window thanks to a directive (#).  
This affects all hotkeys/Hotstring beneath them in the script, and only the most recent is in effect.  
[More detail in doc](https://www.autohotkey.com/docs/commands/_IfWinActive.htm)

```autohotkey
; Untitled - Notepad
#IfWinActive Untitled - Notepad
!q::
MsgBox, You pressed ALT+Q in Notepad.
return

; Any window that isn't Untitled - Notepad
#IfWinActive
!q::
MsgBox, You pressed ALT+Q in any window.
return
```
### Launch a command unelevated from an elevated script
- Use [`ShellRun`](https://github.com/Lexikos/AutoHotkey-Release/blob/master/installer/source/Lib/ShellRun.ahk)
- And call it like `ShellRun("command.exe")`
## Reference
* [Official tutorial](https://www.autohotkey.com/docs/Tutorial.htm)
