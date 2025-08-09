const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
  overlay.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", toggleMenu);
});