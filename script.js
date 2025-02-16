document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.querySelectorAll('nav ul');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active'); // Toggle active class on burger menu
        navLinks.forEach(nav => nav.classList.toggle('active'));
    });
});
