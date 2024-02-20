---
aliases: Linux Mail, Linux SMTP Client
---
Is a [[Software]] to send [[mail]] from [[Linux]].
## Setup with [[Sendgrid]]
[Source](https://www.blog.bensoer.com/configure-mailx-mail-with-sendgrid/)
- `apt install bsd-mailx`
- Edit `sudo nano /etc/mail.rc` and add:
```
set smtp=smtp://smtp.sendgrid.net:587  
set from=sender@somedomain.com  
set smtp-auth=login  
set smtp-auth-user=apikey  
set smtp-auth-password=GENERATED_KEY
```
- Test: `mail -s "This is A Test Subject" recipient@somedomain.com`
	- When hitting `Enter`, the mail body must be sent
	- Exit this mode by `.` then `Enter`