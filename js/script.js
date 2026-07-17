/*
=========================================================
 StoneRose IT
 script.js

 Auteur : ChatGPT
 Versie : 1.0

 Inhoud

 1. Pagina geladen
 2. Navbar schaduw
 3. Scroll-to-top knop
 4. Fade-in animatie
 5. Contactformulier (voorbereiding)
=========================================================
*/


/* ======================================================
   1. PAGINA GELADEN
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("StoneRose IT website geladen.");

});


/* ======================================================
   2. NAVBAR EFFECT
====================================================== */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 40) {

        navbar.classList.add("shadow");

    } else {

        navbar.classList.remove("shadow");

    }

});


/* ======================================================
   3. SCROLL TO TOP BUTTON
====================================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "▲";

topButton.id = "scrollTop";

document.body.appendChild(topButton);


window.addEventListener("scroll", () => {

    if (window.scrollY > 250) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ======================================================
   4. FADE-IN BIJ SCROLLEN
====================================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card").forEach(card => {

    card.classList.add("hidden");

    observer.observe(card);

});


/* ======================================================
   5. CONTACTFORMULIER
====================================================== */

/*
Later kun je hier validatie toevoegen.

Bijvoorbeeld:

- verplichte velden
- email controle
- Formspree
- Netlify Forms

*/


const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Bedankt! Het contactformulier is nog niet gekoppeld.");

    });

}