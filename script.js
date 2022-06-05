const mover = document.querySelector('.mover');
const sliders = document.querySelectorAll('.moved');
const height = sliders[0].clientHeight;

let idx = 0;

function moveSlides(){
    idx++;
    mover.style.transform= `translateY(-${height * idx}px)`;
    mover.style.transition = 0.5 + 's' ;
    if(idx >= 3) {
        idx=0
    }
    console.log(idx)
}

//setInterval(moveSlides,5000)

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click',()=>{
    menu.classList.toggle('active')
})