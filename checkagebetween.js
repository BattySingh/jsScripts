// Taking input from user and checking if there age is between 14 and 90

'use strict';

let age = Number(prompt("Enter your age", 0));

if ( (age >= 14) && (age <= 90) ) {
  alert("You are of age");
} else {
  alert("You are either too small or too old.");
}