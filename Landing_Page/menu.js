document.addEventListener("DOMContentLoaded", function(){
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("Mobile-Menu");

    hamburger.addEventListener("click", function(){
       mobileMenu.classList.toggle("active") // can also us "open" here
    }); 
});