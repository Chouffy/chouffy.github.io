Is a [[database]] [[Software]]
## Setup
- [Docker](https://hub.docker.com/_/influxdb/)
- To access the CLI, [login](https://docs.influxdata.com/influxdb/v2.4/tools/influx-cli/?t=Windows#authenticate-with-a-username-and-password) first:
	```sh
	influx config create \
	  -n config-name \
	  -u http://localhost:8086 \
	  -p example-user:example-password \
	  -o example-org
	```
- To [create another user](https://docs.influxdata.com/influxdb/v2.7/reference/cli/influx/user/create/): `influx user create --name example-username --password PASSWORDHERE`
- To [grant all rights](https://stackoverflow.com/questions/72633323/create-user-in-influxdb-v2-with-role-owner-or-assign-role-to-a-user-later)- see [documentation](https://docs.influxdata.com/influxdb/v2.7/reference/cli/influx/auth/create/): `influx auth create --all-access -u USERNAME -o ORG`