// Taking a number as an input from user and greet him accordingly

'use strict';

// Take time from user
let ti = Number(prompt("Enter the time", 0));

// use conditions to check time and greet morning, afternoon, evening, night
if (ti >= 4 && ti <= 12) {
  alert("Good Morning");
} else if (ti > 12 && ti <= 16) {
  alert("Good Afternoon");
} else if (ti > 16 && ti <= 20) {
  alert("Good Evening");
} else {
  alert("Good Night");
}