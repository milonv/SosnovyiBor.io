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
  autoplay: {
    delay: 3500,
  },
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

document.addEventListener('DOMContentLoaded', function (){
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
    let formData = new FormData(form);

    if(error===0){
      form.classList.add('_sending');
      let response = await fetch(sendEmail.php, {
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
      alert('Заполните обязательные поля!')
    }
  }

  function formValidate(){
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for(let index = 0; index < formReq.length; index++){
      const input = formReq[index];

      formRemoveError(input);
      if(input.classList.contains('input-email')){
        if(emailTest(input)){
          formAddError(input);
          error++;
        }else{
          if(input.value === ''){
            formRemoveError(input);
            error++;
          }
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
    return /^w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
  }
})
