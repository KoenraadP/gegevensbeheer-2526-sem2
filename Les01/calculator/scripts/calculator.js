"use strict";

//#region global variables

// variabelen voor berekening
let number1, number2, result;

// variabelen voor de HTML invoer/uitvoer elementen
let number1Input, number2Input, resultOutput;

// variabelen voor de buttons
let addButton, subtractButton, multiplyButton, divideButton, buttons;

// variabele voor error div
let errorDiv;

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
    // alternatief
    // buttons = document.querySelectorAll("button");

    errorDiv = document.getElementById("errors");
}

// function om eventlisteners toe te voegen aan HTML elementen
function addEvents() {
    // loop die alle buttons uit de buttons array een click event toekent
    buttons.forEach(button => {
        button.addEventListener("click", function (e) {
            // resetErrors uitvoeren om eventuele boodschappen te wissen
            resetErrors();
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
    if (input === "" || isNaN(input)) return false;
    return true;
}

// function die beide inputs apart nog eens controleert
// en op basis van de specifieke fouten, specifieke meldingen geeft
function showErrors() {
    // error voor eerste input
    if (validate(number1Input.value) === false) {
        // nieuwe <p> aanmaken voor foutboodschap
        let error1 = document.createElement("p");
        // tekst in <p> plaatsen
        error1.textContent = "Getal 1 is verkeerd";
        // error1 <p> toevoegen aan errorDiv
        errorDiv.append(error1);
        // achtergrondkleur van input geel maken
        number1Input.style.backgroundColor = "yellow";
    }
    // error voor tweede input
    if (validate(number2Input.value) === false) {
        // nieuwe <p> aanmaken voor foutboodschap
        let error2 = document.createElement("p");
        // tekst in <p> plaatsen
        error2.textContent = "Getal 2 is verkeerd";
        // error1 <p> toevoegen aan errorDiv
        errorDiv.append(error2);
        // achtergrondkleur van input geel maken
        number2Input.style.backgroundColor = "yellow";
    }
}

// function om errors te resetten
function resetErrors() {
    errorDiv.textContent = "";
    number1Input.style.backgroundColor = "";
    number2Input.style.backgroundColor = "";
}

//#endregion