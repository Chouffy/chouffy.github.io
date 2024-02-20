Is a [[Software]] to manage [[ESP boards]] like [[ESP32]] or [[ESP8266]].
## Links
- [Homepage](https://esphome.io/index.html)
## Setup
### Device
- On [[Wi-Fi]]
	- Doesn't like hidden network by default
	- Add the following - see [documentation](https://esphome.io/components/wifi.html#configuration-variables)
		``` yaml
		wifi:
		  ssid: !secret wifi_ssid
		  password: !secret wifi_password
		  fast_connect: True
		```
	- If the BSSID is shared across SSID, it could lead to no connection