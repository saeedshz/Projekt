// script.js

// Select the hamburger and menu elements
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Show the menu on mouseover
hamburger.addEventListener('mouseover', () => {
    menu.classList.add('active');
});

// Keep the menu open as long as the mouse is on the menu
menu.addEventListener('mouseover', () => {
    menu.classList.add('active');
});

// Hide the menu when the mouse leaves both the hamburger and the menu
hamburger.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!menu.matches(':hover')) {
            menu.classList.remove('active');
        }
    }, 100); // Slight delay to prevent flicker
});

menu.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!hamburger.matches(':hover')) {
            menu.classList.remove('active');
        }
    }, 100); // Slight delay to ensure user interaction is complete
});
//////////////////////////////////////////

// Hämtar formuläret för användarregistrering
const userForm = document.getElementById('userForm'); 

// Lyssnare för formulärets inskickning
userForm.addEventListener('submit', async function(event) {
    event.preventDefault(); // Förhindrar att sidan laddas om

    const name = document.getElementById('name').value; // Hämtar användarens namn
    const image = document.getElementById('image').files[0]; // Hämtar den uppladdade bilden
    const email = document.getElementById('email').value; // Hämtar användarens e-post
    const cv = document.getElementById('cv').files[0]; // Hämtar den uppladdade CV-filen

    try {
        const imageBase64 = await readFileAsync(image); // Konverterar bildfilen till Base64-format
        let cvBase64 = ''; // Tomt värde för CV om ingen fil laddas upp

        if (cv) {
            cvBase64 = await readFileAsync(cv); // Konverterar CV-filen till Base64-format
        }

        // Skapa ett användarprofilobjekt
        const userProfile = {
            name: name, // Användarens namn
            image: imageBase64, // Base64-representation av bilden
            email: email, // Användarens e-postadress
            cv: cvBase64, // Base64-representation av CV-filen (om den finns)
        };

        // Hämta befintliga användarprofiler från localStorage
        let users = JSON.parse(localStorage.getItem('users')) || []; // Om ingen lista finns, använd en tom lista
        users.push(userProfile); // Lägg till den nya användarprofilen i listan
        localStorage.setItem('users', JSON.stringify(users)); // Spara den uppdaterade listan i localStorage

        alert('Registrering lyckades! Du kommer nu att omdirigeras till hemsidan.');
        window.location.href = 'home.html'; // Omdirigera användaren till hemsidan
    } catch (error) {
        alert('Något gick fel, försök igen.'); // Visar ett felmeddelande till användaren
        console.error('Error:', error); // Loggar felet i konsolen för felsökning
    }
});

// Funktion för att läsa en fil och konvertera den till Base64
function readFileAsync(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader(); // Skapar en ny FileReader-instans
        reader.onload = () => resolve(reader.result); // Lös promiset med filens innehåll
        reader.onerror = () => reject(reader.error); // Avvisa promiset om ett fel uppstår
        reader.readAsDataURL(file); // Läs in filen som en Data URL (Base64-format)
    });
}



















