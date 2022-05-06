const btnBurger = document.querySelector('.menu__button');
const btnCloseBurger = document.querySelector('.menu__cross');
const navMenu = document.querySelector('.menu__site-navigation');

function openMenuBurger() {

    btnBurger.addEventListener('click', () => {
        navMenu.style.transform = 'translateX(0)';
        btnCloseBurger.style.display='block'
    })
}
openMenuBurger()

function closeMenuBurger() {

    btnCloseBurger.addEventListener('click', () => {
        navMenu.style.transform = 'translateX(100%)';
        btnCloseBurger.style.display='none'
    })
}
closeMenuBurger()