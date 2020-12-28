// const { default: Swiper } = require("Swiper");


const burger = document.querySelector(".burger");
const menu = document.querySelector(".header-menu");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("lock");
});

//еще 

const link = document.querySelector(".link");

link.onclick = function(e){
  e.preventDefault();
  const box = document.querySelector(".box"),
  line = document.querySelector(".line-project");

  box.classList.add("open");
  link.classList.add("open");
  line.classList.add("open");
}


// new Swiper('.home-slider', {
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     draggable: true
//   },
//   // autoplay: {
//   //   delay: 4000,
//   // },
//   grabCursor: true,
//   slideToClickedSlide: true,
// });
//ползунок 
// setInterval(function(){
//   document.querySelector(".home-line__title").classList.remove("active")
//   console.log(4)
// },2000)

// setInterval(function(){
//   document.querySelector(".home-line__title").classList.add("active")
//   console.log(3)
// },3000)


// let counter = 1;
// setInterval(function(){

//   document.getElementById('radio' + counter).checked = true;
//   counter++;
//   if(counter > 3){
//     counter = 1;
//   }

// },2000)

// function addRemoveClass() {
//   var delay = 3000; // milliseconds
//   setTimeout(function() {
//     document.querySelector(".modern-douplex").classList.toggle("active");
//       addRemoveClass();
//       console.log('open');
//       console.log('close');
//   }, delay);
// };
// addRemoveClass();

// setInterval(function(){
//   document.querySelector(".modern-douplex").classList.add("active")
// },3000)

// setInterval(function(){
//   document.querySelector(".modern-douplex").classList.remove("active")
//   console.log(4)

// },00)

// setInterval(function(){
//   document.querySelector(".security").classList.add("active")
// },5000)

// setInterval(function(){
//   document.querySelector(".security").classList.remove("active")
//   console.log(6)
// },5100)

// setInterval(function(){
//   document.querySelector(".location").classList.add("active")
// },7000)

// setInterval(function(){
//   document.querySelector(".location").classList.remove("active")
//   console.log(8)

// },7100)
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

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 50.4906317, lng: 30.6774927 };
  const uluru2 = { lat: 50.4904611, lng: 30.6766672 };
  // The map, centered at Uluru
  const map = new google.maps.Map(
    document.getElementById("map"), {
      zoom: 17,
      center: uluru, uluru2
    }
  );

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru, uluru2,
    map: map,
  });
}






