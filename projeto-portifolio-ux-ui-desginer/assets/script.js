// INICIO - DECLARANDO VARIAVEIS

    // declarando variável para selecionar preloader
    let pagePreloader = document.querySelector('.jl-preloader');

    // variável para selecionar botão contact
    let btnContact = document.querySelector('.jl-btn-contact');

    // variavel para selecionar a classe css  .jl-toggle-modal presente no botão de orçamento
    let toggleModal = document.querySelectorAll('.jl-toggle-modal');

    // variavel para receber btn acroll down
    let scrollDown = document.querySelector('.jl-scroll-down');

    // declarando variavel para receber a classe css .jl-overlay        
    let overlay = document.querySelector('.jl-overlay');

    // declarando variavel para receber o ID css #jl-modal-orçamento presente no container do modal        
    let modalOrcamento = document.querySelector('#jl-modal-orcamento');

    // declarando variavel para receber a classe css .jl-overlay-menu        
    let overlayMenu = document.querySelector('.jl-overlay-menu');

    // variavel para selecionar a classe css  .jl-toggle-menu presente no botão de abrir/fechar menu
    let toggleMenu = document.querySelectorAll('.jl-toggle-menu');


    let menuMobile = document.querySelector('.jl-menu-mob');

    let btnMenuMobileIcon = document.querySelector ('.jl-btn-menu-mob ion-icon');

    let iconMenu 

    let triggerTopbar = document.querySelector ('.jl-trigger-topbar');
    let topBar = document.querySelector ('.jl-topbar');
    let logo = document.querySelector ('.jl-logo');

// FIM - DECLARANDO VARIAVEIS


// INICIO - TOPBAR (WAIPOINTS)

// declarando novo objeto
let topBarAnimation = new Waypoint({
    
    element: triggerTopbar,

    // metodo que adiciona a animaçao fadeout ao elemento .jl-scroll-down quando rolar a página 25% para baixo 
    handler: function() {
        topBar.classList.toggle('jl-topbar-bg');
        logo.classList.toggle('jl-logo-shorter');
        logo.classList.toggle('jl-logo-bigger');
        console.log('pow');
    }, offset: '50px'
}) 

// INICIO - PRELOADER

    // função page preloader, acionada quando a página está totalmente carregada 
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

// FIM - PRELOADER 


// INICIO - CONTACT INFO

    // função toogle on/off contact info, acionada através de click no botão
    btnContact.addEventListener('click', function () { 

        //variavel para receber a caixa de informação
        let boxContact = document.querySelector('.jl-contact-info');

        // adiciona a classe css .jl-is-on ao elemento jl-contact-info
        boxContact.classList.toggle('jl-is-on');
        // adiciona a classe css .jl-is-on ao elemento jl-btn-contact
        this.classList.toggle('jl-change-icon');
    });

// FIM - CONTACT INFO


// INICIO - MODAL ORÇAMENTO


    // loop abrindo e fechando modal de orçamento
    // declaração de variavel i para iteração e estrutura do loop
    for (let i = 0; i < toggleModal.length; i++){

        // função acionada atravś de clique no botão de orçamento    
        toggleModal[i].addEventListener('click', function(){

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


// FIM - MODAL ORÇAMENTO


// INICIO - MENU MOBILE

    // loop abrindo e fechando modal de orçamento
    // declaração de variavel i para iteração e estrutura do loop
    
    
    for (let i = 0; i < toggleMenu.length; i++){
        toggleMenu[i].addEventListener('click', function(){
            overlayMenu.classList.toggle('jl-is-on');
            menuMobile.classList.toggle('jl-menu-is-closed');
            menuMobile.classList.toggle('jl-menu-is-open');
            
            iconMenu = btnMenuMobileIcon.getAttribute ('name');
            
            if (iconMenu === 'menu'){
                btnMenuMobileIcon.setAttribute('name', 'close');
            } else {
                btnMenuMobileIcon.setAttribute('name', 'menu');
            }  
        })   
    }

// FIM - MENU MOBILE