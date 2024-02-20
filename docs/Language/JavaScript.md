---
aliases: JS
---
Is a [[programming language]] that is core of [[Web]].
## Setup
* [Install NodeJS on Ubuntu](https://github.com/nodesource/distributions/blob/master/README.md)
## Language
### Syntax
| Command | Action  |
| ------- | ------- |
| `//`    | Comment | 

### Data Types
Types | Content
-|-
boolean | `true` / `false`
number | `123`
string | `"hello"`
array | `[1,2,["a","b"]]`
object | `{"color":"red"}`

### Conversion
* From string to float: `var floatValue = +(val);`
### Array
Transpose an array:
```js
array = [ ["a", "b"],["c", "d"]]
array[0].map((_, colIndex) => array.map(row => row[colIndex]))
```
## Functions
Simple test that return a JSON with true:
```js
if (a === true ){
    return {b} ;
} else if (condition 1 && condition 2) {

} else {
    // do something
}
```
### Logical operators
| Operator | JavaScript |
| -------- | ---------- |
| AND      | `&&`       |
| NOT      | `!`        |
| OR       | `||`       |
| Equal    | `==`           |

### Generate chars
Use [Chart.js](https://www.chartjs.org/docs/latest/)
