Is a type of [[Electronic]] that conduct current in one direction.
## Characteristics
Two pins:
- Anode
	- The "input" or "positive side"
	- Marked with a white/black band, or with a long leg
- Cathode
	- The "output"
## Accompanying resistor
A [[Resistor]] is needed in series, otherwise there would be too much current.
In datasheet, you need to locate:
- The diode forward voltage: V<sub>LED</sub>, V<sub>F</sub>
- The diode forward current: I<sub>F</sub>

You can calculate with the following formula based on [[Ohm's Law]] :
$$u=ri \iff r=\frac{u}{i} \iff r=\frac{V_{source}-V_{LED}}{I_{LED}}$$
## Schematic
![[Pasted image 20230403111716.webp]]