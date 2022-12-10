// Drop-Down Active

const dropdown = document.querySelectorAll('.drop-down-container');

dropdown.forEach( (dropdownItems) => {
    dropdownItems.addEventListener('click', () => {
        dropdownItems.classList.toggle('active');
    })
});

// hamburger Active

// const hamburger = document.querySelector('.hamburger-menu'); 

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
// });


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