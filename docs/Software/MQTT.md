MQ Telemetry Protocol is a [[network]] [[protocol]] used in many [[IoT]] devices.
## Concept
- Publish on a *topic*
- Subscribe to a *topic*
- Messages is an information
- Topic
	- What
		- Register interest for *incoming message*
		- Specify where you want to publish
	- How
		- `home/office/lamp` for example
		- Case sensitive
- Broker
	- Roles
		- Receive all messages
		- Filters the messages
		- Publish to all subscribers
## Software
- Broker
	- [[HiveMQ Community Edition]]
	- [[Mosquito MQTT Broker]]
- Test
	- [MQTT Explorer](https://github.com/thomasnordquist/MQTT-Explorer/releases)
		- If  `localhost` don't work, try `127.0.0.1`
- Usage
	- [[Home Assistant]]
	- [[Node-RED]]
## Resources
-  [What is MQTT and How It Works ](https://www.youtube.com/watch?v=EIxdz-2rhLs)