"use strict";
// Not a Number
// NaN

let var1 = "text";
let var2 = "6";
let var3 = 6;
let var4 = "";
let var5 = null; 
let var6 = true;

// isNaN geeft false als het lukt om met Number() het om te zetten naar een cijfer
console.log(var1 + " = " + isNaN(var1)); // true
console.log(var2 + " = " + isNaN(var2)); // true of false
console.log(var3 + " = " + isNaN(var3)); // false
console.log(var4 + " = " + isNaN(var4)); // true 
console.log(var5 + " = " + isNaN(var5)); // true 
console.log(var6 + " = " + isNaN(var6)); // true 

console.log(Number(var4));
console.log(parseInt(var4));
console.log(Number(var6));