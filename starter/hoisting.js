'use strict';

// Hoisting with Variables
console.log(me);
// console.log(job);
// console.log(1991);

// using variables before declaring them

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Hoisting with functions

console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
