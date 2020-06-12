---
parent: Devices
---

# Libratone API

*Goal*: Send commands (voicing, volume, playback) to Libratone Zipp speaker from anything, not just the iOS/Android app. Request of documentation has been declined by Libratone.

## Network sniffing

*Idea*: sniff the traffic between app & device to reverse engineering the thing.  

### With Wireshark

**TL;DR: Ubuntu cooked up frames as IPX.**

Wireshark analysis on Ubuntu (*any* interface, Wi-Fi hotspot for speaker & Android device) gives IPX frames.

packet # | comment
-|-
351 | volume change
1402 | neutral volume - "V100"
2195 | easy listening - "V101"
14838? | pause BT
15489? | play BT

Seems like a dead protocol, could be mis-interpreter by Wireshark (MAC info in header are wrong for example)  

If wish to send from Windows, difficult after Win7.  
Available resources:

* [IPXWrapper, used in games which used IPX as net protocol](https://github.com/solemnwarning/ipxwrapper)
* [Winsock IPX/SPX Annex](https://docs.microsoft.com/en-us/windows/win32/winsock/winsock-ipx-spx-annex?redirectedfrom=MSDN)

## On-device sniffing

It was not possible to get frames before, as most packet capture apps fakes VPN connection. This breaks Libratone app. On OnePlus device, it was possible to run `tcpdump` directly.

Used filter: `(! (dns || ssdp)) && (ip.dst == 192.168.178.129)`

packet # | comment | data
-|-|-
1179 | neutral volume - "V100" | `aa aa 02 02 06 00 c6 12 00 04 56 31 30 30         ..........V100`
1183 | easy listening - "V101" | `aa aa 02 02 06 00 45 aa 00 04 56 31 30 31         ......E...V101`

Notes:

* Two UDP streams, hitting port `7777` (for V100/V101) and another on `3334`.

Tried to replay UDP packet, with no success.  
Guess I need to dig on the UDP protocol.

## APK disassembly

*Idea*: reverse engineering the code itself  
Wanted to check used 3rd-party softwares by checking Licenses ... not available.  
Used [this thread on StackOverflow](https://stackoverflow.com/questions/12732882/reverse-engineering-from-an-apk-file-to-a-project) to reverse engineer the APK to Java classes.  

Used [dex2jar](https://github.com/pxb1988/dex2jar/releases/tag/2.0) + JD-GUI but not much success ... it's a mess.  
Then tried [decompilers online - jadx](http://www.javadecompilers.com/apk)

### Dirty Exploration

Exploration trace during dirty CTRL-F search - not sure where it'll lead.  
Used `com.libratone` in version 5.3.5. The JADX output is used as root directory.

1. `ressources/assets/voicings/voicings.json`: contain references to `voicingId`, which has *V100* and *V101* like the one captured
1. `setVoicing(Voicing.V100());` is called when `setFactoryReset` is called from `sources\com\libratone\p009v3\model\LSSDPNode.java`
1. `public void setVoicing(Voicing voicing)` is defined in `sources\com\libratone\p009v3\model\SpeakerDevice.java`
1. `public void sendMessageString(String str, int i)` is called to send the V-value. This is also defined in `SpeakerDevice.java`
1. It seems to call `sources\com\libratone\p009v3\net\TCPClient.java`.
    1. `public Handler connect(InetAddress inetAddress, Handler handler)`
    1. `sources\com\libratone\p009v3\LibratoneApplication.java` indicate device port? `DEVICE_PORT = 50001;`

### Exploration based on device sniff

Ports `7777` and `3334` are found in `sources\com\libratone\p010 v3\luci\LUCIControl.java` as `LUCI_CONTROL_PORT = 7777;` and `LUCI_NOTIFY_RSK = 3334;`.
`LUCIControl.java` seems to handle the real communication stuff

## System image

*Goal*: Have the system image to explore it.

### System update file

The speaker can update itself, and this is started from main app or from web page (`/cgi?Update`).  
This trigger a HTTP GET request on `http://update.libratone.com.cn/DeltaRelease/DeltaOTABeta/update_mini_beta.json`.  
On the 2020-05-27, this is answered by a `404 Not Found` error code.
