const hamb = document.querySelector('.btn-hamb');


hamb.addEventListener("click", () => {
    const menu = document.querySelector('.menu');
    const line1 = document.querySelector('.a');
    const line2 = document.querySelector('.b');
    const line3 = document.querySelector('.c')

    menu.classList.toggle('active');
    line1.classList.toggle('active');
    line2.classList.toggle('active');
    line3.classList.toggle('active');

});

const anima = document.querySelectorAll("[data-anima]");

function animaScroll(){
    const topPage = window.pageYOffset + window.innerHeight;
    anima.forEach((a) => {
        if(topPage > a.offsetTop){
            a.classList.add("play");
        }else{
            a.classList.remove("play");
        }
    })
}

if(anima.length){
    window.addEventListener('scroll', ()=>{
        animaScroll();
    })
}