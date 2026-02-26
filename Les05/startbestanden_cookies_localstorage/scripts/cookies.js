"use strict";

// juiste login gegevens opslaan
let correctUser = "jeff";
let correctPassword = "creo";

// nodige html elementen koppelen aan variabelen
let userInput = document.getElementById("user");
let passwordInput = document.getElementById("password");
let form = document.getElementById("form");

// code die uitgevoerd wordt wanneer het formulier verstuurd/ingediend wordt
form.addEventListener("submit", function (e) {
    // standaard gedrag submit voorkomen --> pagina niet refreshen
    e.preventDefault();
    // waarden uit input lezen en opslaan in variabelen
    let user = userInput.value;
    let password = passwordInput.value;
    // user en password checken met function
    if (checkLogin(user, password) === true) {
        location.assign("success.html");
    }
})

// function die controleert of user en password correct zijn
function checkLogin(user, password) {
    if (user === correctUser && password === correctPassword) {
        return true;
    }
    return false;
}