Are [[Hardware]]/[[Software]] clients of [[Squeezelite]] that runs on [[ESP32]] to play [[Music]]
## Software
### Requirements
- [[ESP32]] WROVER with 4MB of Flash and 4MB of PSRAM (N4R4)
- I2S DAC like [[PCM510x|PCM5102A]]
### Notes
- [Project](https://github.com/sle118/squeezelite-esp32)
	- [Web installer](https://sle118.github.io/squeezelite-esp32-installer/)
### Setup
- Flash using the web installer
- Connect to the generated AP (password: `squeezelite`)
- Connect the DAC to the ESP32 ([inspiration](https://learn.adafruit.com/adafruit-pcm510x-i2s-dac/circuitpython))
	- Board 3.3V → DAC VIN
	- Board GND → DAC GND
	- Board 25 → DAC WSEL
	- Board 32 → DAC DIN
	- Board 33 → DAC BCK
	- DAC 3.5mm output to line-level speaker 
## Related hardware
- [SqueezeAMP](https://github.com/philippe44/SqueezeAMP) are made by the creator of Squeezelite-ESP32
- [Audio Dock / Louder ESP](https://github.com/sonocotta/esp32-audio-dock) offer range of pre built boards, including ones with external antenna and amplifier 
	- [Web installer](https://sonocotta.github.io/esp32-audio-dock/)
	- [Hardware boards](https://github.com/sonocotta/esp32-audio-dock/tree/main/hardware)
		- [Buy pre-made](https://www.tindie.com/products/sonocotta/hifi-esp32/)
