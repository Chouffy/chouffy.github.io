Is an [[Air Conditioning]] unit made by [[Daikin]].
## Notes
- My particular indoor unit `FTXA35C…` have the `BRP069C4X` WLAN Gateway.
## Integration with [[Home Assistant]]
### Using cloud integration
- The `BRP069C4X` gateway only talks to Daikin Onecta Cloud
- This [integration](https://github.com/jwillemsen/daikin_onecta) works well
### Using local integration
- The WLAN adapter must be replaced by a custom one, like [Faikout](github.com/revk/ESP32-Faikout/)
	- Related: a [discussion](https://github.com/revk/ESP32-Faikout/issues/882) is open to be able to override the temperature value