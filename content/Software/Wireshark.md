Is a [[Software]] aimed to capture and analyze [[network]] packets.
On [[Windows]], you need [npcap](https://npcap.com/#download) to capture packets.
## Filters
### Syntax
- Operators
	- `and` or `&&` to indicate that both conditions must be satisfied
	- `or` or `||` to indicate that at least one of the conditions must be satisfied
	- `not` or `!` to match all packets not satisfying the condition
	- Examples: `tcp and tcp.port == 80`, `http or ftp`, `not ftp`
- Nesting with `(x(y(z)))`
	- Example: `(http or ftp) and ip.addr == 192.168.1.14`, `not (arp or dns or dhcpfo)`
### Conditions

| Item              | Description                                          |
| ----------------- | ---------------------------------------------------- |
| ip.addr           | IP address (check both source and destination)       |
| tcp.port          | TCP Layer 4 port (check both source and destination) |
| udp.port          | UDP Layer 4 port (check both source and destination) |
| ip.src            | IP source address                                    |
| ip.dst            | IP destination address                               |
| tcp.srcport       | TCP source port                                      |
| tcp.dstport       | TCP destination port                                 |
| udp.srcport       | UDP source port                                      |
| udp.dstport       | UDP destination port                                 |
| icmp.type         | ICMP numeric type                                    |
| ip.tos.precedence | IP precedence                                        |
| eth.addr          | MAC address                                          |
| ip.ttl            | IP Time to Live (TTL)                                |

