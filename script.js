document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.querySelectorAll('nav ul');
    const burgerText = burgerMenu.querySelector('h1');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active'); // Toggle active class on burger menu
        navLinks.forEach(nav => nav.classList.toggle('active')); // Show or hide navigation links
    });

    // Ensure the text always displays "Menu"
    burgerText.textContent = 'Menu';
});
