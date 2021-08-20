const sliderSmallPhotos = document.querySelector('.photo_small_slider');
const photos = document.querySelectorAll('.photo_small');

let activePhoto = document.querySelector('.active_photo');
let activeBigPhoto = document.querySelector('.photo_big--active');
// устанавливаем prev и next отсосительно элемента с классом active_photo из photo_small_slider
//nextPhoto
let nextPhoto = activePhoto.nextElementSibling;
let neNextPhoto = nextPhoto.nextElementSibling;
//prevPhoto
let prevPhoto = activePhoto.previousElementSibling;
let prePrevPhoto = prevPhoto.previousElementSibling;
// для кроссбраузерности:
let nextSibling = activePhoto.nextElementSibling;
while (nextSibling && nextSibling.nodeType != 1) {
    nextSibling = nextSibling.nextElementSibling
}

// ___________________________________________

// SLIDER
const slidesSmall = photos;
const totalSlides = slidesSmall.length;

const slides = document.querySelectorAll('.photo_big');

let positionActiveSmallPhoto = Array.prototype.slice.call(photos).indexOf(activePhoto);
let positionActiveBigPhoto = Array.prototype.slice.call(slides).indexOf(activeBigPhoto);

let updateStyles = () => {
    activePhoto = document.querySelector('.active_photo');

    nextPhoto = activePhoto.nextElementSibling;
    if (nextPhoto != null) {
        neNextPhoto = nextPhoto.nextElementSibling;
    }

    prevPhoto = activePhoto.previousElementSibling;
    if (prevPhoto != null) {
        prePrevPhoto = prevPhoto.previousElementSibling;
    }

    // prevPhoto
    if (prevPhoto != null) {
        prevPhoto.getElementsByTagName('img')[0].style.margin = '0 0 15px 0';
        prevPhoto.style.display = '';
        prevPhoto.style.top = '';
        prevPhoto.style.position = '';
    }
    else if (prevPhoto == null) {
        nextPhoto.getElementsByTagName('img')[0].style.margin = '15px 0 0 0';
        neNextPhoto.getElementsByTagName('img')[0].style.margin = '15px 0 0 0';
    }
    // nextPhoto
    if (neNextPhoto != null) {
        nextPhoto.getElementsByTagName('img')[0].style.margin = '15px 0 0 0';
        neNextPhoto.style.display = '';
        neNextPhoto.style.bottom = '';
        neNextPhoto.style.position = '';
    }
    else if (neNextPhoto == null) {
        prevPhoto.getElementsByTagName('img')[0].style.margin = '0 0 15px 0';
        prePrevPhoto.getElementsByTagName('img')[0].style.margin = '15px 0 0 0';
        nextPhoto.getElementsByTagName('img')[0].style.margin = '15px 0 0 0';
    }
}
updateStyles();

for (let i = 0; i < photos.length; i++) {
    photos[i].addEventListener("click", function () {
        let current = document.querySelectorAll('.active_photo');
        current[0].className = current[0].className.replace(" active_photo", '');
        this.className += " active_photo";

        updateStyles();

        if (activePhoto) {
            if (prevPhoto == null) {
                updateSlidePosition();
            }
            else if (prevPhoto != null) {
                prevPhoto.addEventListener("click", function () {
                    updateSlidePosition();
                    moveToPrevSlidesSmall(); // добавить логику рулетки вверх

                });
            }

            if (nextPhoto == null) {
                updateSlidePosition();
            }
            else if (nextPhoto != null) {
                nextPhoto.addEventListener("click", function () {
                    updateSlidePosition();
                    moveToNextSlidesSmall(); // добавить логику рулетки вниз
                });
            }


        } //if (activePhoto)

    });
}

//_________________________________________________________________

//связываем Small Slider c Big Slider
nextPhoto.addEventListener("click", function () {
    updateSlidePosition();
    moveToNextSlidesSmall(); // добавить логику рулетки вперёд
});
prevPhoto.addEventListener("click", function () {
    updateSlidePosition();
    moveToPrevSlidesSmall(); // добавить логику рулетки назад
});

//__________________________________________________________________

// Small Slider

let moveToNextSlidesSmall = () => {

    activePhoto = document.querySelector('.active_photo');

    prevPhoto = activePhoto.previousElementSibling;
    prePrevPhoto = prevPhoto.previousElementSibling;

    nextPhoto = activePhoto.nextElementSibling;

    if (nextPhoto != null) {
        nextPhoto.style.display = '';
        nextPhoto.style.bottom = '';
        nextPhoto.style.position = '';
    }

    if (prePrevPhoto != null) {
        prePrevPhoto.style.display = 'none';
        prePrevPhoto.style.top = '-100%';
        prePrevPhoto.style.position = 'absolute';
    }

    updateSlidePosition();
}

let moveToPrevSlidesSmall = () => {

    activePhoto = document.querySelector('.active_photo');

    nextPhoto = activePhoto.nextElementSibling;
    neNextPhoto = nextPhoto.nextElementSibling;

    if (prevPhoto != null) {
        prevPhoto.style.display = '';
        prevPhoto.style.top = '';
        prevPhoto.style.position = '';
    }
    else if (prevPhoto === null) {
        neNextPhoto.style.display = '';
        neNextPhoto.style.bottom = '';
        neNextPhoto.style.position = '';
    }

    else if (neNextPhoto != null) {
        neNextPhoto.style.display = 'none';
        neNextPhoto.style.bottom = '-100%';
        neNextPhoto.style.position = 'absolute';
    }

    updateSlidePosition();
}


// Big Slider

let updateSlidePosition = () => {
    positionActiveSmallPhoto = Array.prototype.slice.call(photos).indexOf(activePhoto);
    positionActiveBigPhoto = positionActiveSmallPhoto;

    for (let slide of slides) {
        slide.classList.remove('photo_big--active');
    }
    slides[positionActiveBigPhoto].classList.add('photo_big--active');
}

// ______________________________