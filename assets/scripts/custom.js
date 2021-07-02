let headerSearchButton = document.getElementById('header__search--icon');
let headerSearchBox = document.getElementById('header__search--box');

headerSearchButton.addEventListener('click', function() {
    if (headerSearchBox.classList == 'search-close') {
        headerSearchBox.classList.replace('search-close', 'search-open');
    }
    else {
        headerSearchBox.classList.replace('search-open', 'search-close');
    }
})