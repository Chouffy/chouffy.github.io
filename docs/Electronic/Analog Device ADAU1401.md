---
aliases:
  - ADAU1401
  - ADAU1701
---
Is a [[Analog Devices SigmaDSP|SigmaDSP]] made by [[Analog Devices]]
## Hardware
- [ADAU1401 Page](https://www.analog.com/en/products/adau1401.html)
- [[ADI ADAU1401 Datasheet.pdf]]
	- Vdd = 3.3v
	- 2 CAD, 4 DAC
- Pinout
	- Board ![[Analog Device ADAU1401-20250203165216062.webp|232]]
	- [[Inter-Integrated Circuit|I2C]] to program using [[Analog Devices USBi|USBi]]
	- `WP` to `GND` to disable Write-Protection
## [[Analog Devices SigmaStudio|SigmaStudio]] Software
- See [[Analog Devices SigmaStudio#Usage]]
- IO → Input → Input
	- Analog Inputs (ADC): Input 0…1 → IN_1...2 on the board
	- [[Inter-Integrated Sound|I2S]]: Input 2...3
		- GND → GND
		- Data = SDATA_IN0
		- WS = INPUT_LRCLK
		- Clock = INPUT_BCLK
- IO → Output → Output
	- Analog Outputs (DAC): DAC1...4 → OUT1...4 on the board
### Examples
#### LED + Button
- Hardware Configuration
	- MP2 → Output GPIO for the built-in [[LED]]
- Schematic
	- On/Off Switch
	- General Purpose Output: GPIO_2