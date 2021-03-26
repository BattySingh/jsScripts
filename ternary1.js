// Ternary operator task to take the if conditional and convert it to ternary operator statement

'use strict';

let a = Number(prompt("Enter first number", 0));
let b = Number(prompt("Enter second number", 0));

let result = ( (a + b) < 4 ) ? "Below" : "Over";
alert(result);