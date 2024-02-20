is a [[Docker]] automated container update. [Website](https://containrrr.dev/watchtower/)
## Notes
- Environment variables:
	* `TZ:timezone`: Timezone
	* `WATCHTOWER_SCHEDULE: 0 0 5 * * *`: [[Cron]] setting to check for update each day at 0500.
