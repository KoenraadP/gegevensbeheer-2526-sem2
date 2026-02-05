"use strict";

//#region global variables

// variabelen voor berekening
let number1, number2, result;

// variabelen voor de HTML invoer/uitvoer elementen
let number1Input, number2Input, resultOutput;

// variabelen voor de buttons
let addButton, subtractButton, multiplyButton, divideButton;

//#endregion

//#region main script

// functions uitvoeren
bindElements();
addEvents();

//#endregion

//#region functions

// function om alle HTML elementen te koppelen aan mijn variabelen
function bindElements() {
    // HTML element opzoeken op basis van id en koppelen aan variabele
    number1Input = document.getElementById("number1");
    number2Input = document.getElementById("number2");
    resultOutput = document.getElementById("result");

    addButton = document.getElementById("add");
    subtractButton = document.getElementById("subtract");
    multiplyButton = document.getElementById("multiply");
    divideButton = document.getElementById("divide");
}

// function om eventlisteners toe te voegen aan HTML elementen
function addEvents() {
    // click event toevoegen aan addButton
    addButton.addEventListener("click", function () {
        alert("geklikt!");
    })
}

//#endregion