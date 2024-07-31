---
aliases:
  - JSON
---
Is a ~[[programming language]] used in [[JavaScript]] and in [[Web Service]] (but not only) to exchange data. It's an alternative to [[XML]]
## Notes
- Serializes and passes data between server & client
- `[]` denote a ordered list of value (array)
	- `[value, value, value]`
- `{}` denote a collection of name/value pairs
	- `(object) {name: value, name: value}`
- Beware of comma `,`  between name/value pairs
```json
// Define manually
[
	{
		"number":"REST 001",
		"short_description":"hi there",
		"state":"1"
	},{
		"number":"REST 002"
	}
]

// Define in loops
var incArray = []; // Empty array
while(something) {
	// Build the array of objects
	var incDetails = {};
	incDetails.number = something.number.toString();
	incDetails.priority = something.priority.getDisplayValue();
	incDetails.shortDesc = something.short_description.toString();
	incArray.push(incDetails);
}
```