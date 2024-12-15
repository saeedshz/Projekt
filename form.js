// Validering av kontaktformuläret
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
//////////////////////////////////////

// Hämtar mottagarens e-post från URL-parametern
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search); // Hämtar URL-parametrarna
    const recipientEmail = urlParams.get('email'); // Hämtar värdet från ?email=

    if (recipientEmail) {
        document.getElementById('recipient').value = recipientEmail; // Sätter mottagarens e-post i formulärfältet och gör det readonly
    }
});

// Hantering av formulärets inskickning (kan utökas för att skicka data)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Förhindrar att sidan laddas om när formuläret skickas

    const recipient = document.getElementById('recipient').value; // Hämtar mottagarens e-postadress från formuläret
    const senderName = document.getElementById('name').value; // Hämtar användarens namn från formuläret
    const senderEmail = document.getElementById('email').value; // Hämtar användarens e-postadress från formuläret
    const message = document.getElementById('message').value; // Hämtar meddelandet som användaren har skrivit

    // Kontrollera att alla fält är ifyllda
    if (!senderName || !senderEmail || !message) {
        alert('Vänligen fyll i alla fält.'); // Visar en varning om något fält är tomt
        return;
    }

    // Här kan du lägga till funktionalitet för att skicka formulärdata via t.ex. en API-anrop
    alert(`Meddelandet har skickats till: ${recipient}`); // Visar ett meddelande om att formuläret har skickats
});


