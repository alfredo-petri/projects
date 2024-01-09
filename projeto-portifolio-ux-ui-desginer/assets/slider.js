// INICIO PORTIFÓLIO SLIDER


// INICIO - DECLARACAO DE VARIAVEIS


    //DECLARACAO DE VARIAVEIS SLIDER

    // variavel que recebe o elemento slider container
    let sliderContainer = document.querySelector ('.jl-slider-container');
    // variavel que recebe o elemento slider list
    let sliderList = document.querySelector ('.jl-slider-list');
    // variavel que recebe o elemento slider item
    let sliderItem = document.querySelectorAll ('.jl-portfolio-item');
    // constante que recebe a quantidade de slides
    const sliderTotalItems = sliderItem.length;
    // variavel que recebe a classe .jl-current-slide, usado no controle de slides
    let currentSlide = document.querySelector('.jl-current-slide');
    // variavel que recebe a classe ,jl-total-slide, usado no controle de slides
    let totalSlide = document.querySelector('.jl-total-slide');
    // variavel que armazena o contador atual do controle de slides
    let currentCounter = 1;
    // variavel que recebe o item atual da navegacao
    let navItems = document.querySelectorAll('.jl-item-navigator a')
    // variavel que recebe o numero destaque do item atual
    let navEmphasisNumber = document.querySelector('.jl-navigator-counter span')



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
            translateX: sliderPosition,
            easing: 'cubicBezier(0,1.01,.32,1)'
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
            translateX: sliderPosition,
            easing: 'cubicBezier(0,1.01,.32,1)'
            });
    };

    // metodo responsavel por aumentar o current counter 
    let currentCounterAdd = function (){

        // condicao que verifica se o contador atual esta dentro do limite de itens, entao acrescenta +1 ao contador 
        if (currentCounter > 0 && currentCounter < sliderTotalItems){
            currentCounter++;
            // formata o contador para que seja exibido um 0 antes dele.
            currentSlide.innerHTML = currentCounter.toString().padStart(2, '0');
            navEmphasisNumber.innerHTML = currentCounter.toString().padStart(2, '0');
        }
    } 

    // metodo responsavel por diminuir o current counter 
    let currentCounterSub = function (){
        // condicao que verifica se o contador atual esta dentro do limite de itens, entao diminui 1 do contador atual
        if (currentCounter > 1 && currentCounter <= sliderTotalItems){
            currentCounter--;
            // formata o contador para que seja exibido um 0 antes dele.
            currentSlide.innerHTML = currentCounter.toString().padStart(2, '0');
            navEmphasisNumber.innerHTML = currentCounter.toString().padStart(2, '0');
        }
    } 

    // metodo para aplicar a classe css .jl-item-active ao atual item do da navegação
    let setActiveNav = function () {

        // loop para adicionar a classe active ao item atual
        for (let indexNav = 0; indexNav < navItems.length; indexNav++){
            
            // converte string em numero 
            let currentNav = parseInt(navItems[indexNav].getAttribute('data-nav'));
            // condicao de verificacao para adicionar a classe css
            if (currentNav === currentCounter){
                navItems[indexNav].classList.add('jl-item-active') 
                //animacao aumentar
                anime({
                    targets: '.jl-item-active',
                    width: 85
                });
            }
        }
    }

        
    // metodo para aplicar a classe css .jl-slide-active ao slide atual 
    let setActiveSlide = function () {

        // loop para adicionar a classe active ao item atual
        for (let indexSlide = 0; indexSlide < sliderItem.length; indexSlide++){
            
            // converte string em numero 
            let currentSlide = parseInt(sliderItem[indexSlide].getAttribute('data-slide'));
            // condicao de verificacao para adicionar a classe css
            if (currentSlide === currentCounter){
                sliderItem[indexSlide].classList.add('jl-slide-active');
                sliderItem[indexSlide].querySelector('.jl-portfolio-item-box').classList.add('jl-scale-right'); 
                sliderItem[indexSlide].querySelector('.jl-portfolio-thumb img').classList.add('jl-scale-up'); 
                sliderItem[indexSlide].querySelector('.jl-portfolio-item-info').classList.add('jl-slide-in-long'); 
            }
        }
    }

    //metodo para remover a classe css .jl-item-active e .jl-slide-active dos demais itens e adiciona-las ao item atual
    let changeActive = function () {

        // primeiro o loop remove, entao ele adiciona ao item atual a classe active
        for (let removeOtherActiveNav = 0; removeOtherActiveNav < navItems.length; removeOtherActiveNav++){
            navItems[removeOtherActiveNav].classList.remove('jl-item-active') 

            //animacao diminuir
            anime({
                targets: navItems[removeOtherActiveNav],
                width: 20
            });

            //loop para adicionar as classes responsaveis pelas animações aos seus respectivos itens
            for (let removeOtherActiveSlide = 0; removeOtherActiveSlide < sliderItem.length; removeOtherActiveSlide++){
                sliderItem[removeOtherActiveSlide].classList.remove('jl-slide-active') 
                sliderItem[removeOtherActiveSlide].querySelector('.jl-portfolio-item-box').classList.remove('jl-scale-right'); 
                sliderItem[removeOtherActiveSlide].querySelector('.jl-portfolio-thumb img').classList.remove('jl-scale-up'); 
                sliderItem[removeOtherActiveSlide].querySelector('.jl-portfolio-item-info').classList.remove('jl-slide-in-long'); 
                }
        
        }

        setActiveNav();
        setActiveSlide();
    }



// FIM - HANDLERS


// INICIO - ACTIONS

    //animacao
    anime({
        targets: '.jl-item-active',
        width: 85
    });

    // atribuição automatica de numero de slides aos controles do slider
    totalSlide.innerHTML = sliderTotalItems.toString().padStart(2, '0');


// FIM - ACTIONS






// INICIO - MAIN FUNCTIONS

    //aciona os métodos necessários ao cliclar no botão next
    itemNext.addEventListener('click', function(){
        nextSlideAnimation();
        currentCounterAdd();
        changeActive();
    })

    //aciona os métodos necessários ao cliclar no botão prev
    itemPrev.addEventListener('click', function() {
        prevSlideAnimation();
        currentCounterSub();
        changeActive();
    });

// FIM - MAIN FUNCTIONS

// FIM PORTIFOLIO SLIDER