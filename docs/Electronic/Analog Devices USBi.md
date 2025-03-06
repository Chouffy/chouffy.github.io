---
aliases:
  - USBi
  - EVAL-ADUSB2EBZ
  - freeUSBi
---
Is a programmer for [[Analog Devices SigmaDSP|SigmaDSP]] using [[Analog Devices SigmaStudio|SigmaStudio]]
## Notes
- See the [Wiki Guide](https://wiki.analog.com/resources/tools-software/sigmastudio/tutorials/microcontroller)
- Can supply power to programmed board
	- Still compatible with logic level 1.8V~3.3V
- Color-coding of LED
	- Red: Self-test
	- Blue: [[Serial Peripheral Interface|SPI]]
	- Green: [[Inter-Integrated Circuit|I2C]]
- See also [[ADI EVAL-ADUSB2EBZ Application Note.pdf]]
## Hardware
- Official USB stick: 
	- `USBi`
	- `EVAL-ADUSB2EBZ`
### CY7C68013A Alternative
- The `CY7C68013A` board can be used as an alternative
	- 5V is available from PCB Back
	  ![[Analog Devices USBi-20250203160018636.webp|560]]
	- Connect `SDA, SCL, GND`
	  ![[Analog Devices USBi-20250203155947697.webp|560]]
	- Layout
		- Blue switch is board on/off
- Does require the [freeUSBi driver](https://github.com/freeDSP/freeUSBi/tree/master/SOURCES/DRIVERS)
	- [Signed version](https://www.diemaker.de/2017/08/11/suredsp-freeusbi-treiber-signieren/) , but require to install the provided certificate to local machine root
		- Install the certificate
			- Right-click on `freeusbi.cert` → Install certificate
			- Select Local Machine
			- Select "Trusted Root CA" and "Trusted Publisher" (do it 2x)
		- Install the driver
			- Right-click on `cyusb3.inf` → Install
## Reference
- [How to program an Analog Devices DSP? - daumemo](https://daumemo.com/how-to-program-an-analog-devices-dsp/)
- [SureDSP – FreeUSBi Treiber Signieren - Die Maker](https://www.diemaker.de/2017/08/11/suredsp-freeusbi-treiber-signieren/)