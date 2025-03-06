---
aliases:
  - SigmaStudio
---
Is a [[DSP]] [[Software]] made by [[Analog Devices]] to program [[Analog Devices SigmaDSP|SigmaDSP]] (with others)
## Notes
- [Main page](https://www.analog.com/en/resources/evaluation-hardware-and-software/software/ss_sigst_02.html#software-overview)
## Usage
### Hardware configuration
- Where ICs and ROM are set-up
#### Config tab
- Processors
	- `ADAU1401` connected to [[Analog Devices USBi|USBi]] `I2C 0x68 (104)`
	- `E2Prom` connected to [[Analog Devices USBi|USBi]] `I2C 0xA0 (160)`
- Connector
	- [[Analog Devices USBi|USBi]]
		- Green → Connected
#### 170x/140x Register Control
- Configuration of inputs/outputs
### Schematic
- Where logic is implemented
#### Useful blocks
- IO → Input → [Input](https://wiki.analog.com/resources/tools-software/sigmastudio/toolbox/io/input)
- IO → Output → [Output](https://wiki.analog.com/resources/tools-software/sigmastudio/toolbox/io/output)
- Volume Controls → Adjustable Gain → Single […] → No Slew → Single Volume
	- Multiple IO can be added to the same volume slider with right-click on name → Add Algorithm → Gain
- Sources → Oscillators → Beep Sources
## Programming to [[Analog Devices SigmaDSP|SigmaDSP]]
- Require a [[Analog Devices USBi|USBi]] programmer or similar
	- Connected via [[Inter-Integrated Circuit|I2C]]
## Reference
- [How to program an Analog Devices DSP? - Daumemo](https://daumemo.com/how-to-program-an-analog-devices-dsp/)