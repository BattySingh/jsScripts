// Take input from user and if Admin is typed then prompt for password, if nothing is inputted, then display cancelled, if some other text is inputted, then

'use strict';

let userName = prompt("Enter your Username");

if (userName == "Admin") {
  prompt("Enter the password");
  alert("You are in");
} else if (userName == "") {
  alert("Cancelled");
} else {
  alert("I don't know you");
}