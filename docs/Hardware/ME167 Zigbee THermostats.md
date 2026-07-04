Is a [[Zigbee]] [[Thermometer]]
## Setup
- Pairing mode: < 5C, then press the button for >5 sec
- "Local temperature offset": correction compared to measured temperature (measure + offset)
### How to choose the right adapter
- Set to 35 C
- Measure the distance between the screw thread and the top of the flow needle (while pressing it)
	- 10 → 12 mm = extension 15 mm
	- 8.5 → 10 mm = extension 17 mm
	- 6 → 8.5 mm = extension 18.5 mm
	- <6 mm = extension 24 mm
- Put the large head between the plastic adapter & the output
- How to check
	- Measure that the flow needle is at 14 mm between the top of the needle and the adaptor screw (12mm closed, 14 mm open)
	  ![[ME167 Zigbee THermostats-1764168289643.webp|298x214]]
	- 
## Usage
### Valve observation
- Mode: Heat
	- Mode: Off → Valve fully closed (pin at ~4 mm)
- Temperature Gap 
	- = Actual Temperature - Target Temperature
	- "The difference in Celcius between the Actual and Target Temperature"
	- In the positive: actual temperature is too hot
	- In the negative: actual temperature is too cold
- 3 degree hysteresis

| Temperature Gap            | Temperature Gap            | Pin extension | Valve position     |
| -------------------------- | -------------------------- | ------------- | ------------------ |
| Actual temp. is increasing | Actual temp. is decreasing |               |                    |
| Target temp. is decreasing | Target temp. is increasing |               |                    |
| ≥ +3                       | ≥ 0                        | ~ 4 mm        | Closed: no heating |
| +2                         | -1                         | ~ 3 mm        |                    |
| +1                         | -2                         | ~ 2 mm        |                    |
| 0                          | -3                         | ~ 1 mm        |                    |
| ≤ -1                       | ≤ -4                       | 0 mm          | Opened             |
## Source
- [YouTube](https://www.youtube.com/watch?v=ZbXRPCV_GsA)