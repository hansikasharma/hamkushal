document.addEventListener("DOMContentLoaded", function () {
	let slides = document.getElementsByClassName("testimonial-main");
	for(i=1;i<slides.length;i++){
		slides[i].style.display = "none";
		
	}
},false);
let slideIndex = 1;
function plusSlides(n){
	showSlides(slideIndex +=n );
}
function showSlides(n){
	let i;
	let slides = document.getElementsByClassName("testimonial-main");
	if(n>slides.length){
		slideIndex=1;
	}
	if(n<1){
		slideIndex = slides.length;
	}
	for(i=0;i<slides.length;i++){
		slides[i].style.display = "none";
	
	}
	slides[slideIndex-1].style.display = "block";
};