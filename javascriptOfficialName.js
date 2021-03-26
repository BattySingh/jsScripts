// Asking user about javascript's official name and telling them if they are right or wrong

'use strict';

let officialName = prompt("Enter Javascript's official name", "do not know");

if (officialName == "ECMAScript") {
  alert("Right!");
} else {
  alert("You don't know? ECMAScript");
}