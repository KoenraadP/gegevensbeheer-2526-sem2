"use strict";

// html elementen koppelen
let frenchLink = document.getElementById("fr");
let greetingPar = document.getElementById("greeting");

// alle links verzamelen die gebruikt worden voor taal instellen
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

// als ik klik op frenchLink dan wordt de tekst veranderd
// frenchLink.addEventListener("click", function(e) {
    // standaard gedrag voorkomen --> niet de pagina herladen
    // e.preventDefault();
    // greetingPar.textContent = "Bonjour!";
    // opslaan in localstorage dat ik voor "fr" gekozen heb
    // localStorage.setItem("chosenLanguage","fr");
// })