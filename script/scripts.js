const hamburger = document.querySelector(".hamburger");
console.log(hamburger);
const navMenu = document.querySelector(".nav-menu");
console.log(navMenu);
hamburger.addEventListener("click", mobileMenu);
function mobileMenu(){
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
	
}

const navLink = document.querySelectorAll(".nav-menu");
navLink.forEach(n => n.addEventListener("click",closeMenu));
function closeMenu(){
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}