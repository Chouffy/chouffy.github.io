---
aliases: JS
---
Is a [[programming language]] that is core of [[Web]].
## Setup
* [Install NodeJS on Ubuntu](https://github.com/nodesource/distributions/blob/master/README.md)
## Language
- Semi-colons
	- Mandatory when it's not clear for the language where a new statement starts (example: no new line)
	- Much better to have them everywhere
	- Avoid for `if, else, for, while, function`
	- Put it on `do {} while {};` or inside the arg of `for` loop
### Syntax
- Comments
	- `//` single line comment
	- `/*` to comment until `*/`
- Variable creation
	- `var name = "Bob";` to create a string variable `name`
		- Single or Double quote doesn't matter, but needs to be consistent
	- `var i = 0;` to create an integer `i`
	- `var answer = true` to create a boolean
		- `true` isn't in quoted
	- `var` is required
	- Other data types
		- array: `[1,2,["a","b"]]`
		- object: `{"color":"red"}`
- Variable naming
	- Don't use reserved words like `case, var`
	- Use `camelCase`
	- Don't use long variables names
	- Put the data type at the end of the variable: `personCount, personList, personObj`
### Operations
#### Mathematics
- `+` or `-`
	- `++i` or `i++` will add 1 to `i`; same for `--i` or `i--`
		- Prefix: `++i` → `++` is run "before" `i`, which have an impact
	- `b += 2` will add 2 to `b`
- `*` or `/`
- `%`, Modulo, remainder of a division
- Spaces like `(a + b)` is for readability
- `()` to change priority
#### String
- `a + b` to concatenate content of string `a` and `b`
- `\'` escape character to avoid interpreting `'` as quote, and same for `\"`
- `\n` new line
- `\t` tab
- `\\` backslash (that is different than `/` forward slash)
#### Comparaison operators
- `a < b`, `a <= b`, `a == b`, `a != b`, `a >= b`, `a > b` gives back a boolean
	- ⚠️ `a = b` is assigning `b` to `a`
- Because of [[Loosely-typed Language]], it can compare strings (`'3'`) to integer (`3`) and gives the correct result
	- `a === b` to check if `a` matches `b` value *and* data type
#### Boolean operators
- `a < b && b < c`: *and*, both must be true
- `b > a || b > c`: *or*, either must be true
- `!varBool`: *invert*, must be false
##### If
```js
// Single-line - the next statement after 'if' is run
if (a < b) console.log('Hi!'); 

// Short-handed
var conditionVar = a < b;
if (conditionVar) console.log('Hi!'); 

// Multi-line
if (a < b) {
	console.log('Hi');
	console.log('there');
}

// If & Else
if (a < b) {
	// stuff
} else if (a > b) {
	// some stuff
} else {
	// other stuff
}

// Multiple ifs
if (a < b) {
	if (b < c) {
		// Do x
	} else {
		// Do something within the 2nd if - works because of {}
	}
} else
	// Do something within the 1st if
}

// Ternary operator
var valveOpen = true;
var openStatusString = (valveOpen) ? 'open' : 'closed';
//                     (condition)   (true)    (false)
```
##### Switch
```js
var level = 5; // works with string or integer
var message = '';

switch (level) {
  case 0:
    message = 'Empty';
    break;

  case 1: // Nothing defined → fall through to case 2
  case 2:
    message = 'Low';
    break;

  case 3: 
    message = 'Medium';
    // Missing break → fall through to next sentence
  case 4:
    message = 'High';
    break;

  default: // Default, doesn't need break
    message = 'Uh-oh!';
}
```
##### While
```js
var i = 0;
var done = false;
while (!done) { // while expect `true` to go inside the loop
  if (i < 5) {
    ++i;
    continue; // re-evaluate the while loop
  }
  if (i == 5)
    break; // get out of the while loop
}
```
##### For
```js
for (var i = 0; i < 5; i++) {
//   ^- initialization, don't forget var!
//              ^- comparaison
//                     ^- increment (after work)
  // do the work (done before increment)
}
```
##### Do While
```js
// Execute the loop before comparaison
var i = 0;
do { // execute
  // do something
  ++i;
} while (i < 5); // evaluate
```
##### Nested Loop
```js
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 3; j++) { // different variable
    // do something
  }
}
```
### Array
Transpose an array:
```js
array = [ ["a", "b"],["c", "d"]]
array[0].map((_, colIndex) => array.map(row => row[colIndex]))
```
## Data Type
- [[Loosely-typed Language]]
- `typeof i` to print type of `i`
- Available data type
	- boolean: `true` / `false`
	- array: `[1,2,["a","b"]]`
	- object: `{"color":"red"}`
### String
```js
var someString = 'Hi!'; // Creation
var someInt = parseInt(someString); // Convert string to integer
var someFloat = parseFloat(someString); // Convert string to float
```
### Integer
```js
var i = 5; // Creation
var iStr = i.toString(); // Convert integer to a string
```
### Boolean
```js
var someBool = true;
var isOpen = (isOpenString == 'true') ? true : false; // convert string to bool using ternary operator

// Boolean with integer //
// Integer of `0` will return `true`, `false` otherwise
var int1 = 0;
var int1Bool = (i) ? true : false; // returns true
var int2 = 10;
var int2Bool = (i) ? true : false; // returns false

// Boolean with string //
// Defined string will return `true`, `false` otherwis
var string1;
var string1Bool = (string1) ? true : false; // return false
var string2 = null;
var string2Bool = (string1) ? true : false; // return false
var string3 = 'Hello, world!';
var string3Bool = (string1) ? true : false; // return true

```
## Functions
```js
// Simple function
function sayHi() {
  // Do stuff
  var c = 0; // scope: local function
}
sayHi(); // call sayHi

// Function with parameter
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}
var c = toCelsius(70);

// Anonymous self-executing function
var i = 20;
(function() {
  i = 10; // warning, forgot the var → refer to the i above
  var foo = false ; 
}());

// Named self-executing function
(function main() {
  var userName = "Sean";
    console.log(name());
    function name() {
      return userName;
    }
  }
)();
```
### Generate chars
Use [Chart.js](https://www.chartjs.org/docs/latest/)
## Error handling
- Error line can be misplaced due to parsing
## Reference
- ServiceNow - Learn Javascript on the Now Platform