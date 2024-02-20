Is a [[Web]] [[Software]] that helps to monitor [[Cron]] jobs to make they are up.

Links:
- [Website](https://healthchecks.io/)
- Open source:
	- [GitHub](https://github.com/healthchecks/healthchecks)
	- [Docker](https://hub.docker.com/r/healthchecks/healthchecks#!)
## Endpoints
- [Pinging API](https://healthchecks.io/docs/http_api/)
	- [Success (UUID)](https://healthchecks.io/docs/http_api/#success-uuid): `https://hc-ping.com/<uuid>`
	- [Start (UUID)](https://healthchecks.io/docs/http_api/#start-uuid): `https://hc-ping.com/<uuid>/start`
	- [Failure (UUID)](https://healthchecks.io/docs/http_api/#fail-uuid): `https://hc-ping.com/<uuid>/fail`
	- [Log (UUID)](https://healthchecks.io/docs/http_api/#log-uuid): `https://hc-ping.com/<uuid>/log`
	- [Report script's exit status (UUID)](https://healthchecks.io/docs/http_api/#exitcode-uuid): `https://hc-ping.com/<uuid>/<exit-status>`
## Use in script
### Linux
- Quick and easy in [[bash]] using `wget`: `wget https://hc-ping.com/<uuid> &> /dev/null`
## Setup
### In [[Docker]]
- An image is available on [Docker Hub](https://hub.docker.com/r/healthchecks/healthchecks) with an example
- See also the [configuration variables list](https://healthchecks.io/docs/self_hosted_configuration/)
	- `ALLOWED_HOSTS` to `*` to avoid error 400 at the start
	- `SECRET_KEY` is defined like in [Django](https://docs.djangoproject.com/en/4.2/ref/settings/#secret-key), and can be generated as a strong password