const burger = document.querySelector(".burger");
const menu = document.querySelector(".header-menu");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("lock");
});

new Swiper('.home-slider', {
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  // autoplay: {
  //   delay: 3500,
  // },
  speed: 800,
  grabCursor: true,
  slideToClickedSlide: true,
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
});

new Swiper('.layouts-slider', {
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  autoplay: {
    delay: 1000,
  },
  speed: 800,
  grabCursor: true,
  slideToClickedSlide: true,
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    }
  },
  loop: true,
});

function initMap() {
  const el = document.getElementById("map");
  const options = {
    zoom: 17,
    center: {lat: 50.4904611, lng: 30.6788559}
  }
  const myMap = new google.maps.Map(el, options);

  addMarker({lat: 50.4904611, lng: 30.6788559});
  addMarker({lat: 50.4906317, lng: 30.6796814});
  

  function addMarker(coordinates) {
    const marker = new google.maps.Marker({
      position: coordinates,
      map: myMap
    })
  }
}

const galleryArrow = document.querySelector(".arrow");

galleryArrow.addEventListener("click", () => {
  document.querySelector(".gallery-slider").classList.toggle("open");
  document.querySelector(".birds11").classList.toggle("open");
  document.querySelector(".gallery-slides > .gallery-slide:nth-child(4) > .gallery-slide4").classList.toggle("open");
  galleryArrow.classList.toggle("open");
  document.querySelector(".gallery-slides > .gallery-slide:nth-child(6)").classList.toggle("open");
});

const galleryArrowUp = document.querySelector(".arrow-up");

galleryArrowUp.addEventListener("click", () => {
  document.querySelector(".gallery-slider").classList.remove("open");
  document.querySelector(".birds11").classList.remove("open");
  document.querySelector(".gallery-slides > .gallery-slide:nth-child(4) > .gallery-slide4").classList.remove("open");
  galleryArrow.classList.remove("open");
  document.querySelector(".gallery-slides > .gallery-slide:nth-child(6)").classList.remove("open");
});

const more1 = document.querySelector(".read-1");
const more2 = document.querySelector(".read-2");

more1.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".box").classList.toggle("open");
});
