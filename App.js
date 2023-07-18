
/*=========== Button Scroll Up =================*/
let calcScrollValue =()=>{
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

    if(pos > 100){
      scrollProgress.style.display = "grid";
    }else{
      scrollProgress.style.display = "none"
    }
    scrollProgress.addEventListener("click", ()=>{
      document.documentElement.scrollTop = 0;
    })
    scrollProgress.style.background = `conic-gradient(#6c63ff ${scrollValue}%, #2e3267 ${scrollValue}%)`
}
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
//Change navbar Style onScroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
});

// Show Hide Faq Answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(item =>{
    item.addEventListener("click",()=>{
        item.classList.toggle('open');
        // Change icon
        const icon = item.querySelector(".faq_icon i");
           if(icon.className === 'uil uil-arrow-right'){
            icon.className = 'uil uil-arrow-down';
           } else{
            icon.className = 'uil uil-arrow-right';
           }
        }
    )
});

// Swiper Testimonials
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });

  // Show Menu Navbar
  const menu = document.querySelector('.nav_menu');
  const menuBtn = document.querySelector('#open-menu-btn');
  const closeBtn = document.querySelector('#close-menu-btn');

  menuBtn.addEventListener('click',()=>{
    menu.style.display = "block";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
  });

  // Close Menu Navbar
const closeNav = ()=>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener("click",closeNav);

// Counter

let valueDisplay = document.querySelectorAll('.num');
let interval = 1000;
valueDisplay.forEach(item =>{
  let startValue = 0;
  let endValue = parseInt(item.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(()=>{
    startValue += 1;
    item.textContent = startValue
    if(startValue == endValue){
      clearInterval(counter);
    }
  },duration)
});

//Courses Filter ...

let buttons = document.querySelectorAll(".switcher button");
let products = document.querySelectorAll(".course ");
buttons.forEach(button => {
  button.addEventListener("click", () =>{
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    products.forEach(product =>product.style.display ="none");
    document.querySelectorAll(button.dataset.cat).forEach(ele => ele.style.display = "block");
  });
});

// Search input Courses
function search(){
  let searchBar = document.querySelector(".course-input").value.toUpperCase(); 
  let courses = document.querySelectorAll(".course") 
  let title = document.querySelectorAll(".course_info .title ") 
  for(let i = 0; i<title.length;i++){
    if(title[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0){
      courses[i].style.display = ""
    }else{
      courses[i].style.display = "none"
    }
  }

  
}