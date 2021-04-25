---
parent: Languages
---

# AutoHotKey

An open-source scripting language for Windows!

## Basics

* Commands cannot be merged into a single file

## Triggers

Hotkey is created by single pair of colons

1. `::` if an hotstring
1. Key combo like `j` or Hotstring like `btw`
1. `::`
1. Content, like `Send, text`
1. `return` if not only text is used

### Input trigger

#### Keyboard & Mouse

* [Full list of Keys](https://www.autohotkey.com/docs/KeyList.htm)
* [Full description of Hotkeys, including Symbols](https://www.autohotkey.com/docs/Hotkeys.htm)
* [Full description of Hotstrings](https://www.autohotkey.com/docs/Hotstrings.htm)

Symbon | Description
:-: | -
`#` | Windows key
`!` | Alt key
`^` | Ctrl key
`+` | Shift key
`&` | Combine keys/mouse buttons, like `Numpad0 & Numpad1::`

#### Window-specific

An action can be enabled in a certain window thanks to a directive (#).  
This affects all hotkeys/hotstring beneath them in the script, and only the most recent is in effect.  
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

### Examples

* *Hotkey* is a key or key combination that trigger some action

    ```autohotkey
    ^j::
    Send, My first script
    return
    ```

* *Hotstring* expand abbreviations, but can also be used to trigger an action

    ```autohotkey
    ::mail::mail@example.com
    ```

## Reference

* [Official tutorial](https://www.autohotkey.com/docs/Tutorial.htm)