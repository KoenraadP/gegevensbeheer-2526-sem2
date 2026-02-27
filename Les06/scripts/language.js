"use strict";

// greeting <p> koppelen
let greetingPar = document.getElementById("greeting");

// alle links <a> verzamelen die gebruikt worden voor taal instellen
let languageLinks = document.querySelectorAll(".language-link");

// gekozen taal ophalen uit localStorage
// als er geen key gevonden wordt, is de waarde null
let chosenLanguage = localStorage.getItem("chosenLanguage"); // zal ofwel null, "nl", "fr" of "en" zijn

// begroeting al aanpassen indien nodig op basis van taal uit localstorage
greetingPar.textContent = setLanguage(chosenLanguage);

// click event voor alle languageLinks
languageLinks.forEach(element => {
    element.addEventListener("click", function (e) {
        // preventDefault zorgt dat de pagina niet herladen wordt
        e.preventDefault();
        // de id van de gekozen link opslaan in localStorage, zal dus nl, fr of en zijn
        localStorage.setItem("chosenLanguage", e.target.id);
        // greeting nu ook al onmiddellijk aanpassen
        greetingPar.textContent = setLanguage(e.target.id);
    })
});

// function die op basis van gekozen taal een correcte 'greeting' string geeft
function setLanguage(language) {
    // variabele voor resultaat
    let greeting = "";
    // switch om resultaat in te vullen
    switch (language) {
        case "fr": // if (language === "fr")
            greeting = "Bonjour!"
            break;
        case "en":
            greeting = "Good morning!";
            break;
        default:
            greeting = "Goedemorgen!";
            break;
    }
    return greeting;
}