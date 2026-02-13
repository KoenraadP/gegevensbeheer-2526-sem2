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

    // array maken voor foutboodschappen
    let errors = [];
    // errorsDiv resetten
    errorsDiv.textContent = "";

    // validiteit checken van inputs
    // als er iets verkeerd is --> class error toekennen
    inputs.forEach(element => {
        // alle classes wegnemen bij alle <input> tags
        // betekent eigenlijk: het attribute class verwijderen
        element.removeAttribute("class");
        if (element.validity.valid === false) {
            element.classList.add("error");
            // foutboodschap in array steken
            errors.push(element.id + ": " + element.validationMessage);
        } else if (element.type !== "submit") {
            element.classList.add("valid");
        }
    });

    // als er foutboodschappen in de errors array zitten
    // toon deze dan in errorsDiv
    if (errors.length > 0) {
        errors.forEach(element => {
            // alinea maken
            let p = document.createElement("p");
            // alinea invullen met foutboodschap
            p.textContent = element;
            // alinea toevoegen aan errorsDiv
            errorsDiv.append(p);
        });
    } else {
        alert("Login gelukt!");
        location.assign("https://www.creo.be");
    }

})
