"use strict";

// controleren of ik al ingelogd ben via de cookie
if (getCookie("loggedIn") === "true") {
    location.assign("success.html");
}

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
        // cookies aanmaken --> key (naam) en value (waarde) in string met '=' er tussen
        document.cookie = "loggedIn=true;expires=" + expirationDate(30);
        document.cookie = "user=" + user + ";expires=" + expirationDate(30); 
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
console.log(getCookie2("school"));

// function die voor een specifieke cookie de waarde als return geeft
function getCookie(cookieName) {
    // variabele om uiteindelijk resultaat in op te slaan
    let cookieValue;
    // alle cookies apart in array opslaan
    let allCookies = document.cookie.split("; ");
    // alle cookies overlopen en zoeken naar een match voor cookieName
    allCookies.forEach(element => {
        // variabele met daarin de twee stukjes van de cookie apart
        let cookiePair = element.split("=");
        console.log(cookiePair);
        // eerste element cookiePair is de naam, deze vergelijken met cookieName
        if (cookiePair[0] === cookieName) {
            // de waarde van de cookie opslaan in variabele
            cookieValue = cookiePair[1];
        }
    });
    return cookieValue;
}

function getCookie2(name) {
    return document.cookie.split('; ').find(c => c.startsWith(name + '='))?.split('=')[1];
}

// function die een datum aanmaakt in de toekomst
function expirationDate(days) {
    // new Date() --> dit moment (datum + uur)
    let newDate = new Date();
    // huidige dag van de maand opslaan
    let currentDay = newDate.getDate(); // bijvoorbeeld 26 als het nu 26/02 is
    newDate.setDate(currentDay + days);
    // nieuwe datum als resultaat van de function
    return newDate;
}