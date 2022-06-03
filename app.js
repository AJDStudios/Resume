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
// const app = ()=>{
navSlide();
//}


