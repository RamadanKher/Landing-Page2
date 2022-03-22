let mainSectionLeft = document.getElementById("mainSectionLeft");
let cardOne = document.getElementById("cardOne");
let cardTow = document.getElementById("cardTow");
let cardThre = document.getElementById("cardThre");
let cardFor = document.getElementById("cardFor");
let cardFive = document.getElementById("cardFive");
// section 1
let mainCaption = document.getElementById("mainCaption");
// section 2 
let itemOneSection2 = document.getElementById("itemOneSection2");
let itemTowSection2 = document.getElementById("itemTowSection2");
let itemthreSection2 = document.getElementById("itemthreSection2");
let itemthreRight = document.getElementById("itemthreRight");
let itemthreLeft = document.getElementById("itemthreLeft");
// counter
const counters = document.querySelectorAll('.value');
const speed = 5000;
let section1 = document.getElementById("section1")
let section3 = document.getElementById("section3")

window.onload =function () {
    mainSectionLeft.style.top="0"
    cardOne.style.top="0"
    cardTow.style.top="0"
    cardThre.style.right="0"
    cardFor.style.right="0"
    cardFive.style.right="0"
}
window.onscroll=function () {
    if (window.scrollY >= section1.offsetTop-250) {
        section1.style.opacity="1"
    }
    
    if (window.scrollY >= mainCaption.offsetTop-250) {
        mainCaption.style.opacity="1"

    }
    if (window.scrollY >= itemOneSection2.offsetTop-50) {
        itemOneSection2.style.left="0"
        itemTowSection2.style.left="0"


    }
    if (window.scrollY >= itemthreSection2.offsetTop-80) {
        itemthreRight.style.right="0"
        itemthreLeft.style.right="0"


    }
    if (window.scrollY >= section3.offsetTop-100) {
        counters.forEach( counter => {
            const animate = () => {
               const value = +counter.getAttribute('akhi');
               const data = +counter.innerText;
              
               const time = value / speed;
              if(data < value) {
                   counter.innerText = Math.ceil(data + time);
                   setTimeout(animate, 1);
                 }else{
                   counter.innerText = value;
                 }
              
            }
            
            animate();
         });


    }
   

}







