// Open/close mobile menu and submenu
const header = document.querySelector('.header');
const submenuBtns = document.querySelectorAll('.nav__item-has-child .nav__link');
const  toggleMenu = document.querySelector('.toggle-menu');
const body = document.querySelector('body');

toggleMenu.addEventListener('click', () => {
    header.classList.toggle('open');
    toggleMenu.classList.toggle('open');
    body.classList.toggle('overflow-hidden');
});

if (window.innerWidth < 1200) {
    submenuBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btn.closest('.nav__item-has-child').classList.toggle('open');
        });
    });
}


// Open/close languages menu

const langBtn = document.querySelector('.languages__current');
const langMenu = document.querySelector('.menu__list');

langBtn.addEventListener('click', (e) => {
    e.preventDefault();
    langMenu.classList.toggle('open');
    langBtn.classList.toggle('open');
});


// Desctop search form
const searchBtn = document.getElementById('searchOpen');
const formSearch =document.querySelector('.menu__item.search');
const searchText = document.querySelector('.menu__item-text');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    formSearch.classList.add('open');
    searchText.classList.add('hidden');
});

document.addEventListener('click', function(event) {
    const isClickInsideSearch = formSearch.contains(event.target);
    if (!isClickInsideSearch) {
        formSearch.classList.remove('open');
        searchText.classList.remove('hidden');
    }

    const isClickInsidelang = langBtn.contains(event.target);
    if (!isClickInsidelang) {
        langMenu.classList.remove('open');
        langBtn.classList.remove('open');
    }

    const isClickInsideMenu = document.querySelector('.header__nav').contains(event.target);
    const isClickInsideMenuToogle = toggleMenu.contains(event.target);
    if (!isClickInsideMenu && !isClickInsideMenuToogle) {
        header.classList.remove('open');
        toggleMenu.classList.remove('open');
        body.classList.remove('overflow-hidden');
    }
});