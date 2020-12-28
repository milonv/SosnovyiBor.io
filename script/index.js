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

function toggle_show(id) {
	document.getElementById(id).style.display = document.getElementById(id).style.display == 'none' ? 'block' : 'none';
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

// let locations = [
//   {"name": "Random 1", "lat":"48.8532774","lng":"2.2438649", "is_exact": true},
//   {"name": "Random 2", "lat":"48.8413031","lng":"2.3106412", "is_exact": true}
// ];

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 50.4906317, lng: 30.6774927 };
  // The map, centered at Uluru
  const map = new google.maps.Map(
    document.getElementById("map"), {
      zoom: 17,
      center: uluru, uluru2
    }
  );

  // The marker, positioned at Uluru
  // const marker = new google.maps.Marker({
  //   position: uluru, uluru2,
  //   map: map,
  // });

  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(location.lat,  location.lng),
    title: location.name, 
    map: map
  });
}

// function initMap() {
//   // The location of Uluru
//   const uluru = { lat: 50.4906317, lng: 30.6774927 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(
//     document.getElementById("map"), {
//       zoom: 17,
//       center: uluru, uluru2
//     }
//   );

//   // The marker, positioned at Uluru
//   // const marker = new google.maps.Marker({
//   //   position: uluru, uluru2,
//   //   map: map,
//   // });

//   const marker = new google.maps.Marker({
//     position: new google.maps.LatLng(location.lat,  location.lng),
//     title: location.name, 
//     map: map
//   });
// }

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







