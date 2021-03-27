'use strict';

let age = Number(prompt("Enter your age", 0));

if (!( age >= 14 && age <= 90 )) {
  alert("You are not in Age group of 14 and 90");
}

if (-1 || 0) alert('first');
if (-1 && 0) alert('second');
if (null || -1 && 1) alert('third');