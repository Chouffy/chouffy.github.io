---
parent: Softwares
---

# Docker

This will be also about project connected to or running on Docker, like Portainer.

## Docker software

A *container* run an *image*.  
Data are in `/var/lib/docker/volumes/`

Container management:

* Run `docker run -d --name container_name image` with *image* `nginx` for example
* Stop `docker stop container_name`
* Restart `docker restart container_name`
* Pause `docker pause container_name` and `docker unpause container_name`
* Kill `docker kill container_name`
* Remove `docker rm container_name`
* Bash `docker attach container_name`

Images management:

* List `docker images`
* Remove `docker rmi image_name`

Other commands:

* Get Docker directory `docker info`
* List all containers `docker ps -a`
* Run a command in a container `docker exec container_name command`

## Portainer

Helps managing containers.

Run `docker run --restart always -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce`

Fix `0.0.0.0` IP in exposed port: change *Public IP* in Endpoints - [Source](https://documentation.portainer.io/v2.0/troubleshooting/troubleshooting/#exposed-ports-in-the-container-view-redirects-me-to-0000-what-can-i-do)

## Nextcloud

[Guide](https://blog.ssdnodes.com/blog/installing-nextcloud-docker/)
