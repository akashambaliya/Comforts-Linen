
// <=============================announcement bar=============================>

const announcementElement = document.getElementById("announcement");

const announcements = [
  "New products available! Check them out!",
  "Free shipping on orders over $50!",
  "Limited-time sale on select items!",
];

function changeAnnouncement() {
  const randomIndex = Math.floor(Math.random() * announcements.length);
  const newAnnouncement = announcements[randomIndex];
  announcementElement.textContent = newAnnouncement;
}

changeAnnouncement(); // Change initially on page load

// Optionally, change the content periodically
setInterval(changeAnnouncement, 2000); // Change every 2 seconds

// <=============================Slider =============================>

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function updateSlider() {
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

setInterval(nextSlide, 2000);

// <======================Menu===========================>

function AccountMenu(){
  var res_nav = document.getElementById('res_nav');

  if(res_nav.style.display === 'none'){
    res_nav.style.display = 'block';
  }else{
    res_nav.style.display = 'none';
  }
}


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:20 ,
      nav:true,
    //   stagePadding:50,
      responsive:{
          320:{
              reviews:1
          },
          600:{
              reviews:2
          },
          900:{
              reviews:3
          }
      }
  });
});



AOS.init({
  offset: 300,
  duration: 500,

});