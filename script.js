const elDarkModeBtn = document.querySelector('.js-dark-mode-btn');
const elPageCards = document.querySelectorAll('.page-card-child');
const elPageCardsWrapper = document.querySelectorAll('.pages-cards-wrapper');

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