document.addEventListener("DOMContentLoaded", function () {
	let slides = document.getElementsByClassName("carousel-1");
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
	let slides = document.getElementsByClassName("carousel-1");
	if(n>slides.length){
		slideIndex=1;
	}
	if(n<1){
		slideIndex = slides.length;
	}
	for(i=0;i<slides.length;i++){
		slides[i].style.display = "none";
	
	}
	slides[slideIndex-1].style.display = "flex";
};
const coursedata = [
	{title: "lorem ipsum",
	description: "This is very nice course , you learn maths and machine learning using it. Just register for this awesome course this is very musch nice and affordabdle you willlearns a  lot from this very nice course.",
	img: "./assets/undraw_3.svg"},
	{title: "lorem ipsum",
	description: "This is very nice course , you learn maths and machine learning using it. Just register for this awesome course this is very musch nice and affordabdle you willlearns a  lot from this very nice course.",
	img: "./assets/undraw_4.svg"},
	{title: "lorem ipsum",
	description: "This is very nice course , you learn maths and machine learning using it. Just register for this awesome course this is very musch nice and affordabdle you willlearns a  lot from this very nice course.",
	img: "./assets/undraw_4.svg"},
	{title: "lorem ipsum",
	description: "This is very nice course , you learn maths and machine learning using it. Just register for this awesome course this is very musch nice and affordabdle you willlearns a  lot from this very nice course.",
	img: "./assets/undraw_9.svg"},
	{title: "lorem ipsum",
	description: "This is very nice course , you learn maths and machine learning using it. Just register for this awesome course this is very musch nice and affordabdle you willlearns a  lot from this very nice course.",
	img: "./assets/undraw_7.svg"},
	{title: "lorem ipsum",
	description: "This is very nice course , you learn maths and machine learning using it. Just register for this awesome course this is very musch nice and affordabdle you willlearns a  lot from this very nice course.",
	img: "./assets/undraw_5.svg"}
	
];
const container = document.getElementById('programs');
coursedata.forEach((result,idx) =>{
	const card = document.createElement('div');
	card.classList = 'program-body';
	const text1 = document.createElement('div');
	text1.classList = 'program-text';
	text1.innerHTML = `<h1>${result.title}</h1><p>${result.description}`;
	const img = document.createElement('img');
	img.classList = 'program';
	img.src = result.img;
	const a = document.createElement('a');
	a.href = "#";
	a.innerHTML = `<button class = "register-button">Register</button>`;
	text1.appendChild(a);
	card.appendChild(img);
	card.appendChild(text1);
	
	container.appendChild(card);
	
});