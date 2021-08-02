var contanier = document.querySelector(".contanier")



function navbarFixed(){

    if(window.scrolly >= 100){
        contanier.classList.add('sticky')
        console.log('salam')
    }
    else{
        contanier.classList.remove('sticky')
        console.log("salam2")
    }
}
window.addEventListener('scroll', navbarFixed)