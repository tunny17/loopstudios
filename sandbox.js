let menu = document.querySelector('#menu');

// menu.addEventListener('click', addNav);
// menu.addEventListener('click', changeDisplay);
menu.addEventListener('click', addItAll);


function addItAll() {
    let navBar = document.querySelector('.navigation-div');
    let top = document.querySelector('.top');
    let menu = document.getElementById("menu").src;
    if (menu.indexOf('/img/icon-hamburger.svg')!=-1) {
        document.getElementById("menu").src = '/img/icon-close.svg'
    } else {
        document.getElementById("menu").src ='/img/icon-hamburger.svg'
    }
    top.classList.toggle('top-two');
    navBar.classList.toggle('display');
}
