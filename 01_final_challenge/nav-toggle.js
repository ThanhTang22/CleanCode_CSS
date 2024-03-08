const navToggle = document.querySelector('.nav-toggle');
const navHidden = document.querySelector('.nav-hidden');

navToggle.addEventListener("click", function(){
    navHidden.classList.toggle('nav-visible');
})