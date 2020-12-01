---
parent: Server Softwares
last_modified_date: 2020-12-01
---

# Ubuntu Server

## Setup

### Livepatch service

1. `sudo snap install canonical-livepatch`
1. [Generate a token](https://auth.livepatch.canonical.com/)
1. `sudo canonical-livepatch enable UNIQUE_TOKEN`
1. `canonical-livepatch status --verbose` to check status
