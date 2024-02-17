const nav_bar = document.querySelector(".mobile-navbar-btn");
const header_Element=document.querySelector(".header");
const port_btn = document.querySelector(".port-btn");
const port_btns=document.querySelectorAll(".port-btns");
const port_img=document.querySelectorAll(".img-overlay");
nav_bar.addEventListener('click',()=>{
   header_Element.classList.toggle('active');
})

// swiper code
 new Swiper(".mySwiper", {
   slidesPerView: 2,
   spaceBetween: 30,
    autoplay:{
      delay:2500,
       disableOnInteraction:false,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});
const myjsmedia=(widthSize)=>{
   if(widthSize.matches){
      new Swiper(".mySwiper", {
         slidesPerView: 1,
         spaceBetween: 30,
         
      });
   }
   else{
      new Swiper(".mySwiper", {
         slidesPerView: 2,
         spaceBetween: 30,
          
      });
   }

}
const widthSize=window.matchMedia('(max-width: 780px)');
//call listner function at run time
myjsmedia(widthSize);
widthSize.addEventListener("change",myjsmedia);
// scroll to top button
const hero=document.querySelector(".section-hero");
const footerElement=document.querySelector(".section-footer");
const scrollElement=document.createElement("div");
scrollElement.classList.add("scrollTop-style");
scrollElement.innerHTML =`<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`
footerElement.after(scrollElement);
const scrollTop=()=>{
 hero.scrollIntoView({behavior:"smooth"});
}
scrollElement.addEventListener("click",scrollTop);


//typed js
const typed =new Typed('.multiple-text',{
   strings:['Frontend Developer','Backend Developer','Full Stack Web Developer'],
   typeSpeed:100,
   backSpeed:100,
   backDelay:1000,
   loop:true
});

