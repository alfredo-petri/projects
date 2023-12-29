//declarando variáveis

//variável para selecionar botão
let btnContact = document.querySelector('.jl-btn-contact');

//variável para selecionar preloader
let pagePreloader = document.querySelector('.jl-preloader');

//variavel para selecionar botão de orçamento
let toggleModal = document.querySelectorAll('.jl-toggle-modal')

//variavel para receber btn acroll down
let scrollDown = document.querySelector('.jl-scroll-down')



//funções

//função page preloader
window.addEventListener('load', function () {

    setTimeout(function(){
        pagePreloader.classList.add ('jl-fade-out'); 
    }, 750);
    
    setTimeout(function(){
        pagePreloader.style.display = 'none';
    }, 3000);
});

//função toogle on/off contact info
btnContact.addEventListener('click', function () {
    let boxContact = document.querySelector('.jl-contact-info');
    boxContact.classList.toggle('jl-is-on');
    this.classList.toggle('jl-change-icon');
});

//abrindo e fechando modal de orçamento
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

//animando elementos on scroll com waypoints
var waypoint = new Waypoint({
    element: scrollDown,
    handler: function() {
        scrollDown.classList.toggle('jl-fade-out'); 
    }, offset: '75%'
  }) 


  // PORTIFÓLIO SLIDER

  // Declarando váriaveis slider

  let sliderContainer = document.querySelector ('.jl-slider-container');
  let sliderList = document.querySelector ('.jl-slider-list');
  let sliderItem = document.querySelectorAll ('.jl-slider-item');
  let sliderListWidth = null;

  // Declarando variáveis de captura de larguras individuais

  let containerWidth = sliderContainer.parentElement.offsetWidth;
  

  // Passando larguras dinâmicas

  sliderContainer.style.width = containerWidth+'px';

  for ( let indexSliderItem = 0; indexSliderItem < sliderItem.length; indexSliderItem ++){
    sliderItem[indexSliderItem].style.width = containerWidth+'px'; 

    let sliderItemWidth = sliderItem[indexSliderItem].offsetWidth;
    
    sliderListWidth +=  sliderItemWidth;
  }

  sliderList.style.width = sliderListWidth + 'px';
  // Animação Slider onClick