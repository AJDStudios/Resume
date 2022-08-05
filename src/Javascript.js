
// this is now priority one
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', () => {
	// toggles the nav
	nav.classList.toggle('nav-active');
		

    	// for text animation
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = ''
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`; 
			}       
		});
	// for burger animation
	burger.classList.toggle('toggle');

	}); 
}

navSlide();

//make sure this is only effecting the Portfolio
//const texts = ["Portfolio", "Designer", "Indie Game Dev", "Composer", "Writer", "Freelancer", "Entrepeneur"];
//let count = 0;
//let index = 0;
//let currentText = "";
//let letter = "";

//(function type(){

//    if (count === texts.length){
//        count = 0;
//    }
//    currentText = texts[count];
//    letter = currentText.slice(0, ++index);

//    document.querySelector(".openportfolio").textContent = letter;
//    if (letter.length === currentText.length){
//        count++;
        //remember computer's are not logical... I guess it was looking for the next int in the next word.
//        index = 0;
//    }
//    setTimeout(type, 400);

//})();

// dark/light toggle
//const chk = document.getElementById('chk');

//chk.addEventListener('change', () => {
//    document.body.classList.toggle('light');
//});


// works, but cuts off content on mobile size
window.onscroll = function() {myFunction()};

//!PRIORITY 1B
// grabs the nav
var navbar = document.getElementById("navbar");

// grabs its offset position
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Carousel starts 
//const carouselSlide = document.querySelector('.carousel-slide');
//const carouselImages = document.querySelectorAll('.carousel-slide img');

//buttons
//const prevBtn = document.querySelector('#prevBtn');
//const nextBtn = document.querySelector('#nextBtn');

//carousel counter
//let counter = 1;
//let size = carouselImages[0].clientWidth;

//carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

//button listeners

//nextBtn.addEventListener('click', () => {

//    if (counter >= carouselImages.length -1) return; 
//    carouselSlide.style.transition = "transform 1s ease-in-out";
//    counter++;
//    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    
//});

//prevBtn.addEventListener('click', () => {

//    if (counter <= 0) return; 
//    carouselSlide.style.transition = "transform 1s ease-in-out";
 //   counter--;
   // carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    
//});

//carouselSlide.addEventListener('transitionend', () => {
  //  if(carouselImages[counter].id === 'lastClone') {
    //carouselSlide.style.transition = "none";
    //counter = carouselImages.length -2 ; 
    //carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    //}

    //if(carouselImages[counter].id === 'firstClone') {
      //  carouselSlide.style.transition = "none";
        //counter = carouselImages.length - counter; 
        //carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    //}
//});

//experimenting
//window.addEventListener('resize', () => {
  //  carouselSlide.style.transition = "none";
    //size = carouselImages[0].clientWidth;
    //carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
//});

//window.onresize = () => {
  //  size = carouselImages[0].clientWidth; 
    //carouselSlide.style.transition = "none";
   //carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  //};


