---
aliases:
  - I2C
  - I²C
  - SDA/SCL
---
Is a [[serial]] [[bus]] to connect [[Microcontroller]] and transmit information between chips.
## Notes
- Connect with `SDA`, `SCL` (clock) and `GND` (Ground)
- Signaling
	- Line is "1" by default, hence the pull-up
	- Writes are done by grounding the line: set as "0"
- Require a pull-up [[Resistor]] on each line
	- Values
		- "Generally 10 kΩ works"
		- 1 kΩ for 3.3v circuits
			- Will waste 1mW of power
		- 10 kΩ for 5v circuits
	- Why
		- Too small value will prevent the [[Microcontroller|IC]] to pull-down to "0"
		- Too big value will prevent to charge the bus capacitance back to "1"
		- ![[Inter-Integrated Circuit-20250112085230660.webp|329]]
## Reference
- [Is there a correct resistance value for I2C pull-up resistors? - StackExchange](https://electronics.stackexchange.com/a/4840)
- [Design calculations for robust I2C communications - EDN](https://www.edn.com/design-calculations-for-robust-i2c-communications/)
- [Working with I2C Devices - Adafruit](https://learn.adafruit.com/working-with-i2c-devices/pull-up-resistors)