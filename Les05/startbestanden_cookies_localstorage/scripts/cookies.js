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
        // cookie aanmaken --> key (naam) en value (waarde) in string met '=' er tussen
        document.cookie = "loggedIn=true";
        // naar volgende pagina gaan
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

// extra code voor testen van cookies

// extra cookies aanmaken
document.cookie = "school=Creo";
document.cookie = "vak=Gegevensbeheer";

// alle cookies tonen in console
console.log(document.cookie);

// console.log(getCookie("school")) --> "Creo"
// loggedIn=true; school=Creo; vak=Gegevensbeheer

console.log(getCookie("school"));

// function die voor een specifieke cookie de waarde als return geeft
function getCookie(cookieName) {
    // alle cookies apart in array opslaan
    let allCookies = document.cookie.split("; ");
    // alle cookies overlopen en zoeken naar een match voor cookieName
    allCookies.forEach(element => {
        // variabele met daarin de twee stukjes van de cookie apart
        let cookiePair = element.split("=");
        console.log(cookiePair);
        // eerste element cookiePair is de naam, deze vergelijken met cookieName
        if (cookiePair[0] === cookieName) {
            // de waarde van de cookie als return
            return cookiePair[1];
        }
    });
}