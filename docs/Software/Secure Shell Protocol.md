---
aliases: SSH, OpenSSH
---
Is a [[network]] protocol to communicate securily. Used by [[Linux]], among others.
## Usage
- Connect to a custom port `ssh -p port server`
- Copy files between computers with `scp ./source/file user@client:/destination/path`
## Configuration
* Config lives in `/etc/ssh/sshd_config`
* `PermitRootLogin`
	* `no` to deny root to log in
	* `prohibit-password` to allow only SSH keys
* `AllowUsers toto` to only allow `toto` to log in
* `PasswordAuthentication no` to forbid login with password
* `sudo systemctl restart ssh` to restart the service
### Create keys
Can be used for password-less authentication (if no passwords are provided)
1. On the client, generate the keys: `ssh-keygen -t ed25519 -a 100` - [source](https://security.stackexchange.com/questions/143442/what-are-ssh-keygen-best-practices)
2. Transfer the public key (`.pub`) 
	- Manually in the server: `~/.ssh/authorized_keys`
	- From the client to the server: ` cat ~/.ssh/id_ed25519.pub | ssh HOST_USER@HOST_IP 'mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys'`
1. On the client, connect to the host: `ssh HOST_USER@HOST_IP`
2. If necessary, add the host to known hosts: `ssh-keygen -R HOST_IP`
### Connect to SSH via [[Cloudflare Tunnel]]
1. In the Cloudflare Zero Trust dashboard
    1. Set up an Access Application with an associated access rule
    1. Set up an SSH Tunnel to the Linux server
1. On the target client
    1. [Grab the latest release of cloudlared](https://github.com/cloudflare/cloudflared/releases)
    1. Set up a local proxy connected to your hostname `cloudflared-windows-amd64.exe access ssh --hostname example.com --url localhost:1234`
    1. Connect with your favorite SSH client to `user@localhost:1234`