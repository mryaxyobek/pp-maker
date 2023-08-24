// header and top btn
const elHeader = document.querySelector('.header');
const elHeaderLogo = document.querySelector('.header-logo');

//top btn 
const elTopBtn = document.querySelector('.top-btn');

window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
        elHeader.classList.add('small-header');
        elHeaderLogo.classList.add('small-header-logo');
        elTopBtn.style.display = 'flex';
    } else {
        elHeader.classList.remove('small-header');
        elHeaderLogo.classList.remove('small-header-logo');
        elTopBtn.style.display = 'none';
    };
});

elTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        right: 0,
        behavior: "smooth"
    });
    elTopBtn.classList.add('top-to-bottom');
    setTimeout(function () {
        elTopBtn.classList.remove('top-to-bottom');
    }, 800);
});

// dark mode 
const elDarkModeBtn = document.querySelector('.js-dark-mode-btn');

elDarkModeBtn.addEventListener('click', () => {
    elDarkModeBtn.disabled = true;
    setTimeout(function () {
        elDarkModeBtn.disabled = false;
        document.body.classList.toggle('dark-mode');
        elDarkModeBtn.childNodes[3].classList.toggle('shape-run');
        elDarkModeBtn.childNodes[3].classList.add('shape-intial-animation');
        elDarkModeBtn.childNodes[5].classList.remove('remove-intial-animation');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    }, 500);
    elDarkModeBtn.childNodes[1].classList.toggle('sun-animation');
    elDarkModeBtn.childNodes[5].classList.toggle('sun-animation');
});

document.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        document.body.classList.add('dark-mode');
    }
});

// navbar menu 
const elHamburgerBtn = document.querySelector('.hamburger-btn');
const elDarkFilter = document.querySelector('.dark-filter');
const elHeaderNav = document.querySelector('.header-nav');

elHamburgerBtn.addEventListener('click', function () {
    elHamburgerBtn.classList.toggle('hamburger-menu-active');
    elHeaderNav.classList.toggle('header-nav-active');
    document.body.classList.toggle('overflow-hidden');
    elDarkFilter.classList.toggle('dark-filter-active');
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            removeNavbar();
        }
    });
});
elDarkFilter.addEventListener('click', function () {
    removeNavbar();
});
function removeNavbar() {
    elHamburgerBtn.classList.remove('hamburger-menu-active');
    elHeaderNav.classList.remove('header-nav-active');
    document.body.classList.remove('overflow-hidden');
    elDarkFilter.classList.remove('dark-filter-active');
};

// main cards link
const elPageCardChils = document.querySelector('.page-card-child');
const elPageCardNo1 = document.querySelector('.page-card-child-number-1');
const elPageCardNo2 = document.querySelector('.page-card-child-number-2');
const elPageCardNo3 = document.querySelector('.page-card-child-number-3');
const elPageCardNo4 = document.querySelector('.page-card-child-number-4');

if (elPageCardNo1) {
    elPageCardNo1.addEventListener('click', function () {
        elPageCardNo1.children[0].children[1].classList.add('shooting');
        setTimeout(function () {
            window.location.href = 'picturesforboys.html'
            elPageCardNo1.removeClassShooting()
        }, 500);
    });
}
if (elPageCardNo2) {
    elPageCardNo2.addEventListener('click', function () {
        elPageCardNo2.children[0].children[1].classList.add('shooting');
        setTimeout(function () {
            window.location.href = 'picturesforgirls.html'
            elPageCardNo2.removeClassShooting()
        }, 500);
    });
}
if (elPageCardNo3) {
    elPageCardNo3.addEventListener('click', function () {
        elPageCardNo3.children[0].children[1].classList.add('shooting');
        setTimeout(function () {
            window.location.href = 'pubgmpictures.html'
            elPageCardNo3.removeClassShooting()
        }, 500);
    });
}
if (elPageCardNo4) {
    elPageCardNo4.addEventListener('click', function () {
        elPageCardNo4.children[0].children[1].classList.add('shooting');
        setTimeout(function () {
            window.location.href = 'picturesforboys.html'
            elPageCardNo4.removeClassShooting()
        }, 500);
    });
}
function removeClassShooting() {
    children[0].children[1].classList.remove('shooting');
};