"use strict";

// html elementen koppelen
let form = document.getElementById("form");
let inputs = document.querySelectorAll("input"); // alle <input> elementen
let errorsDiv = document.getElementById("errors");

// submit event voor form
form.addEventListener("submit", function (e) {
    // default/standaard gedrag form 'tegenhouden'
    // hierdoor wordt form niet meer verstuurd
    e.preventDefault();

    // validiteit checken van inputs
    // als er iets verkeerd is --> class error toekennen
    inputs.forEach(element => {
        // alle classes wegnemen bij alle <input> tags
        // betekent eigenlijk: het attribute class verwijderen
        element.removeAttribute("class");
        if (element.validity.valid === false) {
            element.classList.add("error");
        } else if (element.type !== "submit") {
            element.classList.add("valid");
        }
    });

    // naar andere pagina gaan
    // location.assign("https://www.creo.be");

})
