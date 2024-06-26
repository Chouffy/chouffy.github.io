This is a [[docs/How-To/index|How-To]] use another PC (such as a unused laptop) as a 2nd display of another PC. This has been tested with 2 [[Windows]] machine:
1. Chain the 2 PC with [[Universal Serial Bus|Thunderbolt]] (other networking options are possibles, but result may varies)
	1. Configure fixed IP address
	2. Check connection with `ping`
2. On the server that will generate the image:
	1. Setup [[Sunshine]]
	2. Check that the firewall allow inbound connection
	3. Use a "HDMI dummy plug" or a virtual display to create a 2nd screen
		- It could be possible to use the [[Parsec]] virtual display
	4. Configure [[Sunshine]] to use this 2nd screen (`\\.\DISPLAY2` in [[Windows]])
3. On the client that will show the 2nd display:
	1. Setup [[Moonlight]]
	2. Connect to the server via direct IP defined via the [[Universal Serial Bus|Thunderbolt]] link