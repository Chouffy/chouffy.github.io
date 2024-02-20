is a [[Docker]] [[Web]] container management. [Website](https://www.portainer.io/)
## Setup
* Run `docker run --restart always -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce`
	* `-ce` is community edition, the free one
* Automatically remove old images: define the variable `WATCHTOWER_CLEANUP=true`
* Fix `0.0.0.0` IP in exposed port: change *Public IP* in Endpoints - [Source](https://documentation.portainer.io/v2.0/troubleshooting/troubleshooting/#exposed-ports-in-the-container-view-redirects-me-to-0000-what-can-i-do)
## Stacks / Docker compose
* Files stored in `/var/lib/docker/volumes/portainer_data/_data/compose/`
* Can be deployed from [[GitHub]]
	* Token can be generated from Settings → Developer settings
* Persistent volumes are named `stackname_volumename`