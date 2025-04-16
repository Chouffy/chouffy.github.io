---
aliases:
  - I2S
  - I²S
---
Is a [[serial]] [[bus]] to connect [[Microcontroller]] to transmit [[Music|sound]]
## Notes
- While naming is similar, it's completely different than [[Inter-Integrated Circuit|I²C]]
- Require
	- Ground
	- SCK / BC(L)K: Serial Clock
	- WS / L(R)CLK / FS: Word Select
	- SD(ATA) / (S)DIN / SDOUT / DACDAT / ADCDAT: Serial Data
- Optional
	- MCK : Master Clock
- Decoding boards
	- [[PCM510x]]
	- [[Analog Device ADAU1401|ADAU1401]]