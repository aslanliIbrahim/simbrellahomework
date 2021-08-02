var navbar = document.querySelector(".navbar")


function navbarFixed(){
    
   if( window.scrollY >= 100){
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }
}
window.addEventListener('scroll',navbarFixed)