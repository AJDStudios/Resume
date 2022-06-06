// functions
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

// if you intend to have multiple elements, wrap them in this. 
//const app = () => {
    navSlide();
 //}

//make sure this is only effecting the Portfolio
const texts = ["Portfolio", "Designer", "Indie Game Dev", "Composer", "Writer", "Freelancer", "Entrepeneur"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if (count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".openportfolio").textContent = letter;
    if (letter.length === currentText.length){
        count++;
        //remember computer's are not logical... I guess it was looking for the next int in the next word.
        index = 0;
    }
    setTimeout(type, 400);

})();



//// dark/light toggle
const light = document.getElementById('light');

light.addEventListener('change', () => {
	document.body.classList.toggle('light');
});

