//declarando variáveis

//variável para selecionar botão
let btnContact = document.querySelector('.jl-btn-contact');

let pagePreloader = document.querySelector('.jl-preloader');

//função page preloader
window.addEventListener('load', function () {

    setTimeout(function(){
        pagePreloader.classList.add ('jl-preloader-is-onload'); 
    }, 2000);
    
    setTimeout(function(){
        pagePreloader.style.display = 'none';
    }, 3500);
});

//função toogle on/off contact info
btnContact.addEventListener('click', function () {
    let boxContact = document.querySelector('.jl-contact-info');
    boxContact.classList.toggle('jl-btn-contact-info-is-on');
    this.classList.toggle('jl-change-icon');
});