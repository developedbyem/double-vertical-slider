// const sliderContainer = document.querySelector(".slider-container");

const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");

const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

// let activeSlideIndex = 0;

// slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// upButton.addEventListener("click", function () {
//   const sliderHeight = sliderContainer.offsetHeight;
//   activeSlideIndex++;
//   if (activeSlideIndex > slidesLength - 1) {
//     activeSlideIndex = 0;
//   }

//   slideRight.style.transform = `translateY(-${
//     activeSlideIndex * sliderHeight
//   }px)`;
//   slideLeft.style.transform = `translateY(${
//     activeSlideIndex * sliderHeight
//   }px)`;
// });
// downButton.addEventListener("click", function () {
//   const sliderHeight = sliderContainer.offsetHeight;
//   activeSlideIndex--;
//   if (activeSlideIndex < 0) {
//     activeSlideIndex = slidesLength - 1;
//   }

//   slideRight.style.transform = `translateY(-${
//     activeSlideIndex * sliderHeight
//   }px)`;
//   slideLeft.style.transform = `translateY(${
//     activeSlideIndex * sliderHeight
//   }px)`;
// });

slideLeft.style.top = `-${(slidesLength - 1) * 100}%`;

let counter = 0;

function moveUp() {
  counter++;
  moveSlides();
}

function moveDown() {
  counter--;
  moveSlides();
}

function moveSlides() {
  if (counter > slidesLength - 1) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slidesLength - 1;
  }
  slideRight.style.transform = `translateY(-${counter * 100}%)`;
  slideLeft.style.transform = `translateY(${counter * 100}%)`;
}
upButton.addEventListener("click", moveUp);
downButton.addEventListener("click", moveDown);
