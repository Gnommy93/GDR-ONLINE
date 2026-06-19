/* ===================================================
   ROTOMDEX
   Gestione pulsanti e pagine
=================================================== */

// Prende tutti i pulsanti
const tabs = document.querySelectorAll(".tab");

// Prende tutte le sezioni
const pages = document.querySelectorAll(".page");

// Per ogni pulsante...
tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        // Rimuove la classe active da tutti i pulsanti
        tabs.forEach(btn => btn.classList.remove("active"));

        // Nasconde tutte le pagine
        pages.forEach(page => page.classList.remove("active"));

        // Attiva il pulsante cliccato
        tab.classList.add("active");

        // Mostra la pagina collegata
        const target = tab.dataset.page;
        document.getElementById(target).classList.add("active");

    });

});
