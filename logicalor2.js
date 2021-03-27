'use strict';

alert(1 || 0);                   // returns 1
alert(null || 1);                // returns 1
alert(null || 0 || 1);           // returns 1
alert(undefined || null || 0);   // returns 0