// Using assignment operator to return values

'use strict';

let a = 3;
let b = 3;

let c = 3 - (a = b + 1);
alert(`a: ${ a }`);
alert(`b: ${ b }`);
alert(`c: ${ c }`);