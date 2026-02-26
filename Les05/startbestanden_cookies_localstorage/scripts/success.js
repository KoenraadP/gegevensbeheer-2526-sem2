"use strict";

// stukje welkom

let welcomePar = document.getElementById("welcome");
let user = getCookie("user");
welcomePar.textContent = "Hallo " + user + "!";

function getCookie(name) {
    return document.cookie.split('; ').find(c => c.startsWith(name + '='))?.split('=')[1];
}

// stukje afmelden

// logoff knop koppelen
let logoffBtn = document.getElementById("logoff");

// oude datum opslaan voor gebruik
let oldDate = "Thu, 01 Jan 1970 00:00:00 GMT";

// wanneer er geklikt wordt op de knop dan wordt de logoff function uitgevoerd
logoffBtn.addEventListener("click",logoff);

function logoff(){
    // cookies voor loggedIn en user wissen
    document.cookie = "loggedIn=true;expires=" + oldDate;
    document.cookie = "user=;expires=" + oldDate;
    // terug naar login pagina
    location.assign("login.html");
}