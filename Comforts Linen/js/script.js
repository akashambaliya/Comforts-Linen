
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

