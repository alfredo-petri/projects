let btnContact = document.querySelector('.jl-btn-contact');


btnContact.addEventListener('click', function () {

   
    let boxContact = document.querySelector('.jl-contact-info');
  
    boxContact.classList.toggle('jl-btn-contact-info-is-on');


    let iconContact = document.querySelector('.jl-btn-contact');
  
    iconContact.classList.toggle('jl-change-icon');
    
});