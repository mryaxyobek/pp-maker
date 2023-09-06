// sayt kodlaridan foydalansangiz, tegishli joylarga manba va sayt ma'lumotlarini yozib qo'ying, yo'qsa men rozi emasman

// if you use site codes, please credit the source and site information in the appropriate places, otherwise I disagree

// если вы используете коды сайта, укажите источник и информацию о сайте в соответствующих местах, в противном случае я не согласен

import { picsForGirls } from './listInformations.js';
import { picsForBoys } from './listInformations.js';

const elLoader = document.querySelector('.loader');
document.addEventListener('DOMContentLoaded', function () {
    elLoader.classList.remove('hidden');
});
window.onload = () => {
    setTimeout(function () {
        elLoader.classList.add('hidden');
    }, 1000);
};
const elHeader = document.querySelector('.header');
const elHeaderLogo = document.querySelector('.header-logo');
const elHeaderLogoLink = document.querySelector('.header-logo-link');
const elTopBtn = document.querySelector('.top-btn');
window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
        elHeader.classList.add('small-header');
        elHeaderLogo.classList.add('small-header-logo');
        elHeaderLogoLink.classList.add('small-header-logo');
        elTopBtn.style.display = 'flex';
    } else {
        elHeader.classList.remove('small-header');
        elHeaderLogo.classList.remove('small-header-logo');
        elHeaderLogoLink.classList.remove('small-header-logo');
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
        elDarkModeBtn.childNodes[3].classList.add('shape-run');
        elDarkModeBtn.childNodes[1].classList.add('sun-animation');
        elDarkModeBtn.childNodes[5].classList.remove('remove-intial-animation', 'sun-animation');
    }
});
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
const elPageCardChilds = document.querySelectorAll('.page-card-child');
const elPageCardNo1 = document.querySelector('.page-card-child-number-1');
const elPageCardNo2 = document.querySelector('.page-card-child-number-2');
const elPageCardNo3 = document.querySelector('.page-card-child-number-3');
const elPageCardNo4 = document.querySelector('.page-card-child-number-4');
elPageCardChilds.forEach(function (e) {
    e.addEventListener('click', function () {
        e.children[0].children[1].classList.add('shooting');
        setTimeout(function () {
            e.children[0].children[1].classList.remove('shooting');
        }, 700);
    });
});
if (elPageCardNo1) {
    elPageCardNo1.addEventListener('click', function () {
        setTimeout(function () {
            window.location.href = 'picturesforboys.html';
        }, 500);
    });
    elPageCardNo2.addEventListener('click', function () {
        setTimeout(function () {
            window.location.href = 'picturesforgirls.html';
        }, 500);
    });
    elPageCardNo3.addEventListener('click', function () {
        setTimeout(function () {
            window.location.href = 'pubgmpictures.html';
        }, 500);
    });
    elPageCardNo4.addEventListener('click', function () {
        setTimeout(function () {
            window.location.href = 'picturesforboys.html';
        }, 500);
    });
};

const elGirlsImagesList = document.querySelector('.pics-for-girls');
const elBoysImagesList = document.querySelector('.pics-for-boys');

let elImagesList;
let imgData;

if (elGirlsImagesList) {
    elImagesList = document.querySelector('.pics-for-girls');
    imgData = picsForGirls;
} else if (elBoysImagesList) {
    elImagesList = document.querySelector('.pics-for-boys');
    imgData = picsForBoys;
} else {
    console.error('\x1b[91m%s\x1b[0m', 'No space found for image data :(');
}

if (elGirlsImagesList || elBoysImagesList) {
    imgData.map(e => {
        elImagesList.innerHTML += `<li key="${e.id}" class="images-list-child">
            <img width="378" height="378" src=${e.imgSrc} alt="cartoon girl image for profile" class="images-list-main-img">
            <div class="images-list-child-bottom">
                <h3>${e.title}</h3>
                <button class="display-image-btn">
                    <span>Rasmni ko'rish</span>
                    <svg class="image-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.2 21H6.93137C6.32555 21 6.02265 21 5.88238 20.8802C5.76068 20.7763 5.69609 20.6203 5.70865 20.4608C5.72312 20.2769 5.93731 20.0627 6.36569 19.6343L14.8686 11.1314C15.2646 10.7354 15.4627 10.5373 15.691 10.4632C15.8918 10.3979 16.1082 10.3979 16.309 10.4632C16.5373 10.5373 16.7354 10.7354 17.1314 11.1314L21 15V16.2M16.2 21C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2M16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2M10.5 8.5C10.5 9.60457 9.60457 10.5 8.5 10.5C7.39543 10.5 6.5 9.60457 6.5 8.5C6.5 7.39543 7.39543 6.5 8.5 6.5C9.60457 6.5 10.5 7.39543 10.5 8.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                </button>
                <button class="create-image-btn">
                <span>Rasm tayyorlash</span>
                <svg class="add-image-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H17C17.93 21 18.395 21 18.7765 20.8978C19.8117 20.6204 20.6204 19.8117 20.8978 18.7765C21 18.395 21 17.93 21 17M19 8V2M16 5H22M10.5 8.5C10.5 9.60457 9.60457 10.5 8.5 10.5C7.39543 10.5 6.5 9.60457 6.5 8.5C6.5 7.39543 7.39543 6.5 8.5 6.5C9.60457 6.5 10.5 7.39543 10.5 8.5ZM14.99 11.9181L6.53115 19.608C6.05536 20.0406 5.81747 20.2568 5.79643 20.4442C5.77819 20.6066 5.84045 20.7676 5.96319 20.8755C6.10478 21 6.42628 21 7.06929 21H16.456C17.8951 21 18.6147 21 19.1799 20.7582C19.8894 20.4547 20.4547 19.8894 20.7582 19.1799C21 18.6147 21 17.8951 21 16.456C21 15.9717 21 15.7296 20.9471 15.5042C20.8805 15.2208 20.753 14.9554 20.5733 14.7264C20.4303 14.5442 20.2412 14.3929 19.8631 14.0905L17.0658 11.8527C16.6874 11.5499 16.4982 11.3985 16.2898 11.3451C16.1061 11.298 15.9129 11.3041 15.7325 11.3627C15.5279 11.4291 15.3486 11.5921 14.99 11.9181Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </li>`
    });
};

// count imgs
const elBoysImgsCount = document.querySelector('.boys-images-count');
const elGirlsImgsCount = document.querySelector('.girls-images-count');
if (elBoysImgsCount) {
    elGirlsImgsCount.innerHTML = `Rasmlar soni: ${picsForGirls.filter((e) => e.id).length} dona`;
    elBoysImgsCount.innerHTML = `Rasmlar soni: ${picsForBoys.filter((e) => e.id).length} dona`;
};

const elMainImage = document.querySelector('.main-image');
if (elMainImage) {

    const elIMageDownloadAnm = document.querySelector('.image-download-animation');
    const elCreationImageDarkFilter = document.querySelector('.image-creation-dark-filter');
    const createImageBtn = document.querySelectorAll('.create-image-btn');
    const elImageForm = document.querySelector('.create-image-form');
    const elNameInput = document.querySelector(".name-input");
    const elDownLoadBtn = document.querySelector(".image-downloader-link");
    const elNameAdderBtn = document.querySelector(".name-adder-btn");
    const elCreationIMageWrapper = document.querySelector('.image-creation-wrapper');
    const elCloseIMageCreationBtn = document.querySelector('.close-image-creation-wrapper-window-btn');
    const elFFChanger = document.querySelector('.font-family-changer');
    const elFFChangerChild = elFFChanger.querySelectorAll('option');

    const fontPromises = [
        new FontFace('Hadnich', 'url(./fonts/Hadnich.ttf)').load(),
        new FontFace('Akhilona', 'url(./fonts/Akhilona.ttf)').load(),
        new FontFace('Poppins', 'url(./fonts/poppins/Poppins-SemiBold.ttf)').load()
    ];

    Promise.all(fontPromises).then((fonts) => {
        fonts.forEach((font) => {
            document.fonts.add(font);
        });

        // font family changer 
        elFFChanger.addEventListener('change', function () {
            elFFChanger.style.fontFamily = elFFChanger.value;
            elDownLoadBtn.removeAttribute('href');
            elDownLoadBtn.classList.remove('download-notification');
            elDownLoadBtn.previousElementSibling.classList.remove('success');
            elNameAdderBtn.previousElementSibling.classList.remove('success');
            elNameAdderBtn.previousElementSibling.disabled = true;
        });

        // font family changer child font family style
        elFFChangerChild.forEach(function (e) {
            e.style.fontFamily = e.value;
        });

        // image creator button
        createImageBtn.forEach(function (e) {
            e.addEventListener('click', function () {
                elDownLoadBtn.removeAttribute('href');
                elNameAdderBtn.previousElementSibling.disabled = true;
                elDownLoadBtn.previousElementSibling.disabled = true;
                elDownLoadBtn.previousElementSibling.classList.add('circle-load-notafication');
                elIMageDownloadAnm.classList.remove('hidden');
                elCreationIMageWrapper.classList.remove('hidden-2');
                elCreationImageDarkFilter.classList.remove('hidden');
                document.body.classList.add('overflow-hidden');

                // set image
                let imgId = Number(e.parentElement.parentElement.getAttribute('key'));

                const foundInformation = imgData.find((idInfo) => idInfo.id === imgId);
                const qualityImg = foundInformation.qualityImgSrc;
                elMainImage.setAttribute('src', `${qualityImg}`);

                // CANVAS 
                let canvas = document.createElement('canvas');
                let context = canvas.getContext("2d");
                canvas.width = '1500';
                canvas.height = '1500';
                let canvasImage = new Image();
                canvasImage.src = `${qualityImg}`
                context.drawImage(canvasImage, 0, 0, canvas.width, canvas.height);

                // form submit
                elImageForm.addEventListener('submit', function (e) {
                    e.preventDefault();
                    if (elDownLoadBtn.previousElementSibling.disabled === false) {
                        elNameAdderBtn.previousElementSibling.classList.add('success');
                        elDownLoadBtn.previousElementSibling.classList.add('success');
                        elDownLoadBtn.classList.add('download-notification');
                        context.font = `100px ${elFFChanger.value}`;
                        let textWidth = 1500 - context.measureText(elNameInput.value).width;
                        let textXLocation = textWidth - textWidth / 2;
                        context.clearRect(0, 0, 1500, 1500);
                        context.drawImage(canvasImage, 0, 0, 1500, 1500);
                        context.fillText(elNameInput.value, textXLocation, 1250);
                        const canvasDataUrl = canvas.toDataURL("image/png");
                        elDownLoadBtn.setAttribute('href', `${canvasDataUrl}`);
                        elNameAdderBtn.previousElementSibling.disabled = false;
                    };
                });
                // img downloader
                elDownLoadBtn.addEventListener('click', function () {
                    if (elNameAdderBtn.previousElementSibling.disabled === false) {
                        setTimeout(function () {
                            defaultForm();
                        }, 300);
                    };
                });
            });
        });
    });
    // main image loader
    elMainImage.onload = () => {
        setTimeout(function () {
            elNameAdderBtn.disabled = false;
            elDownLoadBtn.previousElementSibling.disabled = false;
            // class 
            elIMageDownloadAnm.classList.add('hidden');
            elDownLoadBtn.previousElementSibling.classList.remove('circle-load-notafication');
        }, 300);
    };

    // close this window (escape key)       
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            elCreationIMageWrapper.classList.add('hidden-2');
            elCreationImageDarkFilter.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
            elDownLoadBtn.previousElementSibling.classList.remove('circle-load-notafication');
            elNameAdderBtn.disabled = true;
            defaultForm()
        };
    });

    // close this window (backdropfilter)
    elCreationImageDarkFilter.addEventListener('click', function () {
        elCreationIMageWrapper.classList.add('hidden-2');
        elCreationImageDarkFilter.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        elDownLoadBtn.previousElementSibling.classList.remove('circle-load-notafication');
        elNameAdderBtn.disabled = true;
        defaultForm();
    });

    // close this window (x button) 
    elCloseIMageCreationBtn.addEventListener('click', function () {
        elCreationIMageWrapper.classList.add('hidden-2');
        elCreationImageDarkFilter.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        elDownLoadBtn.previousElementSibling.classList.remove('circle-load-notafication');
        elNameAdderBtn.disabled = true;
        defaultForm();
    });

    // name input 
    elNameInput.addEventListener('input', function () {
        if (elNameInput.value === '') {
            elNameInput.parentElement.parentElement.childNodes[1].classList.remove('success');
        } else {
            elNameInput.parentElement.parentElement.childNodes[1].classList.add('success');
        }
        elNameAdderBtn.previousElementSibling.classList.remove('success');
        elDownLoadBtn.classList.remove('download-notification');
        elDownLoadBtn.previousElementSibling.classList.remove('success');
        elDownLoadBtn.removeAttribute('href');
        elNameAdderBtn.previousElementSibling.disabled = true;
    });
    // form all childs default status function
    function defaultForm() {
        elNameInput.value = '';
        elFFChanger.value = 'Poppins';
        elDownLoadBtn.removeAttribute('href');
        elNameInput.parentElement.parentElement.childNodes[1].classList.remove('success');
        elFFChanger.style.fontFamily = elFFChanger.value;
        elDownLoadBtn.classList.remove('download-notification');
        elDownLoadBtn.previousElementSibling.classList.remove('success');
        elNameAdderBtn.previousElementSibling.classList.remove('success');
        elNameAdderBtn.previousElementSibling.disabled = true;
    };

    // image download with ctrl+enter 
    document.addEventListener("keydown", function (event) {
        if (event.ctrlKey && event.key === "Enter") {
            if (elNameAdderBtn.previousElementSibling.disabled === false) {
                elDownLoadBtn.click();
            };
        };
    });
} else {
    console.error('\x1b[91m%s\x1b[0m', 'No list of images found...');

}