// Drop-Down Active

const dropdown = document.querySelectorAll('.drop-down-container');

dropdown.forEach((dropdownItems) => {
    dropdownItems.addEventListener('click', () => {
        dropdownItems.classList.toggle('active');
    })
});


// Hamburger Menu

const showMenu = (hamburgerMenu, navItems) => {
    const hamburger = document.querySelector(hamburgerMenu);
    const nav = document.querySelector(navItems);

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            hamburger.classList.toggle('active')
        })
    }
};

showMenu('.hamburger-menu', '.toggle');