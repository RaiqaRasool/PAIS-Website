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


// swiper slider initialization

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

  theme_changer.onclick=function(){
    document.body.classList.toggle("light-theme");
  }