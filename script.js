// Navigation scroll
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const sections = document.querySelectorAll('section');

document.addEventListener('scroll', () => {
  const currentPosition = window.scrollY;
  
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - navbarHeight;
    const sectionHeight = section.offsetHeight;
    
    if (currentPosition >= sectionTop && currentPosition < sectionTop + sectionHeight) {
      navbar.querySelector('a[href*=' + section.id + ']').classList.add('active');
    } else {
      navbar.querySelector('a[href*=' + section.id + ']').classList.remove('active');
    }
  });
});


// Live Counter
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / 200;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});


// Banner Slider
const slider = document.querySelector('.banner-slider');
const slides = slider.querySelectorAll('.slide');
const dots = slider.querySelectorAll('.dot');

let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = index;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');

    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  });
});
