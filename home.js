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
/////////////////////////


function displayUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || []; // Hämtar användarprofiler från localStorage, om ingen data finns skapas en tom array
    const omdomRow = document.getElementById('omdomRow'); // Hämtar containern där profilerna ska visas

    omdomRow.innerHTML = ''; // Rensar befintligt innehåll innan nya profiler läggs till

    users.forEach((user, index) => {
        const userCard = document.createElement('div');// Skapar ett nytt element för användarens profilkort
        userCard.classList.add('omdöm-col'); // Lägger till CSS-klass för profilkort

        userCard.innerHTML = `
            <div class="user">
                <img src="${user.image}" alt="User Image"> 
                <div class="user-info">
                    <h4>${user.name}</h4>
                    <p>${user.email}</p> 
                    <p>CV: ${user.cv ? 'Tillgänglig' : 'Ingen CV laddad'}</p> 
                </div>
            </div>
            <div class="actions">
            ${user.cv ? `<a href="${user.cv}" download="cv_${user.name}.pdf" class="btn">Ladda ner CV</a>` : ''}
            <a href="form.html?email=${user.email}" class="btn">Kontakt</a>
            </div>

        `;

        omdomRow.appendChild(userCard); // Lägger till det skapade profilkortet i containern
    
    });
}

// Laddar och visar profiler när sidan öppnas
window.addEventListener('DOMContentLoaded', displayUsers);






