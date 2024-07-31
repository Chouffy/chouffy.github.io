---
aliases: JS
---
Is a [[programming language]] that is core of [[Web]].
## Overview
- Case-sensitive
- Whitespace insensitive
	- `fetch (something)` ===  `fetch(something)`
	- New Line can be input everywhere
- Semi-colons
	- Mandatory when it's not clear for the language where a new statement starts (example: no new line)
	- Much better to have them everywhere
	- Avoid for `if, else, for, while, function`
	- Put it on `do {} while {};` or inside the arg of `for` loop
- Usage
	- Inline `<script type="text/javascript"> ~ </script> `
	- External: `<script src="script.js"></script>` with `script.js` the external file
## Syntax
- Comments
	- `//` single line comment
	- `/*` to comment until `*/`
- Variable creation with `var`
	- Scoped to the function body
	- `var name = "Bob";` to create a string variable `name`
		- Single or Double quote doesn't matter, but needs to be consistent
	- `var i = 0;` to create an integer `i`
	- `var answer = true` to create a boolean
		- `true` isn't in quoted
	- Variable creation with a [[#Truthy and Falsy]] short circuit evaluation: `let defaultName = username || 'Stranger'; // username if defined, Stranger otherwise`
- Variable creation with `let`
	- Introduced in ES6
	- Scoped to the immediate enclosing block denoted with `{ }`
- Constant variable creation with `const`
	- Must have a value defined at declaration, cannot be changed
- Variable naming
	- Cannot start with number
	- Don't use reserved keywords like `case, var`, full list [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)
	- Use `camelCase` and are case sensitive
	- Don't use long variables names
	- Put the data type at the end of the variable: `personCount, personList, personObj`
### `var` vs `let`
- [Good answer on StackOverflow](https://stackoverflow.com/a/11444416)
- Scoping difference
```js
function run() {
  var foo = "Foo";
  let bar = "Bar";

  console.log(foo, bar); // Foo Bar

  {
    var moo = "Mooo"
    let baz = "Bazz";
    console.log(moo, baz); // Mooo Bazz
  }

  console.log(moo); // Mooo
  console.log(baz); // ReferenceError
}

run();
```
- Hoisting (great [blog](https://dev.to/godcrampy/the-secret-of-hoisting-in-javascript) on it)
	- `var` is hoisted and initialized, will return `undefined` before the declaration statement is reach
	- `let` is hoisted but not initialized, will return `ReferenceError`
- Global object property
	- `var` create a property on the global object but not `let`
- Redeclaration
	- In strict mode, `let` can be re-declared
### Get a value from Web browser
- In the [[HTML]]: `<input type="text" id="input" value="">`
- In the JS: `const inputField = document.querySelector('#input');`
## Operations
### Mathematics
- `+` or `-`
	- `++i` or `i++` will add 1 to `i`; same for `--i` or `i--`
		- Prefix: `++i` → `++` is run "before" `i`, which have an impact
	- `b += 2` will add 2 to `b`
- `*` or `/`
- `%`, Modulo, remainder of a division
- Spaces like `(a + b)` is for readability
- `()` to change priority
### String
- `a + b` to concatenate content of string `a` and `b`
- `\'` escape character to avoid interpreting `'` as quote, and same for `\"`
- `\n` new line
- `\t` tab
- `\\` backslash (that is different than `/` forward slash)
#### String interpolation
- Template literal is wrapped by backticks
- Placeholder is like `${placeHolder}`, `${someArray[0]` or `${await placeHolder}` 
```js
const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.
```
### Comparaison operators
- `a < b`, `a <= b`, `a == b`, `a != b`, `a >= b`, `a > b` gives back a boolean
	- ⚠️ `a = b` is assigning `b` to `a`
- Because of [[Loosely-typed Language]], it can compare strings (`'3'`) to integer (`3`) and gives the correct result
	- `a === b` to check if `a` matches `b` value *and* data type (identity operator) and `!==` inverse
### Boolean operators
- `a < b && b < c`: *and*, both must be true
- `b > a || b > c`: *or*, either must be true
- `!varBool`: *not* or *negate*, must be false
## Conditions & Loops
### If
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
```
#### Ternary operator
```js
var valveOpen = true;
var openStatusString = (valveOpen) ? 'open' : 'closed';
//                     (condition)   (true)    (false)
valvePosition > 30 ? 'High pressure' : 'Low pressure';
```
### Switch
```js
var level = 5; // works with string or integer
var message = '';

switch (level) {
  case 0: // works also with case 'some text':
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
    break;
}
```
### For
```js
for (let i = 0; i <= 5; i++) {
//   ^- initialization of the iterator variable, don't forget var!
//              ^- comparaison
//                     ^- increment (after work)
  // do the work (done before increment)
  // use break if necessary
}
```
#### Array looping
```js
const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}
```
#### Nested loops
```js
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}
```
### For In
- Loops for [[#Objects]]
```js
let spaceship = {
  crew: {
    captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
    },
    'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
    }
  }
}; 

for (let crewMember in spaceship.crew) { // let crewMember → Copy the value, no reference!
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
  // Returns "captain: Lily"
  //         "chief officer: Dan"
}

```
### While
```js
let i = 0;
let done = false;
while (!done) { // while expect `true` to go inside the loop
  if (i < 5) {
    ++i;
    continue; // re-evaluate the while loop
  }
  if (i == 5)
    break; // get out of the while loop
}
```
### Do While
```js
// Execute the loop before comparaison
let i = 0;
do { // execute
  // do something
  // use break as necessary
  ++i;
} while (i < 5); // evaluate - don't forget the ; at the end
```
## Data Type
- [[Loosely-typed Language]]
- `typeof i` to print type of `i`
- Fundamental data type
	- Number, with or without decimals: `2` or `41.1` without quotes
	- BigInt, any number greater than 253-1 or less than -(253-1): `1234567890123456n`
	- String: group of characters surrounded by `'` or `"`
	- Boolean: `true` / `false` without quotes
	- Null: intentional absence of value, `null` without quotes
	- Undefined: declared variable which lacks a value (≠ than Null): `undefined` without quotes
	- Symbol: unique identifiers
	- Object: collection of related data like `{"color":"red"}`
- Other data type
	- array: `[1,2,["a","b"]]`

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
```
#### Truthy and Falsy
- List of falsy (evaluate to `false`):
	- `0`
	- Empty strings like `""` and `''`
	- `null`
	- `undefined`
	- `NaN`: not a number
```js
// Boolean with string //
// Defined string will return `true`, `false` otherwis
var string1;
var string1Bool = (string1) ? true : false; // return false
var string2 = null;
var string2Bool = (string1) ? true : false; // return false
var string3 = 'Hello, world!';
var string3Bool = (string1) ? true : false; // return true

// Variable short-circuit evaluation for creation
let username = '';
let defaultName = username || 'Stranger'; // username if defined, Stranger otherwise
```
### Array
- `let`, `var`, `const` can be used for declaration
	- With `const`, variables cannot be reassigned but remains mutable: contant can be changed
- List of possible methods: [Codecademy](https://www.codecademy.com/resources/docs/javascript/arrays)
```js
// Creation
let fruits = ["Apples", "Oranges"];

// Read (non-mutating)
fruits[0]; // data at index 0, out of band index will return undefined
fruits.length; // lenght of an array
fruits.split("'"); //split a string into an array with ' delimiter
fruits.slice(first, last+1); // Export array from first index to last index

// Update
fruits[0] = "New Apple"; // Replace an item
fruits.push("Banana","Pineapple"); // Add an item at the end of the array
fruits.pop(); // Remove the last item at the end of the array
// Other used methods: .join, .splice, .shift, .unshift, .concat
```
#### Nested Array
```js
const nestedArr = [[1], [2, 3]];
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2
```
#### Advanced
```js
// Transpose an array
array[0].map((_, colIndex) => array.map(row => row[colIndex]))
```
### Objects
- See also [[#Reference in Objects]]
- See also [[#For In]] for looping
- If key starts with `_keyName`, it is private and shouldn't be altered
#### Property
- Unordered data
	- Organized in key-value pairs like `key : 'value'`
	- Value can be in any [[#Data Type]]
- Non defined property will return `undefined`
- Objects are mutable → can be modified after creation
	- Variable is replaced if the property already exist
	- Variable is created if property doesn't exist
```js
// Creation
let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver' // Quotes on key can be omited if no special characters are used
};

// Usage
spaceship.color;
spaceship['color']; // same but variables can be used instead of fixed text
let colorShip = spaceship.color; // Copy the content, no reference passing
spaceship.color = 'grey'; // update the value as it is a reference

// Delete
delete spaceship.color;
```
##### Dealing with `const`
- `const` objects cannot be reassigned but can be mutated
```js
const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'
```
#### Methods
- If data stored in an object is a function, it's a method
```js
const alienShip = {
  //invade: function () { // pre-ES6 form
  invade () { // post ES6
    console.log('Hello we are Aliens!')
  }
};

alienShip.invade();
```
#### Nested Objects
- Objects can be defined within objects
```js
const spaceship = {
     telescope: {
        yearBuilt: 2018
     },
    crew: {
        captain: { 
            name: 'Sandra', 
            encourageTeam() { console.log('We got this!') } 
         },
		'co pilot': {
			name: 'Bob'
		}
    },
	passengers: [
	    {
	      name: 'Matthieu'
	    }
	],
}; 

spaceship.crew['co pilot'].name;
spaceship.passengers[0].name; // array instead of key-value pairs - allow iteration
```
#### This
- `this` reference the calling object
- Unavailable when using [[#Arrow Function]]
```js
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
    return `I like ${this.dietType}.`
  },
  eat: () => {
    return `I like ${this.dietType}.` // this is undefined in arrow functions
  }
};

goat.diet(); 
// Output: herbivore
```
#### Getter
- Methods to return the internal property of an object
- Starts with `get` then `functName() {…}`
- Properties cannot have the same name than the getter/setter
	- Workaround: use underscore in `_propertyName`
- Use like a property like `objName.property`, without `()`
```js
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

// To call the getter method: 
person.fullName; // 'John Doe'
```
#### Setter
- Methods to reassign value of existing property within an object
- Defined using `set` them `functName() {…}`
- Use it like a value assignment like `newObj.newAge = 20;`
```js
const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};
person.age = 20;
```
## Functions
- Are also [[#Objects & Methods|Objects]], hence can have properties & methods
	- `exampleFunction.name` to print the name of the function as it was created ([Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name))
### Scope
- Global scope: variables declared outside of blocks `{ … }`
- Local scope: variables declared inside of block
### Function declaration
- Loads before any code is executed
```js
// Simple function
function sayHi() {
  // Do stuff
  var c = 0; // scope: local function
  // return value is `undefined`
}
sayHi(); // call sayHi

// Function with 2 parameters with one default
function toCelsius(fahrenheit, param2 = 'default value') {
    return (5 / 9) * (fahrenheit - 32);
}
var c = toCelsius(70, parmX);

```
#### Function rename
- The below works because of [[#Reference passing]]
```js
// veryLongFunctionName() is defined before
const busy = veryLongFunctionName;
busy();
busy.name; // Print the original name

const busy = veryLongFunctionName(); // won't work, as we are assigning the value, not the function itself
```
### Helper functions
- Function called within a function
```js
function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59
```
### Function Expression / Anonymous Function
- Loads only when the interpreter reach the line
- Common practice to use `const`
- Aren't hoisted so need to be declared before use
	- But have a copy of the local variables from the scope where they are defined
- Can be used right away, where function declaration need to parse the whole script
- Can be used as an argument to another function, while function declaration not
```js
// Declare an anonymous function
const calculateArea = function (width, height) {
	return width * height;
}
// Use it
calculateArea(5,4);
```
#### Arrow Function
- In ES6+
```js
// pre-ES6
var greeting = function() {
  console.log('Hello World!');  
};

// ES6
// zero parameters, no braces (implicit return)
const greeting = () => console.log('Hello World'); 
// one parameters, no braces (implicit return)
const someFunct = param1 => giveBack.something; 
// 2+ parameters
const otherFunct = (param1, param2) => { /* do something;*/ return abc;}; 
```
### Immediately-Invoked Function Expression
```js
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
### High-Order & Callback function
- A Higher-Order function is a function that
	- Accepts functions as parameters
		- Such passed function is called callback function
	- Return a function
	- or both
```js
const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`
}
 
const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}

higherOrderFunc(anotherFunc);
```
### Factory Function
- Function to create objects
```js
// Define
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name, // long version
    age, // property value shorthand (destructuring)
    energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};

// Use
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'
```
### Destructured Assignment
- Save time when referring data inside an object
- Use it with `const { objectKey } = object` will assign to `objectKey` the value of `object.objectKey`
```js
// Declaration
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

// Usual way of doing it
const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 

// Destructured Assignment
const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'

// Even works with propery of an object!
const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'

// Pass the whole object too at the same time!
const { preferences } = vampire;
console.log(preferences.day); // Works too! Print 'stay inside'
```
### Function Chaining
- Example in [[#Promises]] ![[#^be854a]]
### Promises
- Object that represent the eventual outcome of an asynchronous operation
- Can have state
	- `pending`: initial state, operation isn't completed yet
	- `fulfilled`: operation successful, resolved value available
	- `rejected`: operation failed, failure reason available
- Default function
	- `resolve()` change status to Fulfilled
	- `reject()` change status to Rejected
- Simple example
```js
const executorFunction = (resolve, reject) => {
 if (someCondition) {
     resolve('I resolved!');
 } else {
     reject('I rejected!'); 
 }
}
const myFirstPromise = new Promise(executorFunction);
```
- Example with [[Node.js#^98fbc5]] `setTimeout()` and with a function that wrap around the Promise
```js
const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(( ) => {resolve('I resolved!')}, 1000);
  });
};

const prom = returnPromiseFunction();
```
#### Then
- `.then()` handle the result of a promise (both success & failure)
```js
let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});

// Sucess handler function
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

// Failure handler function
const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

prom.then(handleSuccess, handleFailure);
```
- `.then()` can be chained for a cleaner code
```js
prom
 .then((resolvedValue) => {
   console.log(resolvedValue);
 })
 .then(null, (rejectionReason) => {
   console.log(rejectionReason);
 });
```

	^be854a
#### Catch
- `.catch()` can be used instead of using `.then(null, handleFailure)`
```js
prom
 .then((resolvedValue) => {
   console.log(resolvedValue);
 })
 .catch((rejectionReason) => {
   console.log(rejectionReason);
 });
```
#### Composition
- Chain promises together in a structured way
- Do use composition, don't use function nesting
- Do a `return` at every promise, this doesn't throw an error
```js
firstPromiseFunction()
.then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal) => {
  console.log(secondResolveVal);
});
```
#### Promise.all()
- Accept an array of promises and returns a single promise
- If every promise resolves, returns an array with resolve value from each promises
- If any promise rejects, fail fast: immediately reject with the reason that promise rejected
```js
let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);

myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });

```
### Async Await
- Introduced in ES8
- Returns a [[#Promises]], so `then` and `catch` are available
	- If nothing is returned from the function, return a promise with value `undefined`
	- If a non-promise value is returned from the function, return a promise resolved to that value
	- If a promise is returned from the function, return that promise
#### Async
```js
// Function declaration
async function myFunc() {
  // Function body here
  return 'something';
};

// Function expression
const myFunc = async (param1, param2) => {
// const myFunc = async param1 => { // with one parameter
  // Function body here
  return 'something';
};

myFunc();
```
#### Await
- Returns resolved value of a promise
- Await halt execution of the `async` function
- Can only be used in `async` function
- Logic reads like synchronous code
```js
async function asyncFuncExample(){
  let resolvedValue = await myPromise();
  console.log(resolvedValue);
}

asyncFuncExample(); // Prints: I am resolved now!
```
#### Chained Await
- Code just like in synchronous
```js
async function asyncAwaitVersion() {
  let firstValue = await returnsFirstPromise();
  console.log(firstValue);
  let secondValue = await returnsSecondPromise(firstValue);
  console.log(secondValue);
}
```
#### Try Catch for Await
- Catch synchronous & async errors
- See [[#Try Catch]]
```js
async function usingTryCatch() {
 try {
   let resolveValue = await asyncFunction('thing that will fail');
   let secondValue = await secondAsyncFunction(resolveValue);
 } catch (err) {
   // Catches any errors in the try block
   console.log(err);
 }
}

usingTryCatch();
```
- As Async are still promises, we can use the native [[#Catch]]
```js
async function usingPromiseCatch() {
   let resolveValue = await asyncFunction('thing that will fail');
}

let rejectedPromise = usingPromiseCatch();
rejectedPromise.catch((rejectValue) => {
console.log(rejectValue);
})
```
#### Parallel/Concurrent Await
- Don't use await in the variable declaration, but when using it
```js
async function waiting() {
 const firstValue = await firstAsyncThing();
 const secondValue = await secondAsyncThing();
 console.log(firstValue, secondValue);
}

async function concurrent() {
 const firstPromise = firstAsyncThing();
 const secondPromise = secondAsyncThing();
 console.log(await firstPromise, await secondPromise);
 console.log(`This: ${await firstPromise} is the 1st promise`)
}
```
#### Await Promise.all
- Similar to [[#Promise.all()]]
```js
async function asyncPromAll() {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
  for (let i = 0; i<resultArray.length; i++){
    console.log(resultArray[i]); 
  }
}
```
### Requests
- [Codecademy](https://www.codecademy.com/resources/docs/javascript/requests) Documentation
#### Synchronous Fetch() GET
- Create a request object, send it to the API and return a [[#Promises]]
- Documentation on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/fetch) 
```js
fetch('https://api-to-call.com/endpoint')
.then(response => {
	if(reponse.ok) { return response.json(); } // convert response to JSON if OK is truthy
	throw new Error('Request failed!');
}, networkError => console.log(networkError.message)
).then(jsonResponse => {
	// do something
});
```
#### Synchronous Fetch() POST
```js
fetch('https://api-to-call.com/endpoint', {
	method: 'POST',
	body: JSON.stringify({id: '200'})
})
.then(response => {
	if(reponse.ok) { return response.json(); } // convert response to JSON if OK is truthy
	throw new Error('Request failed!');
}, networkError => console.log(networkError.message) // no ;
).then(jsonResponse => {
	// do something
});
```
#### Async Fetch() Get
```js
const getData = async () => {
	try {
		const response = await fetch('http://endpoint');
		if(reponse.ok) {
			const jsonResponse = await reponse.json();
			// code to execute with jsonResponse
		}
		throw new Error('Request failed!');
	} catch (error) {
		console.log(error);
	}
}
```
#### Async Fetch() POST
```js
const getData = async () => {
	try {
		const response = await fetch('http://endpoint', {
			method: 'POST',
			body: JSON.stringify({id: 200})
			header: {
			  'Content-type': 'application/json',
			  'apikey': apiKey // apiKey is a variable
			}
		});
		if(reponse.ok) {
			const jsonResponse = await reponse.json();
			// code to execute with jsonResponse
		}
		throw new Error('Request failed!');
	} catch (error) {
		console.log(error);
	}
}
```
### [[JavaScript Object Notation|JSON]] in [[JavaScript]]
- Use `JSON.stringify` to make a string our of data - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) documentation
## Objects & Methods
- Methods are objects properties containing a function definition
	- [Codecademy  definition](https://www.codecademy.com/resources/docs/javascript/methods?page_ref=catalog)
```js
const car = {
  make: 'Honda',
  model: 'Civic',
  year: 2019,
  printOut: function () {
    console.log(this.year + ' ' + this.make + ' ' + this.model);
  },
};

car.printOut();
// Output: 2019 Honda Civic

// Referenced as a property
var method = car.printOut;

car.year = 2020;

method();
// Output: undefined undefined undefined;
// 'this' is being referenced outside an object context
// can be fixed by explicitly setting the object context with 'bind()'

method = car.printOut.bind(car);

method();
// Output: 2020 Honda Civic
```
### Built-in Objects methods
- List of Object methods on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods)
- `const arrayKey = Object.keys(objName)` return an array of all keys
- `const arrayName = Object.entries(objName)` return an array of keys & values
- `const returnedArray = Object.assign(target, source)` copies all properties from source to target
### Reference passing
- Variables are passed by reference
- A mutation of a global variable inside a function will be registered at the global variable
- Even if the variable name is different
- No reference on Object copy like `let obj = otherObj;`
#### Reference in Objects
- Call by sharing is used
- Replacement of Object aren't passed along
```js
function replace(ref) {
    ref = {};           // this code does _not_ affect the object passed
}

function update(ref) {
    ref.key = 'newvalue';  // this code _does_ affect the _contents_ of the object
}

var a = { key: 'value' };
replace(a);  // a still has its original value - it's unmodfied
update(a);   // the _contents_ of 'a' are changed

```
- Update of the Object are passed along
```js
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
};

let remotelyDisable = obj => {
	obj.disabled = true;
}

greenEnergy(spaceship); // update the spaceship object
remotelyDisable(spaceship); // update the spaceship object too
```
### Data Type
#### Number
- [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
#### String
- [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
```js
'This is a string'.length // Number of characters
'This is a string'.toUpperCase(); // Transform
'This is a string'.startsWith('T'); // Test to true
'  This is a string  '.trim(); // Remove whitespace
```
#### Array
##### Iterators
- For looping, instead of using [[#For]], iteration methods / iterators can be used
- Iterators: methods to manipulate elements and return values
- Full list [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)
###### ForEach
- Execute the same code for each array element
```js
onst artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
// Long version
artists.forEach (
	function(artist) {
		console.log(artist + ' is one of my favorite artists.');
	}
)
// Short version
artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

// artists is the identifier
// forEach is the iterator
// (...) is the callback function
```
###### Map
- Pass each element of an array inside a defined function
- Returns a new array
```js
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(number => {
  return number * number;
});
console.log(squareNumbers);
```
###### Filter
- Test each element if they match the function, and copy them to a new array if `true`
- Returns a new array
```js
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});
console.log(onlyNumbers);
```
###### FindIndex
- Find the location of an element in the array
- Returns the first element that evaluate to `true`
- Returns `-1` if nothing is found
```js
const jumbledNums = [123, 25, 78, 5, 9]; 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
}); // lessThanTen returns 3
```
###### Reduce
- Returns a single value after iterating through the array
```js
const numbers = [1, 2, 4, 10];
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100) // second argument of the reduce() function, which is the initial value
console.log(summedNums) // Output: 17
```
### Interaction
```js
console.log(5); // print 5 to console
console.log(varA, varB) // print the content of varA, space, varB
```
### Mathematics
- [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
```js
Math.random(); // Random number between 0 (inclusive) and 1 (exclusive)
Math.floor(); // Round to nearest whole number
```
### Error (Object)
- Useful to convey non-standard errors
#### Create an error
- Will continue the program
```js
console.log(Error('Your password is too weak.'));
console.log(new Error('Your password is too weak.'));
// Prints: Error: Your password is too weak.
```
#### Throw an error
- Will halt the program
```js
throw Error('Something wrong happened');
// Error: Something wrong happened

console.log('This will never run');
```
#### Try Catch
- If an error is `throw`, `catch` will execute
```js
try {
  throw Error('This error will get caught');
  // `throw` isn't mandatory, `catch` also works with built-in JS
} catch (e) {
  console.log(e);
}
// Prints: This error will get caught

console.log('The thrown error that was caught in the try...catch statement!');
// Prints: 'The thrown error that was caught in the try...catch statement!'
```
## Classes
- Quickly produce similar Object
### Constructor
- Is a function called every time a new instance of a class
- Must use `this` to define properties
```js
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
}
```
### Methods
- Similar as [[#Objects]] but there cannot be commas `,` between methods
```js
class Dog {
  constructor(name) {
	  // see above
  }

  // Getter
  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }

  // Method
  incrementBehavior() {
    this._behavior++;
  }
}
```
### Instance
- Instance contains the property names & method of the class, but with unique property value
```js
const halley = new Dog('Halley'); // Create new Dog instance
console.log(halley.name); // Log the name value saved to halley
// Output: 'Halley'
```
### Methods calls
```js
let nikko = new Dog('Nikko'); // Create dog named Nikko
nikko.incrementBehavior(); // Add 1 to nikko instance's behavior
let bradford = new Dog('Bradford'); // Create dog name Bradford
console.log(nikko.behavior); // Logs 1 to the console
console.log(bradford.behavior); // Logs 0 to the console
```
### Class inheritance
- (sub)Class can inherit from parent class (the superclass)
- All parent properties & methods are available to the subclass
```js
// let Animal a class defined above, similar to Dog
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name); // Call the constructor of the parent class with same set of parameter than defined in the parent constructor
    this._usesLitter = usesLitter;
  }
  
  get usesLitter() {
    return this._usesLitter;
  }
}
```
### Static Methods
- Methods that can be called at the class level, but not in individual instances
- Example: `Date.now()`
```js
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
    
  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
} 

// Usage
console.log(Animal.generateName()); // returns a name
const tyson = new Animal('Tyson'); 
tyson.generateName(); // TypeError 
```
## Runtime Environment
- [[Web]] browser like [[Mozilla Firefox|Firefox]] or [[Chromium]]
### [[Node.js]]
* [Install NodeJS on Ubuntu](https://github.com/nodesource/distributions/blob/master/README.md)
## Coding errors
- Error line can be misplaced due to parsing
### Error Types
- `SyntaxError`: a typo create a code that cannot be interpreted by the compiler
- `ReferenceError`: the variable doesn't exist
- `TypeError`: Operation requested on the wrong type
- More on the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
### Debugging with console log
- Print out all starting variables, existing values, arguments
- At the next piece of logic, print out updated values to check them
## Modules
- Pieces of scripts that can be reused
- Import
	- See [[Node.js#Import JavaScript Modules]]
	- ES6 uses `import`/`export` syntax
		- See [Codecademy course](https://www.codecademy.com/courses/learn-intermediate-javascript/articles/implementing-modules-using-es-6-syntax)
## Concepts
### Currying
- See [Codecademy - Currying in JavaScript](https://www.codecademy.com/courses/learn-intermediate-javascript/articles/javascript-currying)
### Design Patterns
- See [Codecademy - Design Patterns](https://www.codecademy.com/courses/learn-intermediate-javascript/articles/javascript-design-patterns)
- 3 purposes-built categories:
- Creational (or instanciated)
	- [[#Factory Function]]
	- Singleton
		- 1 instance of a [[#Classes|class]]
		- Shared ressource with a single point of access
		- In constructor, check for existing class and return `this` if already exist
	- Abstract Factory
	- Constructor
	- Prototype
- Structural
	- *Relationship between objects*
	- Facade
		- Single class that takes all of the complexity of the subsystem and hide it
		- Used in microservices
	- Proxy
		- Protect access to an object by acting as a placeholder that intercept and redefine the operation
		- Built-in handler called `traps` to call the target object
		- Used alongside with `Reflect` object
	- Flyweight
	- Adapter
	- Decorator
	- Composite
	- Bridge
- Behavioral
	- *Messages between unrelated objects by delegating how objects can communicate, and encapsulate communication behavior to decouple messages between senders & receivers*
	- Iterator
	- Mediator
		- Central interface to encapsulate how different parts of code can communicate with each other
		- Prevents direct relationship between classes
	- Observer
		- 1+ object can "subscribe" to the changes made to another object
	- Visitor
## Reference
- ServiceNow - Learn Javascript on the Now Platform
- [Codecademy - Learn JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)
- [Codecademy - Learn Intermediate JavaScript](https://www.codecademy.com/courses/learn-intermediate-javascript/)
- [Youtube -  What the heck is the event loop anyway? | Philip Roberts | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ)