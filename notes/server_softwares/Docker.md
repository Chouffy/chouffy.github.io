---
parent: Server Softwares
---

# Docker

This will be also about project connected to or running on Docker, like Portainer.

## [Docker software](https://www.docker.com/)

A *container* run an *image*.  
Data are in `/var/lib/docker/volumes/`.

Install guide for Linux [here](https://docs.docker.com/engine/install/ubuntu/).
Don't forget to add yourself to the docker group: `usermod -a -G docker $USER`

Container management:

* Run `docker run -d --name container_name image` with *image* `nginx` for example
* Stop `docker stop container_name`
* Restart `docker restart container_name`
* Pause `docker pause container_name` and `docker unpause container_name`
* Kill `docker kill container_name`
* Remove `docker rm container_name`
* Bash/See what's going on `docker attach container_name`
    * And `CTRL+P` then `CTRL-Q` to detach
* Update `docker update [OPTIONS] CONTAINER`
    * Add restart policy: `docker update --restart=always CONTAINER`

Images management:

* List `docker images`
* Remove `docker rmi image_name`
* List of images are in the [Docker Hub](https://hub.docker.com/)
* An previously downloaded image can be used by referring its image ID

Other commands:

* Get Docker directory `docker info`
* List all containers `docker ps -a`
* Run a command in a container `docker exec container_name command`
* Do some spring cleanup - (*Be careful with that!*) `docker system prune --all`

## [Portainer - Web container management](https://www.portainer.io/)

Helps to manage containers.

Run `docker run --restart always -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce`

Fix `0.0.0.0` IP in exposed port: change *Public IP* in Endpoints - [Source](https://documentation.portainer.io/v2.0/troubleshooting/troubleshooting/#exposed-ports-in-the-container-view-redirects-me-to-0000-what-can-i-do)

## [Watchtower - Automatic container update](https://containrrr.dev/watchtower/)

Update containers automatically. Run the quick start script to install.

Environment variables:

* `TZ:timezone`: Timezone
* `WATCHTOWER_SCHEDULE: 0 0 5 * * *`: [cron](https://pkg.go.dev/github.com/robfig/cron@v1.2.0#hdr-CRON_Expression_Format) setting to check for update each day at 0500.

## [Chrony / Docker-NTP](https://github.com/cturra/docker-ntp)

Provide a NTP server.

* `123:UDP` need to be exposed
