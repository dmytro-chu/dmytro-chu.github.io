window.addEventListener('DOMContentLoaded', function() {
    
    console.log("ok");

    //Кнопка главного выпадающего меню
    
    const menuButton = document.querySelector('.button'),
        nav = document.querySelector('nav'),
        menuIcon = menuButton.querySelector('.menu__icon');

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('menu__open');
        menuIcon.classList.toggle('_active');
    });

    //Шеврон открывающий подменю

    const subMenuToggle = document.querySelectorAll('.sub-menu-toggle'),
        subMenu = document.querySelectorAll('.sub-menu');
    
    subMenuToggle.forEach((element, i) => {
        element.addEventListener('click', () => {
            element.classList.toggle('_rotate');
            subMenu[i].classList.toggle('sub-menu_open');
        });
    });
    
});