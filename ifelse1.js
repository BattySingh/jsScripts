// Take input from the user and decide whether the person should enter the bar or not

'use strict';

// ask user about there age
let userAge = Number(prompt("What is your age?", 0));

// if users age is greater than 18 then allow the person in the club
if (userAge >= 18) {
  alert("Welcome, you can enter the bar");
}

// if user is below 18, refuse the person
else if (userAge < 18) {
  alert("Oops, you cannot enter the club, KID");
}

// if it is something else then else should run
else {
  alert("You seem to be an alien");
}