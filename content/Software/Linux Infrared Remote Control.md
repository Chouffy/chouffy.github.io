---
aliases:
  - LIRC
---
Is a [[Linux]] [[Software]] that can be used to send & receive [[infrared]] commands
## Hardware
### IR Emitter
- On [[Raspberry Pi]], any GPIO can be used
	- The [[LED]] can be connected directly to GPIO, but with a low power
	- A [[PN2222 Transistor]] + [[Resistor]] can be used to drive more power according to this [schema](https://www.instructables.com/Creating-a-Raspberry-Pi-Universal-Remote-With-LIRC/)
### IR Receiver
- Has 3 pin, when looking at the window (`VS1838B`)
	- Left: Data → Raspberry Pi GPIO
	- Middle: Ground → Ground
	- Right: Power → 3.3v
- Sur mon montage → Ground = Pin 9
## [[Software]] with [[Raspberry Pi]]
### Receiver setup
[Source](https://www.instructables.com/Setup-IR-Remote-Control-Using-LIRC-for-the-Raspber/), assuming IR Receiver on GPIO 17
- `apt install lirc`
- `nano /etc/lirc/lirc_options.conf`
	```conf
	driver = default
	device = /dev/lirc0
	```
- `nano /boot/config.txt`
	- At the end of the file:
	- `dtoverlay=gpio-ir,gpio_pin=17`
- `reboot`
- `systemctl stop lircd.service`
- `mode2 -m -d /dev/lirc0` to see inputs
### Mapping table
- [All available remote mapping table](https://lirc-remotes.sourceforge.net/remotes-table.html)
### Record
- List all spaces: `irrecord --list-namespace`
- Record in raw mode: `irrecord -f`
	- And/or use the `mode2` command above to complete the file
- Replay a command: `irsend SEND_ONCE remote KEY`