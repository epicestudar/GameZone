let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
    slider[currentSlide].classList.add('on');
}

function nextSlider() {
    hideSlider()
        if(currentSlide === slider.length - 1) {
            currentSlide = 0;
        }
        else {
            currentSlide++;
        }
        showSlider()
}

function prevSlider() {
    hideSlider()
        if(currentSlide === 0) {
            currentSlide = slider.length -1;
        }
        else {
            currentSlide--;
        }
        showSlider()
}

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

console.log(slider)



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

