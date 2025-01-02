---
aliases:
  - RAM
  - ECC
  - DDR
  - DDR4
---
Is a [[computer]] component to hold fast moving data
## Characteristics
### CAS Latency
- The lower, the better
### Speeds
- 3200 MT/s = 3200 MHz = 
### DDR4
- 260 pins are for laptop = SODIMM
- 288 pins are for PC = DIMM
### ECC
- Type
	- Unbuffered = Unregistered = UDIMM = Synchronous DRAM = SDRAM
	- Registered = RDIMM
- Unbuffered platform cannot use registered RAM
- But Registered platform can use Unbuffered RAM
## Software
### [[Linux]]
- Install `i2c-tools`
- Try `decode-dimms`