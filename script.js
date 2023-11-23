const nav = document.querySelector(".nav");
const btn = document.querySelector(".nav-toggle");

btn.addEventListener("click",()=> {
    const visibility = nav.getAttribute("data-visible");
    console.log(visibility);
    if(visibility === "false") { 
        nav.setAttribute("data-visible","true");
    } else {
        nav.setAttribute("data-visible", "false");
    }
});

const leftArrow = document.querySelector(".left-btn");
const rightArrow = document.querySelector(".right-btn");
const carousal = document.querySelector("img");
let counter = 0;
const images = ["images/blog_post1.jpg", "images/blog_post2.jpg", "images/blog_post3.jpg"]

leftArrow.addEventListener("click",()=> {
   if(counter > 0) {
        counter--;
        carousal.setAttribute("src",images[counter]);
   } else {
        counter = 2;
        carousal.setAttribute("src",images[counter]);
   }
});

rightArrow.addEventListener("click",()=> {
    console.log(counter);
    if(counter >= 2) {
         counter = 0;
         carousal.setAttribute("src",images[counter]);
    } else {
         counter++;
         carousal.setAttribute("src",images[counter]);
    }
 });
