let navbar = document.querySelector(".navbar__container");

let open = document.querySelector(".mobile__menu");

open.addEventListener('click', function(){
    navbar.classList.toggle("active");
})