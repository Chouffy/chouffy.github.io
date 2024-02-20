Is a [[network]] communication [[protocol]]

| Special-use addresses                    | IPv4      | IPv6 counterpart |
| ---------------------------------------- | --------- | ---------------- |
| Any                                      | 0.0.0.0   | `::`             |
| Loopback                                 | 127.0.0.1 | `::1`            |
| Default multicast (maybe only [[MQTT]]?) | 228.8.8.8 | `ff0e::8:8:8`    |

## Concept
- **Stateful** DHCPv6 auto-configuration of IPv6 is the equivalent of DHCP in IPv4. A DHCPv6 service provides the IPv6 address to the client device and both client and server maintain the "state" of that address (i.e. lease time, etc). The router in its router advertisement message will tell the newly come-up host to ask for all address (global address, DNS address, SIP proxy server address) from the DHCPv6 server.
- **Stateless** DHCPv6 is for the auto-configuration by the client device of its IPv6 address and routing based on the router advertisements. The router tells the newly come-up host to take only the extra information like DNS, SIP proxy server address from the DHCPv6 server, while the global address is given to the host by the prefix present in the router advertisement message. The router gives the prefix of 64 bits and the host uses its MAC address (48 bits) converted in EUI-64 method to obtain a global IPv6 address.
