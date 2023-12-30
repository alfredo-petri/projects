// INICIO PORTIFÓLIO SLIDER


// INICIO - DECLARACAO DE VARIAVEIS


    //DECLARACAO DE VARIAVEIS SLIDER

    // variavel que recebe o elemento slider container
    let sliderContainer = document.querySelector ('.jl-slider-container');
    // variavel que recebe o elemento slider list
    let sliderList = document.querySelector ('.jl-slider-list');
    // variavel que recebe o elemento slider item
    let sliderItem = document.querySelectorAll ('.jl-slider-item');
    // constante que recebe a quantidade de slides
    const sliderTotalItems = sliderItem.length;
    // variavel que recebe a classe .jl-current-slide, usado no controle de slides
    let currentSlide = document.querySelector('.jl-current-slide');
    // variavel que recebe a classe ,jl-total-slide, usado no controle de slides
    let totalSlide = document.querySelector('.jl-total-slide');
    // variavel que armazena o contador atual do controle de slides
    let currentCounter = 1;



    // DECLARACAO DE VARIAVEIS PARA CAPTURA DE LARGURAS INDIVIDUAIS

    // variavel que atribui uma largura dinâmica para o container 
    let containerWidth = sliderContainer.parentElement.offsetWidth;
    // variavel que irá atribuir uma largura dinâmica para o slider list
    let sliderListWidth = null;


    // DECLARACAO DE VARIAVEIS QUE RECEBEM OS ELEMENTOS BOTAO PREV E BOTAO NEXT
    let itemPrev = document.querySelector ('.jl-item-prev');
    let itemNext = document.querySelector ('.jl-item-next');

    // variavel que recebe a posicao dos itens na lista do slider
    let sliderPosition = 0;

    
// FIM - DECLARACAO DE VARIAVEIS SLIDER



// INICIO - ATRIBUICAO DE LARGURAS DINAMICAS

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

// FIM - ATRIBUIÇÃO DE LARGURAS DINAMICAS


// INICIO - HANDLERS

    // metodo responsável por animar a transição para o próximo slider
    let nextSlideAnimation = function(){

        // DECLARACAO DA VARIAVEL lastItem
        let lastItem = sliderListWidth - containerWidth;

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
    };

    // metodo responsável por animar a transição para o slider anterior
    let prevSlideAnimation = function() {
        
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
    };

    // metodo reponsavel por aumentar o current counter 
    let currentCounterAdd = function (){
        if (currentCounter > 0 && currentCounter < sliderTotalItems){
            currentCounter++;
            currentSlide.innerHTML = currentCounter.toString().padStart(2, '0');
        }
    } 

    // metodo reponsavel por aumentar o current counter 
    let currentCounterSub = function (){
        if (currentCounter > 1 && currentCounter <= sliderTotalItems){
            currentCounter--;
            currentSlide.innerHTML = currentCounter.toString().padStart(2, '0');
        }
    } 

// FIM - HANDLERS


// INICIO - ACTIONS

    // atribuição automatica de numero de slides aos controles do slider
    totalSlide.innerHTML = sliderTotalItems.toString().padStart(2, '0');


// FIM - ACTIONS






// INICIO - MAIN FUNCTIONS

    //aciona os métodos necessários ao cliclar no botão next
    itemNext.addEventListener('click', function(){
        nextSlideAnimation();
        currentCounterAdd();
    })

    //aciona os métodos necessários ao cliclar no botão prev
    itemPrev.addEventListener('click', function() {
        prevSlideAnimation();
        currentCounterSub();
    });

// FIM - MAIN FUNCTIONS

// FIM PORTIFOLIO SLIDER