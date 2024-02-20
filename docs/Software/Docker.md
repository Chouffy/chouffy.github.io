---
aliases:
  - Docker Compose
---
Is a kind of [[Virtualization]] [[Software]] of full environments in containers. [Website](https://www.docker.com/)
## Concept
A Container contains all dependencies to run the software. 

It contains of:
- Docker *Engine* with a client/server architecture
	- Docker *Client*
- Docker *Images* is a template with instructions to create the containers
	- Built using a Docker File
	- Stored in a Docker Registry
- Docker *Containers* is a standalone, executable that include applications and their dependencies
	- Runs in isolation
- Docker *Registry* is a server-side service to host and distribute images

![[Pasted image 20230506153505.webp]]
## Usage
A *container* run an *image*.  
Data are in `/var/lib/docker/volumes/`.

Install guide for Linux [here](https://docs.docker.com/engine/install/ubuntu/).
Don't forget to add yourself to the docker group: `usermod -a -G docker $USER`
### Container management
* Run `docker run -d --name container_name image` with *image* `nginx` for example
* Stop `docker stop container_name`
* Restart `docker restart container_name`
* Pause `docker pause container_name` and `docker unpause container_name`
* Kill `docker kill container_name`
* Remove `docker rm container_name`
* Bash/Console/Log/See what's going on `docker attach container_name`
    * And `CTRL+P` then `CTRL-Q` to detach
* Update `docker update [OPTIONS] CONTAINER`
    * Add restart policy: `docker update --restart=always CONTAINER`
### Images management
* List `docker images`
* Remove `docker rmi image_name`
* Prune: `docker image prune --all`
* List of images are in the [Docker Hub](https://hub.docker.com/)
* An previously downloaded image can be used by referring its image ID
### Data management
* Browse data in volumes: `/var/lib/docker/volumes/`
* Transfer a file from/to a container `docker cp CONTAINER:SRC_PATH DEST_PATH`
### Network
- Port are passed as `local_machine:inside_container` 
### Other commands
* Get Docker directory `docker info`
* List all containers `docker ps -a`
* Run a command in a container `docker exec container_name command` ^ad959b
	* Keep the prompt open: `docker exec -it container_name sh`
* Do some spring cleanup - (*Be careful with that!*) `docker system prune --all`
- Start an `alpine` container: `docker run -it --rm --entrypoint sh alpine`
#### Get inside a stopped container
[Source](https://www.thorsten-hans.com/how-to-run-commands-in-stopped-docker-containers)
- Get the container ID of the container with `docker ps -a`
- Commit the stopped image `docker commit 0dfd99999 debug/abc`
- Create a new container from the image `docker run -it --rm --entrypoint sh debug/abc`
- Delete the container & image `docker image rm debug/abc`
## Docker Compose
Is a way to define (multi-)containers applications
- [Getting Started](https://docs.docker.com/compose/gettingstarted/) tutorial
- List of all [properties](https://docs.docker.com/compose/compose-file/compose-file-v3/)
- [Cheat sheet](https://devhints.io/docker-compose)
- [Translate a Docker Run to a Docker Compose](https://www.composerize.com/)
### Management
- `docker compose up` to start the Compose file
	- `-d` to Detach and run standalone
	- `--build` to force building the image
- `docker compose stop` to stop standalone compose
- `docker compose down` to destroy containers from the Compose
	- `--volumes` to remove
### Network
#### Communication across containers
- In the Docker Compose that contain the *host* service:
```yaml
version: "3"

services:
  myservicename:
    ...
    networks:
      - myservicename_net

networks:
  myservicename_net:
    driver: bridge
```

- In the Docker Compose that contain the *client* service:
```yaml
version: "3"

services:
  myelectricaldata:
    ...
    networks:
      - myservicename_myservicename_net

networks:
  myservicename_myservicename_net:
    # The myservicename_ prefix is due to the docker compose
    external: true
```

- In the application in the *client*: just `ping myservicename`
### Example of a `docker-compose.yml`
```yaml
version: "3"

services:
  app: # name
    image: node:18-alpine # image:tag
    container_name: customappname # optional container name
    command: sh -c "yarn install && yarn run dev" # Send a command to 
    ports:
	  - 80:80 # hostPort:containerPort
	  - 443:443/udp # hostPort:containerPort/protocol
      - 127.0.0.1:3000:3000 # hostIP:hostPort:containerPort
    volumes:
      - ./folder:/app # link folder ./folder (host) to /app (container)
      - customvolume:/mount
    environment:
      - MYSQL_HOST=mysql
      - MYSQL_USER=root

  mysql:
    image: mysql:8.0
    volumes:
      - todo-mysql-data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: secret # another way to put it, without -

volumes:
  # note: if volumes here aren't in the services above, they won't be created
  todo-mysql-data:
  local_volume: # local volume
	name: nextcloud_aio_nextcloud_datadir
	driver: local
	driver_opts:
	  device: "./path/do/dir"
	  type: "none"
	  o: "bind"
  nfs_volume: # nfs volume (read only)
    driver_opts:
      type: "nfs"
      o: "addr=192.168.0.0,ro,noatime,rsize=8192,wsize=8192,tcp,timeo=14,nfsvers=4"
      device: ":/path/to/thing"
```
## Related
- [[Portainer]]
- [[Watchtower]]
- [[Chrony]]



