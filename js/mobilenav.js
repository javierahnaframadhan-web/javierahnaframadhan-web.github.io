const hamburgerbtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const hamburgerIcon = document.getElementById("iconHamburger");
const closeIcon = document.getElementById("iconClose");
 
let isOpen = false;

hamburgerbtn.addEventListener("click", ()=> {
    isOpen = !isOpen;

    if(isOpen) {

        mobileMenu.classList.remove("translate-x-full");
        mobileMenu.classList.add("translate-x-0");

        hamburgerIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
    }else{
        mobileMenu.classList.remove("translate-x-0");
        mobileMenu.classList.add("translate-x-full");

        hamburgerIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
        
        document.body.style.overflow = "";
    }
})