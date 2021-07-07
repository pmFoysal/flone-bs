let headerSearchButton = document.getElementById('header__search--icon');
let headerSearchBox = document.getElementById('header__search--box');

headerSearchButton.addEventListener('click', function () {
    if (headerSearchBox.classList == 'search-close') {
        headerSearchBox.classList.replace('search-close', 'search-open');
    } else {
        headerSearchBox.classList.replace('search-open', 'search-close');
    }
});


// ======================================== \\

const topUp = document.querySelector('#top_up');
const header2 = document.querySelector('#header2');
const header2Brand = document.querySelector('#header2__brand');
const headerGap = header2.offsetTop;

window.addEventListener('scroll', () => {

    if (headerGap < (window.scrollY)) {
        header2.classList.add('header_sticky');
        header2Brand.classList.add('header2__brand_op');
        topUp.classList.add('top_up_shown');
    } else {
        header2.classList.remove('header_sticky');
        header2Brand.classList.remove('header2__brand_op');
        topUp.classList.remove('top_up_shown');
    }
});


// ========================================= \\