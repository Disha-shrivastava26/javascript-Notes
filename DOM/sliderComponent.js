const allSlides = document.querySelectorAll('.slide');

const leftBtn = document.querySelector('.slider__btn--left');
const rightBtn = document.querySelector('.slider__btn--right');

const dotContainer = document.querySelector('.dots');

const slider = document.querySelector('.slider');

let currentSlide = 0;
const maxSlide = allSlides.length;

slider.style.overflow = 'visible';


const goToSlide = function (slide) {
  allSlides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - currentSlide)}%)`),
  );
};

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
};

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
};

rightBtn.addEventListener('click', nextSlide);
leftBtn.addEventListener('click', prevSlide);

// keyboard event

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});

