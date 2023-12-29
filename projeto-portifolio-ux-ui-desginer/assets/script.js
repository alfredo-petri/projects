//INICIO PRELOADER

// declarando variável para selecionar preloader
let pagePreloader = document.querySelector('.jl-preloader');


// função page preloader

// função acionada quando a página está totalmente carregada 
window.addEventListener('load', function () {

// adiciona a classe css .jl-fade-out ao elemento jl-page-preloader, com timer    
    setTimeout(function(){
        pagePreloader.classList.add ('jl-fade-out'); 
    }, 750);

// adiciona style css display none ao elemento jl-page-preloader, com timer       
    setTimeout(function(){
        pagePreloader.style.display = 'none';
    }, 3000);
});

//FIM PRELOADER 




//INICIO CONTACT INFO

// variável para selecionar botão contact
let btnContact = document.querySelector('.jl-btn-contact');

// função toogle on/off contact info

// função acionada através de click no botão
btnContact.addEventListener('click', function () { 

//variavel para receber a caixa de informação
    let boxContact = document.querySelector('.jl-contact-info');

// adiciona a classe css .jl-is-on ao elemento jl-contact-info
    boxContact.classList.toggle('jl-is-on');
// adiciona a classe css .jl-is-on ao elemento jl-btn-contact
    this.classList.toggle('jl-change-icon');
});


//FIM CONTACT INFO





//INICIO MODAL ORÇAMENTO

// variavel para selecionar a classe css  .jl-toggle-modal presente no botão de orçamento
let toggleModal = document.querySelectorAll('.jl-toggle-modal')

// loop abrindo e fechando modal de orçamento
// declaração de variavel i para iteração e estrutura do loop
for (let i = 0; i < toggleModal.length; i++){

// função acionada atravś de clique no botão de orçamento    
    toggleModal[i].addEventListener('click', function(){

// declarando variavel para receber a classe css .jl-overlay        
        let overlay = document.querySelector('.jl-overlay');

// declarando variavel para receber o ID css #jl-modal-orçamento presente no container do modal        
        let modalOrcamento = document.querySelector('#jl-modal-orcamento');

// adiciona a classe css .jl-is-on ao elemento overlay
        overlay.classList.toggle('jl-is-on');
// adiciona a classe css .jl-is-on ao elemento modal
        modalOrcamento.classList.toggle('jl-is-on');
// timer para animation fade-in
        setTimeout(function(){
            modalOrcamento.classList.toggle('jl-slide-in');
        }, 300);
    })
}


//FIM MODAL ORÇAMENTO




// variavel para receber btn acroll down
let scrollDown = document.querySelector('.jl-scroll-down')

// animando elementos on scroll com a biblioteca waypoints

// declarando novo objeto
let waypoint = new Waypoint({
    element: scrollDown,

// metodo que adiciona a animaçao fadeout ao elemento .jl-scroll-down quando rolar a página 25% para baixo 
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
sliderItem[indexSliderItem].style.width = containerWidth + 'px'; 

// variavel que captura a largura dinamica de cada item 
let sliderItemWidth = sliderItem[indexSliderItem].offsetWidth;

//definindo a largura total do elemento slider list dinamicamente
sliderListWidth +=  sliderItemWidth;
}

// atribuindo a largura total do elemento slider list
sliderList.style.width = sliderListWidth + 'px';


// Animação Slider onClick

// declarando variaveis que receberam os elementos botão prev, botao next e a posição dos itens na lista
let itemPrev = document.querySelector ('.jl-item-prev');
let itemNext = document.querySelector ('.jl-item-next');

// declarando variaveis que receberam a posicao dos itens da lista e a posição final 
let sliderPosition = 0;
let lastItem = sliderListWidth - containerWidth;

//aciona a função next ao cliclar no botão next
itemNext.addEventListener('click', function() {

// se a posição do item (sliderPosition) for igual a ultima posição (lastItem), o return vazio interrompe a função
    if((-sliderPosition) === lastItem ) {
        return;
    }

// alterando a posição do item ao clicar no botão next
    sliderPosition -= containerWidth;

//executa a animação de mudança de posição nos itens do slider
    anime({
        targets: sliderList,
        translateX: sliderPosition
      });
})

//aciona a função prev ao cliclar no botão next
itemPrev.addEventListener('click', function() {

// se a posição do item (sliderPosition) for igual a primeira posição, ou seja igual a 0, o return vazio interrompe a função
    if(sliderPosition === 0 ) {
        return;
    }

// alterando a posição do item ao clicar no botão prev
    sliderPosition += containerWidth;

//executa a animação de mudança de posição nos itens do slider
    anime({
        targets: sliderList,
        translateX: sliderPosition
        });
})

// FIM PORTIFOLIO SLIDER