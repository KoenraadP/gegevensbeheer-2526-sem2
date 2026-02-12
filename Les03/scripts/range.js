"use strict";

// html elementen koppelen
let range = document.getElementById("skill");
let number = document.getElementById("skill-number");

// input event koppelen aan range
range.addEventListener("input", function(){
    // waarde van range plaatsen in number
    number.textContent = range.value;
})