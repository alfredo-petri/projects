// INICIO PORTIFÓLIO SLIDER


// INICIO - DECLARACAO DE VARIAVEIS SLIDER

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


    // declarando variaveis que receberam os elementos botão prev, botao next e a posição dos itens na lista
    let itemPrev = document.querySelector ('.jl-item-prev');
    let itemNext = document.querySelector ('.jl-item-next');

    // declarando variaveis que receberam a posicao dos itens da lista e a posição final 
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







// DECLARACAO DA VARIAVEL lastItem (CORRIGIR ERRO)
let lastItem = sliderListWidth - containerWidth;








// INICIO - HANDLERS

    // declarando o método responsável por animar a transição para o próximo slider
    let nextSlideAnimation = function(){

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

    // declarando o método responsável por animar a transição para o slider anterior
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

// FIM - HANDLERS





// INICIO - MAIN FUNCTIONS

    //aciona os métodos necessários ao cliclar no botão next
    itemNext.addEventListener('click', function(){
        nextSlideAnimation();
    })

    //aciona os métodos necessários ao cliclar no botão prev
    itemPrev.addEventListener('click', function() {
        prevSlideAnimation();
    });

// FIM - MAIN FUNCTIONS

// FIM PORTIFOLIO SLIDER