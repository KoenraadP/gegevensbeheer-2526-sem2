"use strict";

// div koppelen
let resultsDiv = document.getElementById("results");

// stukje uit url vanaf vraagteken
console.log(location.search);

// zonder vraagteken --> alles zonder eerste karakter
let fullData = location.search.slice(1);
console.log(fullData);

// %40 vervangen door @
fullData = fullData.replace("%40", "@");

// aparte stukjes input van elkaar scheiden
let splitData = fullData.split("&");
console.log(splitData);

// voor ieder item uit de splitData array
// een alinea (<p>) maken en toevoegen aan de resultsDiv
// splitData.forEach(element => {
//     // <p> tag aanmaken
//     let paragraph = document.createElement("p");
//     // p invullen met waarde van element
//     // een element is bijvoorbeeld name=Koenraad
//     paragraph.textContent = element;
//     // paragraph toevoegen aan resultsDiv
//     resultsDiv.append(paragraph);
// });

// alternatieve (betere) manier om aan form data uit URL te raken
let formData = new URLSearchParams(location.search);
console.log(formData);

// key --> naam van input
// value --> waarde van input
formData.forEach((value,key) => {
    // <p> tag aanmaken
    let paragraph = document.createElement("p");
    // p invullen met waarde van element
    // een element is bijvoorbeeld name=Koenraad
    paragraph.textContent = key + " = " + value;
    // paragraph toevoegen aan resultsDiv
    resultsDiv.append(paragraph);
});