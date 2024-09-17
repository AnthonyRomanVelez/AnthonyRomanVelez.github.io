const hamburgerIcon = document.getElementById('menu-logo');
const xIcon = document.getElementById('x-logo');
const navLinks = document.getElementById('nav-links');
let menuOpen = false;

hamburgerIcon.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    toggleIcons();
});

xIcon.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    toggleIcons();
});

function toggleIcons() {
    if (menuOpen) {
        hamburgerIcon.style.display = 'block';
        xIcon.style.display = 'none';
    } else {
        hamburgerIcon.style.display = 'none';
        xIcon.style.display = 'block';
    }
    menuOpen = !menuOpen;
}
initializeIcons();