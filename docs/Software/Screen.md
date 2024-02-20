Is a terminal multiplexer in [[Linux]]
## Reference
[Complete guide here](https://www.howtogeek.com/662422/how-to-use-linuxs-screen-command/)
* Start `screen`
* List sessions ID `screen -ls`
* In a session - Hotkey `CTRL+A` then:
    * `d`: Detach
    * `[`: Copy mode
        * Page-Up to scroll up, Page-Down to scroll down
        * Space to start selection and Space again to stop it
    * `]`: Paste mode
    * `:sessionname  <Your_session_name>` : Rename
* Detach `screen -d session_ID`
* Reattach `screen -r session_ID`
	* Force detach & attach `screen -d -r session_ID`
## Notes
### Cannot make directory '/run/screen': Permission denied
```sh
mkdir ~/.screen && chmod 700 ~/.screen
```
And add `export SCREENDIR="$HOME/.screen"` to your `$HOME/.bashrc`