Is a [[Linux]] [[Software]] to interact with [[mobile]] [[phone]] or [[modem]].
## Usage
- Install with `apt install gammu`
- Use `gammu-detect` to check what is available
- Copy the relevant output of `gammu-detect` into `~/.gammurc`
- Check if it works with `gammu identify` and `gammu monitor`
- Interact with `gammu`
	- `gammu getsmsfolders` 
	- `gammu getsms 0 1` with folder=0 (virtual folder with all SMS) and sms=1 (1st SMS)
	- `gammu deletesms 1 3` with folder=1 and smsid=3
## Notes
- [Documentation](https://docs.gammu.org/project/index.html)
	- [Commands supported](https://docs.gammu.org//gammu/index.html) by the `gammu` utility
- [Supported phone Database](https://wammu.eu/phones/)
- [python-gammu](https://wammu.eu/python-gammu/), a binding of Gammu in [[Python]]