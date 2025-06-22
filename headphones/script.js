// 8-script.js

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburgerIcon && navMenu) {
        hamburgerIcon.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
});