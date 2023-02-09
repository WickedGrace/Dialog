const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');

sliderItems.forEach(function (slide, index) {
  slide.classList.add('hidden)');

  if (index !== 0) slide.classList.add('hidden');

  slide.dataset.index = index;

  sliderItems[0].setAttribute('data-active', '');

  slide.addEventListener('click', function () {
    showNextSlide('next');
  });
});

btnNext.onclick = function () {
  showNextSlide('next');
};

btnPrev.onclick = function () {
  showNextSlide('prev');
};

function showNextSlide(direction) {
  const currentSlide = slider.querySelector('[data-active]');
  const currentSlideIndex = Number(currentSlide.dataset.index);
  currentSlide.classList.add('hidden');
  currentSlide.removeAttribute('data-active');

  let nextSlideIndex;

  if (direction === 'next') {
    nextSlideIndex =
      currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
  } else if (direction === 'prev') {
    nextSlideIndex =
      currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
  }

  const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`);
  nextSlide.classList.remove('hidden');
  nextSlide.setAttribute('data-active', '');
}

// const sliderImages = document.querySelectorAll('.carousel__img');
// slider = document.querySelector('#slider');
// sliderControls = document.querySelectorAll('.carousel__bullets');
// btnPrev = document.querySelector('#btnPrev');
// btnNext = document.querySelector('#btnNext');

// let sliderCount = 0;

// function showSlide() {
//   sliderWidth = document.querySelector('.carousel__img').offsetWidth;
//   slider.style.width = sliderWidth * sliderImages.length + 'px';
//   sliderImages.forEach((item) => (item.style.width = sliderWidth + 'px'));

//   rollSlider();
// }

// showSlide();

// function prevSlide() {
//   sliderCount--;
//   sliderCount < 0 ? (sliderCount = sliderImages.length - 1) : null;
//   rollSlider();
//   thisSlide(sliderCount);
// }
// function nextSlide() {
//   sliderCount++;
//   sliderCount >= sliderImages.length ? (sliderCount = 0) : null;
//   rollSlider();
//   thisSlide(sliderCount);
// }

// btnPrev.addEventListener('click', prevSlide);
// btnNext.addEventListener('click', nextSlide);

// function rollSlider() {
//   slider.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
// }

// function thisSlide(index) {
//   sliderControls.forEach(
//     (item) => item.classList.remove('.bullet__item--active'),
//     sliderControls[index].classList.add('.bullet__item--active')
//   );
// }

// // sliderControls.forEach(control, (index) => {
// //   control.addEventListener('click', () => {
// //     sliderCount = index;
// //     thisSlide(sliderCount);
// //     rollSlider();
// //   });
// // });

// const slider = document.querySelector('.slider');
// btnPrev = document.querySelector('#btnPrev');
// btnNext = document.querySelector('#btnNext');
// controls = document.querySelectorAll('.bullet__item');

// let position = 0;
// controlIndex = 0;

// const nextSlide = () => {
//   position < (controls.length - 1) * 1240 ? (position += 1240) : (position = 0);

//   slider.style.left = position + 'px';
// };
// // const nextSlide = () => {
// //   position += 1440;
// //   slider.style.left = -position + 'px';
// // };

// btnNext.addEventListener('click', nextSlide);
// // btnPrev.addEventListener('click', prevSlide);
