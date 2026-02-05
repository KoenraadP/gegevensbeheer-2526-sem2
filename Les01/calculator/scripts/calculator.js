"use strict";

//#region global variables

// variabelen voor berekening
let number1, number2, result;

// variabelen voor de HTML invoer/uitvoer elementen
let number1Input, number2Input, resultOutput;

// variabelen voor de buttons
let addButton, subtractButton, multiplyButton, divideButton, buttons;

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
    // alle vier de buttons samen in één array opslaan
    buttons = [addButton, subtractButton, multiplyButton, divideButton];
}

// function om eventlisteners toe te voegen aan HTML elementen
function addEvents() {
    // loop die alle buttons uit de buttons array een click event toekent
    buttons.forEach(button => {
        button.addEventListener("click", function (e) {
            // controleren of input 'valid' is
            if (validate(number1Input.value) === true
                && validate(number2Input.value) === true) {
                // cijfers uit input vakken lezen en opslaan in variabelen
                // ook omzetten naar cijfer type anders werkt het optellen niet
                number1 = Number(number1Input.value);
                number2 = Number(number2Input.value);
                // bewerking uitvoeren en resultaat opslaan in resultaat variabele
                // e.target = op welk element heb ik geklikt
                // textContent = welke tekst staat op dit element (knop)
                result = calculate(e.target.textContent);
                // result plaatsen in output vak
                resultOutput.value = result;
            }
            else {
                showErrors();
            }
        })
    });
}

// function om berekening uit te voeren op basis van operator
function calculate(operator) {
    if (operator === "+") return number1 + number2;
    if (operator === "-") return number1 - number2;
    if (operator === "x") return number1 * number2;
    if (operator === ":") return number1 / number2;

    // switch (operator) {
    //     case "+":
    //         return number1 + number2;
    //     case "-":
    //         return number1 / number2;
    //     case "x":
    //         return number1 * number2;
    //     case ":":
    //         return number1 / number2;
    // }
}

// function om de input te controleren
// als deze leeg (lege string) is of onmogelijk om te zetten is naar een cijfer
// dan is dit 'fout'
// input is de data die moet gecontroleerd worden
function validate(input) {
    if (input === "") return false;
    return true;
}

// function die beide inputs apart nog eens controleert
// en op basis van de specifieke fouten, specifieke meldingen geeft
function showErrors() {
    console.log(validate(number1Input.value));
    // error voor eerste input
    if (validate(number1Input.value) === false) {
        alert("Getal 1 is verkeerd");
    }
    // error voor tweede input
    if (validate(number2Input.value) === false) {
        alert("Getal 2 is verkeerd");
    }
}

//#endregion