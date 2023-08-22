const elDarkModeBtn = document.querySelector('.js-dark-mode-btn');
const elPageCards = document.querySelectorAll('.page-card-child');
const elHeader = document.querySelector('.header');
const elHeaderLogo = document.querySelector('.header-logo');
const elPageCardsWrapper = document.querySelectorAll('.pages-cards-wrapper');

window.addEventListener('scroll', function(){
    console.log(elHeader);
    if (window.scrollY > 90) {
        elHeader.classList.add('small-header');
        elHeaderLogo.classList.add('small-header-logo');
    }else{
        elHeader.classList.remove('small-header');
        elHeaderLogo.classList.remove('small-header-logo');
    };
});
elDarkModeBtn.addEventListener('click', function () {
    elDarkModeBtn.disabled = true;
    setTimeout(function () {
        elDarkModeBtn.disabled = false;
        document.body.classList.toggle('dark-mode');
        elDarkModeBtn.childNodes[3].classList.toggle('shape-run');
        elDarkModeBtn.childNodes[3].classList.add('shape-intial-animation');
        elDarkModeBtn.childNodes[5].classList.remove('remove-intial-animation');
    }, 500);
    elDarkModeBtn.childNodes[1].classList.toggle('sun-animation');
    elDarkModeBtn.childNodes[5].classList.toggle('sun-animation');
});