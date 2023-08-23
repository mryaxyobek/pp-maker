// header
const elHeader = document.querySelector('.header');
const elHeaderLogo = document.querySelector('.header-logo');

window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
        elHeader.classList.add('small-header');
        elHeaderLogo.classList.add('small-header-logo');
    } else {
        elHeader.classList.remove('small-header');
        elHeaderLogo.classList.remove('small-header-logo');
    };
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

// main cards link
const elPageCardChils = document.querySelector('.page-card-child');
const elPageCardNo1 = document.querySelector('.page-card-child-number-1');
const elPageCardNo2 = document.querySelector('.page-card-child-number-2');
const elPageCardNo3 = document.querySelector('.page-card-child-number-3');
const elPageCardNo4 = document.querySelector('.page-card-child-number-4');

elPageCardNo1.addEventListener('click', function () {
    elPageCardNo1.children[0].children[1].classList.add('shooting');
    setTimeout(function () {
        window.location.href = 'picturesforboys.html'
        elPageCardNo1.children[0].children[1].classList.remove('shooting');
    }, 500);
});
elPageCardNo2.addEventListener('click', function () {
    elPageCardNo2.children[0].children[1].classList.add('shooting');
    setTimeout(function () {
        window.location.href = 'picturesforgirls.html'
        elPageCardNo2.children[0].children[1].classList.remove('shooting');
    }, 500);
});
elPageCardNo3.addEventListener('click', function () {
    elPageCardNo3.children[0].children[1].classList.add('shooting');
    setTimeout(function () {
        window.location.href = 'pubgmpictures.html'
        elPageCardNo3.children[0].children[1].classList.remove('shooting');
    }, 500);
});
elPageCardNo4.addEventListener('click', function () {
    elPageCardNo4.children[0].children[1].classList.add('shooting');
    setTimeout(function () {
        window.location.href = 'picturesforboys.html'
        elPageCardNo4.children[0].children[1].classList.remove('shooting');
    }, 500);
}); 
