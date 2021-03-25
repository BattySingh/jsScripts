// Convertion of boolean value to string value

'use strict';

// creating a boolean variable
let isMarried = false;

// displaying the data type of the isMarried variable
alert(`Type of isMarried: ${ typeof(isMarried) }`);

// here we are using String function to convert the boolean type to string type
isMarried = String(isMarried);

// displaying the type of data after conversion of variable has been done
alert(`Final type is: ${ typeof(isMarried) }`);