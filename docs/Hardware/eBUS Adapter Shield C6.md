Is a piece of [[Hardware]] that can interface with [[eBUS]]
## Notes
- If using [[eBUSd]], the Wi-Fi signal must be strong (≥ 65%)
	- Otherwise, you'll loose the connection and the adapter will be unresponsive to the network
- If [[Home Assistant]] shows "offline", restart it
## Setup
1. [Flash](https://adapter.ebusd.eu/v5-c6/firmware.en#flash) the latest version
2. Configure network: Wi-Fi Client
3. Configure eBUSd using on [[Home Assistant]] Add-ons
	1. Add [LukasGrebe/ha-addons](https://github.com/LukasGrebe/ha-addons?tab=readme-ov-file) repo
	2. Install the *eBUSd* add-on
	3. In Configuration
		1. Check *Unused configuration entries*
		2. Select Mode: `enh`
		3. Input the shield IP address with `:9999`
	4. Start the add-on - [[MQTT]] should be published automatically
4. Check that data is in MQTT Explorer
	1. It can take some time (<10 min) to get all field populated
5. Try to override data in an Action

```yaml
action: mqtt.publish
data:
  topic: ebusd/e7c/RoomTempCorr/set
  payload: "-10"
```
## Ressources
- [GitHub - How to "Replace" an Exacontrol E7 C Thermostat and Control Your Boiler with Home Assistant ](https://github.com/john30/ebusd/discussions/1532)
- [GitHub - HOW TO: Write values from Home Assistant controls to ebusd (Idiot's guide (by an idiot)) ](https://github.com/john30/ebusd/discussions/1177)
- [Medium - Making My Vaillant EcoCompact Boiler Smart with eBUSd and Home Assistant](https://medium.com/@jaba0x/making-my-vaillant-ecocompact-boiler-smart-with-ebusd-and-home-assistant-20599c39fba0)