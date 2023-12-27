//declarando variáveis

//variável para selecionar botão
let btnContact = document.querySelector('.jl-btn-contact');

//variável para selecionar preloader
let pagePreloader = document.querySelector('.jl-preloader');

//variavel para selecionar botão de orçamento

let toggleModal = document.querySelectorAll('.jl-toggle-modal')


//função page preloader
window.addEventListener('load', function () {

    setTimeout(function(){
        pagePreloader.classList.add ('jl-preloader-is-onload'); 
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