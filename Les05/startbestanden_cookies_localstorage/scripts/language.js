"use strict";

// gekozen taal ophalen uit localStorage
// als er geen key gevonden wordt, is de waarde null
let chosenLanguage = localStorage.getItem("chosenLanguage"); // zal ofwel null, "nl", "fr" of "en" zijn

// greeting <p> koppelen
let greetingPar = document.getElementById("greeting");

// alle links <a> verzamelen die gebruikt worden voor taal instellen
let languageLinks = document.querySelectorAll(".language-link");

// click event voor alle languageLinks
languageLinks.forEach(element => {
    element.addEventListener("click",function(e){
        // preventDefault zorgt dat de pagina niet herladen wordt
        e.preventDefault();
        // de id van de gekozen link opslaan in localStorage, zal dus nl, fr of en zijn
        localStorage.setItem("chosenLanguage",e.target.id);
    })
});