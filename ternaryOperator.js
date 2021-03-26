// Learning about the ternary operator in the Javascript

'use strict';

let age = Number(prompt("Enter your age", 0));

let isAllowed = (age >= 18) ? true : false;
alert(`The person is allowed to enter? ${ isAllowed }`);