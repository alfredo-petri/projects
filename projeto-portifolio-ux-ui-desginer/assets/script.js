//INICIO PRELOADER

// declarando variável para selecionar preloader
let pagePreloader = document.querySelector('.jl-preloader');


// função page preloader
window.addEventListener('load', function () {

    setTimeout(function(){
        pagePreloader.classList.add ('jl-fade-out'); 
    }, 750);
    
    setTimeout(function(){
        pagePreloader.style.display = 'none';
    }, 3000);
});

//FIM PRELOADER 




//INICIO CONTACT INFO

// variável para selecionar botão contact
let btnContact = document.querySelector('.jl-btn-contact');

// função toogle on/off contact info
btnContact.addEventListener('click', function () {
    let boxContact = document.querySelector('.jl-contact-info');
    boxContact.classList.toggle('jl-is-on');
    this.classList.toggle('jl-change-icon');
});


//FIM CONTACT INFO





//INICIO MODAL ORÇAMENTO

// variavel para selecionar botão de orçamento
let toggleModal = document.querySelectorAll('.jl-toggle-modal')

// abrindo e fechando modal de orçamento
for (let i = 0; i < toggleModal.length; i++){
    toggleModal[i].addEventListener('click', function(){
        let overlay = document.querySelector('.jl-overlay');
        let modalOrcamento = document.querySelector('#jl-modal-orcamento');

        overlay.classList.toggle('jl-is-on');
        modalOrcamento.classList.toggle('jl-is-on');
        setTimeout(function(){
            modalOrcamento.classList.toggle('jl-slide-in');
        }, 300);
    })
}


//FIM MODAL ORÇAMENTO




// variavel para receber btn acroll down
let scrollDown = document.querySelector('.jl-scroll-down')

// animando elementos on scroll com waypoints
var waypoint = new Waypoint({
    element: scrollDown,
    handler: function() {
        scrollDown.classList.toggle('jl-fade-out'); 
    }, offset: '75%'
}) 

//FIM FADEOUT SCROLL DOWN ANIMATION  




// INICIO PORTIFÓLIO SLIDER


// Declarando váriaveis slider

// variavel que recebe o elemento slider container
let sliderContainer = document.querySelector ('.jl-slider-container');
// variavel que recebe o elemento slider list
let sliderList = document.querySelector ('.jl-slider-list');
// variavel que recebe o elemento slider item
let sliderItem = document.querySelectorAll ('.jl-slider-item');


// Declarando variáveis de captura de larguras individuais

// variavel que atribui uma largura dinâmica para o container 
let containerWidth = sliderContainer.parentElement.offsetWidth;
// variavel que irá atribuir uma largura dinâmica para o slider list
let sliderListWidth = null;


// Passando larguras dinâmicas

// atribui largura dinamica, capturada, ao elemento slider container
sliderContainer.style.width = containerWidth + 'px';

// loop para atribuir largura dinamica ao elemento slider item
for ( let indexSliderItem = 0; indexSliderItem < sliderItem.length; indexSliderItem ++){
sliderItem[indexSliderItem].style.width = containerWidth+'px'; 

// variavel que captura a largura dinamica de cada item 
let sliderItemWidth = sliderItem[indexSliderItem].offsetWidth;

//definindo a largura total do elemento slider list dinamicamente
sliderListWidth +=  sliderItemWidth;
}

// atribuindo a largura total do elemento slider list
sliderList.style.width = sliderListWidth + 'px';


// Animação Slider onClick


// FIM PORTIFOLIO SLIDER