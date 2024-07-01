const mover = document.querySelector('.mover');
const sliders = document.querySelectorAll('.moved');
const height = sliders[0].clientHeight;
let idx = 0;

function moveSlides() {
    idx++;
    mover.style.transform = `translateY(-${height * idx}px)`;
    mover.style.transition = 0.5 + 's';
    if (idx === sliders.length) {
        idx = 0
        mover.style.transform = `translateY(-${height * idx}px)`;
        mover.style.transition ='none';
    }
}

setInterval(moveSlides,3000)

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
})

document.addEventListener('scroll', () => {
    menu.classList.remove('active');
})

const popUp = document.querySelector('.pop-up');
const background = document.querySelector('.back-ground');
const body= document.querySelector('body')
const options = {
    threshold: 1,
}
const neko = new IntersectionObserver(function (els) {
    els.forEach(el => {
        if (el.isIntersecting) {
            el.target.classList.add('active');
            background.classList.add('active')
            close();
            body.style.overflowY='hidden'
        }
    })


}, options)

neko.observe(popUp)

function close() {
    const close = popUp.querySelector('.close-popUp');
    close.addEventListener('click', () => {
        popUp.classList.remove('active')
        neko.unobserve(popUp);
        background.classList.remove('active')
        body.style.overflowY='scroll'
    })
}

window.addEventListener('scroll', nonscroll);
