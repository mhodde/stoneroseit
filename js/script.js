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

    // Zoek het formulier

    const form = document.getElementById("contactForm");

    // Niet op iedere pagina aanwezig

    if (!form) return;

    // Submit event

    form.addEventListener("submit", function (event) {

        // Voorkom pagina refresh

        event.preventDefault();

        // Gegevens ophalen

        const naam = document.getElementById("naam").value.trim();

        const bedrijf = document.getElementById("bedrijf").value.trim();

        const email = document.getElementById("email").value.trim();

        const onderwerp = document.getElementById("onderwerp").value.trim();

        const bericht = document.getElementById("bericht").value.trim();

        // Simpele validatie

        if (naam === "") {

            alert("Vul uw naam in.");

            return;

        }

        if (email === "") {

            alert("Vul een e-mailadres in.");

            return;

        }

        if (bericht === "") {

            alert("Vul een bericht in.");

            return;

        }

        // Debug (later verwijderen)

        console.log("Naam:", naam);

        console.log("Bedrijf:", bedrijf);

        console.log("Email:", email);

        console.log("Onderwerp:", onderwerp);

        console.log("Bericht:", bericht);

        //alert("Bedankt voor uw bericht! Het formulier is nog niet gekoppeld aan een mailservice.");
        fetch("https://script.google.com/macros/s/AKfycbyAvVzVW4U463EGVS_ipurxRPdDPZvfL7gYBiZTcQY-VGBbms_zRx7Eu2qny_qfv-dp/exec", {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

            naam,

            bedrijf,

            email,

            onderwerp,

            bericht

            })

        })
        .then(response => response.text())
        .then(result => {

            alert("Uw bericht is succesvol verzonden.");

            form.reset();

        })
        .catch(error => {

            alert("Er is een fout opgetreden.");

            console.error(error);

        });

        // Formulier leegmaken

        form.reset();

    });

}