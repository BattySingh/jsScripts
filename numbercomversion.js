// Using Number function to convert a string to a number

'use strict';

let myStr = "12321";
alert(`The myStr is: ${ typeof(myStr) }`);
alert(myStr);

// using Number function to convert a string to a number data type
myStr = Number(myStr);
alert(`New myStr is: ${ typeof(myStr) }`);
alert(myStr);

let myBool = true;
alert(`myBool is of type: ${ typeof(myBool) }`);
alert(myBool);

myBool = Number(myBool);
alert(`Final myBool is of type: ${ typeof(myBool) }`);
alert(myBool);