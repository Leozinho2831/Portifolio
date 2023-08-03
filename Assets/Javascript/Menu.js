function mobileMenu() {
    let menuMobile = document.querySelector('.header__mobile');
    if (menuMobile.classList.contains('view__menu')){
        menuMobile.classList.remove('view__menu');
    } else {
        menuMobile.classList.add('view__menu');
    }
}