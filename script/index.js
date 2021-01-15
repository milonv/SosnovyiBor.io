"use strict"
const burger = document.querySelector(".burger");
const menu = document.querySelector(".header-menu");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("lock");
});


function up() {
  let t;
	let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  if (anchor.getAttribute('href') != '#') {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      burger.classList.remove("active");
      menu.classList.remove("active");
      body.classList.remove("lock");
    })
  }
}

document.addEventListener("click", closeBurger);

function closeBurger(event) {
  const header = document.querySelector(".header");
  let isClickInside = header.contains(event.target);
  console.log(isClickInside);

  if (!isClickInside) {
    menu.classList.remove('active');
    body.classList.remove("lock");
    burger.classList.remove("active");
  }
}

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
  // slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
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

const arr = document.querySelectorAll('.layouts-slide');


const galleryArrow = document.querySelector(".arrow");

galleryArrow.addEventListener("click", () => {
  document.querySelector(".gallery-slider").classList.toggle("open");
  document.querySelector(".gallery-slides > .gallery-slide:nth-child(4) > .gallery-slide4").classList.toggle("open");
  galleryArrow.classList.toggle("open");
  document.querySelector(".gallery-slides > .gallery-slide:nth-child(6)").classList.toggle("open");
});

const galleryArrowUp = document.querySelector(".arrow-up");

galleryArrowUp.addEventListener("click", () => {
  document.querySelector(".gallery-slider").classList.remove("open");
  document.querySelector(".gallery-slides > .gallery-slide:nth-child(4) > .gallery-slide4").classList.remove("open");
  galleryArrow.classList.remove("open");
  document.querySelector(".gallery-slides > .gallery-slide:nth-child(6)").classList.remove("open");
});

const more1 = document.querySelector(".read-1");
const more2 = document.querySelector(".read-2");

more1.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".box").classList.toggle("open");
  document.querySelector(".read-1").classList.add("open");
  document.querySelector(".read-2").classList.add("open");
});
more2.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".box").classList.toggle("open");
  document.querySelector(".read-1").classList.remove("open");
  document.querySelector(".read-2").classList.remove("open");
});

document.addEventListener('DOMContentLoaded', function (){
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
    let formData = new FormData(form);

    if(error===0){
      form.classList.add('_sending');
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData
      });

      if(response.ok){
        let result = await response.json();
        alert(result.message);
        formPreview.innerHTML = '';
        form.reset();
        form.classList.remove('_sending');
      }else{
        alert('Ошибка');
        form.classList.remove('_sending');
      }
    }else{
      alert('Заполните все поля!')
    }
  }

  function formValidate(form){
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for(let index = 0; index < formReq.length; index++){
      const input = formReq[index];

      formRemoveError(input);

      if(input.classList.contains('input-email')){
        if(emailTest(input)){
          formAddError(input);
          error++;
        }
      }else{
        if(input.value === ''){
          formRemoveError(input);
          error++;
        }
      }
    }
    return error;
  }
  function formAddError(input){
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input){
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
  function emailTest(input){
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
  }
})
