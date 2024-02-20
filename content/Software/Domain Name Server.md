---
aliases: DNS
---
Is like the address book of the [[Web]].
## Tools
* Reverse from IP to DNS: `nslookup IP`
## Lifecycle
[Gandi - Lifecycle per TLDs](https://docs.gandi.net/en/domain_names/renew/deadlines.html)
## Resolution
- [[Cloudflare Tunnel]] 1.1.1.1
	- Check the status: https://1.1.1.1/help
	- Classic
		- `1.1.1.1`
		- `1.0.0.1`
		- DoH: `https://cloudflare-dns.com/dns-query`
		- DoT: `one.one.one.one`
		- DoT: `1dot1dot1dot1.cloudflare-dns.com`
	- Block malware
		- `1.1.1.2`
		- `1.0.0.2`
		- `2606:4700:4700::1112`
		- `2606:4700:4700::1002`
		- DoH: `https://security.cloudflare-dns.com/dns-query`
		- DoT: `security.cloudflare-dns.com`
- [[Mullvad]]
	- [Source for DoH and DoT](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/)
	- Classic
		- DoH: `doh.mullvad.net`
		- DoT: `https://doh.mullvad.net/dns-query`
	- Ad-block
		- DoH: `adblock.doh.mullvad.net`
		- DoT: `https://adblock.doh.mullvad.net/dns-query`
### Expired domains
- Backorder
	- [Backordering - The best way to secure an expired name](https://blog.sav.com/backordering-the-best-way-to-secure-an-expired-domain-name)
	- [How to backorder](https://www.expireddomains.net/article/howto-backorder-expired-domains-15102.html)
## DNS Lists for filtering
- [StevenBlack Hosts](https://github.com/StevenBlack/hosts)
- [AdGuard](https://adguard.com/kb/general/ad-filtering/adguard-filters/#mobile-ads-filter), and in particular
	- DNS Filter
	- Mobile ads Filter
- [GoodbyeAds](https://github.com/jerryn70/GoodbyeAds)
- [EasyList](https://easylist.to/pages/other-supplementary-filter-lists-and-easylist-variants.html) in your locale