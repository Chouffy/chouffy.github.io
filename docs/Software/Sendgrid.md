Is a [[Web]] site that can serve as a [[SMTP]] platform to send [[mail]]
## Setup
### Send email via SMTP SSL
- Send mode: SMTP with SSL/TLS
- Server address: `smtp.sendgrid.net:465`
- Authentication: `apikey:GENERATED_KEY`
	- Create a key allowing Full Access on `Mail Send`
### Send email via SMTP TLS
- Send mode: SMTP with StartTLS
- Server address: `smtp.sendgrid.net:587`
- Other: see above
