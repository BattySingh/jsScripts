// Converting if else if to ternary statement

'use strict';

let login = prompt("Enter your rank");

let message = (login == "Employee") ? "Hello" :
              (login == "Director") ? "Greetings" :
              (login == "") ? "No login" :
              "";

alert(message);