const navbar=document.querySelector(".navbar");
const menubar=document.getElementById("menu-btn");
menubar.onclick=()=>{
    menubar.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};
menubar.onscroll=()=>{
    menubar.classList.remove("fa-times");
    navbar.classList.remove("active");
};


// hero section swiper slider initialization

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor:true,
    loop:true,
    centeredSlides:true,  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // dark to light theme changer

const theme_changer=document.getElementById("theme-changer");
const theme_changer_icon=document.getElementById("theme-changer-icon");
  theme_changer.onclick=function(){
    document.body.classList.toggle("light-theme");
    theme_changer_icon.classList.toggle("fa-sun");
  }


  // blog posts slider
  var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    effect: "slide",
    grabCursor:true,
    loop:true,
    autoplay:{
      delay:7500,
      disableOnInteraction:false,
    },
    breakpoints:{
      0:{
        slidesPerView:1,
      },
      768:{
        slidesPerView:2,
      },
      991:{
        slidesPerView:3,
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });