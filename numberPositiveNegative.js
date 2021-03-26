// Taking number as an input from the user and checking if it is positive, negative or zero

'use strict';

let num = Number(prompt("Enter the number", 0));

if (num > 0) {
  alert(1);
} else if (num == 0) {
  alert(0);
} else if (num < 0) {
  alert(-1);
} else {
  alert("That does not looks like a number");
}