/*
=========================================================
 StoneRose IT
 script.js

 Auteur : ChatGPT

 Alle JavaScript voor de website.

 Inhoud

 1. Website geladen
 2. Navbar effect
 3. Scroll-to-top
 4. Fade-in animatie
 5. Contactformulier
=========================================================
*/


/* ======================================================
   WEBSITE GELADEN
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("StoneRose IT geladen.");

    initialiseContactForm();

});


/* ======================================================
   NAVBAR SCHADUW
====================================================== */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 30) {

        navbar.classList.add("shadow");

    } else {

        navbar.classList.remove("shadow");

    }

});


/* ======================================================
   SCROLL TO TOP
====================================================== */

const scrollButton = document.createElement("button");

scrollButton.id = "scrollTop";

scrollButton.innerHTML = "▲";

document.body.appendChild(scrollButton);

window.addEventListener("scroll", () => {

    scrollButton.style.display =

        window.scrollY > 250

        ? "block"

        : "none";

});

scrollButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ======================================================
   FADE-IN ANIMATIE
====================================================== */

const observer = new IntersectionObserver(entries => {

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
   CONTACTFORMULIER
====================================================== */

function initialiseContactForm() {

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const naam = document.getElementById("naam").value.trim();

        const bedrijf = document.getElementById("bedrijf").value.trim();

        const email = document.getElementById("email").value.trim();

        const onderwerp = document.getElementById("onderwerp").value.trim();

        const bericht = document.getElementById("bericht").value.trim();


        if (naam === "") {

            alert("Vul uw naam in.");

            return;

        }

        if (email === "") {

            alert("Vul uw e-mailadres in.");

            return;

        }

        if (bericht === "") {

            alert("Vul een bericht in.");

            return;

        }


        const data = new URLSearchParams();

        data.append("naam", naam);

        data.append("bedrijf", bedrijf);

        data.append("email", email);

        data.append("onderwerp", onderwerp);

        data.append("bericht", bericht);


        fetch("https://script.google.com/macros/s/AKfycbyAvVzVW4U463EGVS_ipurxRPdDPZvfL7gYBiZTcQY-VGBbms_zRx7Eu2qny_qfv-dp/exec", {

            method: "POST",

            body: data

        })

        .then(response => response.text())

        .then(result => {

            console.log(result);

            alert("Uw bericht is succesvol verzonden.");

            form.reset();

        })

        .catch(error => {

            console.error(error);

            alert("Er is een fout opgetreden.");

        });

    });

}
// Formulier leegmaken

form.reset();

 