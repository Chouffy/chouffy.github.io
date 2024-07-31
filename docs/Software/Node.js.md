Is a [[server]] [[Software]] that interprets [[JavaScript]]
## Setup
### [[Windows]] Portable
- Download the latest ZIP version from the [official site](https://nodejs.org/en/download) and unzip somewhere
- Open a terminal in the unzipped directory
- Add the executable to the path: `set PATH=%PATH%;D:\Apps\Applications\NodeJS\bin`
## Useful functions
- Time management
	- `setTimeout(callbackFunction, delayInMilliseconds)` ^98fbc5
		- `callbackFunction` is called without `()` as we need the actual function, not the value out of it
		- `delayInMilliseconds` is a *minimum time*, not the exact time
## Usage
### Define a callable script
- Define a module
```js
/* celsius-to-fahrenheit.js */
function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
}

const celsiusInput = process.argv[2]; // Get the 3rd input from the argument list
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);

console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);
```
- Use it on the command line `node celsius-to-fahrenheit.js 100`
### Import [[JavaScript#Modules]]
- See [Codecademy course](https://www.codecademy.com/courses/learn-intermediate-javascript/articles/implementing-modules-in-node)
- Define a module
```js
/* converters.js */
function celsiusToFahrenheit(celsius) {
  return celsius * (9/5) + 32;
}

module.exports.celsiusToFahrenheit = celsiusToFahrenheit;

module.exports.fahrenheitToCelsius = function(fahrenheit) {
  return (fahrenheit - 32) * (5/9);
};
```
- Use it
```js
/* water-limits.js */
const converters = require('./converters.js');
// it's also possible to be more selective
const { celsiusToFahrenheit } = require('./converters.js');

const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = converters.celsiusToFahrenheit(freezingPointC);
const boilingPointF = converters.celsiusToFahrenheit(boilingPointC);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);
```
