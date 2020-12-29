// const { default: Swiper } = require("Swiper");


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
  //   delay: 1000,
  // },
  speed: 800,
  grabCursor: true,
  slideToClickedSlide: true,
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  // initialSlide: 0,
  // loop: true,
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
  // initialSlide: 0,
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







