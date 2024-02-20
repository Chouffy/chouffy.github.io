Is a [[MQTT]] broker [[Software]] that can run on [[NAS]] to be [[Home Assistant]] broker.
## Setup
[Source](https://techoverflow.net/2021/11/25/how-to-setup-standalone-mosquitto-mqtt-broker-using-docker-compose/) 

Setup using the value in the [Docker Readme](https://hub.docker.com/_/eclipse-mosquitto/)

Now create the first user in the container:  `mosquitto_passwd -c /mosquitto/config/mosquitto.passwd username`
