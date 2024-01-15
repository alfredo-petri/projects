let overlay = document.querySelector('.jl-overlay');
let frameContainer = document.querySelector('.jl-gallery-frame-container');
let frameImage = document.querySelector('.jl-gallery-frame-image');
let galleryImages = document.querySelectorAll ('.jl-thumb-img');
let imageSrc = null;
let closeGallery = document.querySelectorAll('.jl-toggle-gallery')

const getImageSrc =  function(){
    for (let i = 0; i < galleryImages.length; i++){
        galleryImages [i].addEventListener('click', function(){
            imageSrc = this.getAttribute('data-src');
            frameImage.setAttribute ('src', imageSrc);
            overlay.classList.add('jl-is-on')
            frameContainer.classList.add('jl-is-on')
        })
    }
}

for (let i = 0; i < closeGallery.length; i++){
    closeGallery[i].addEventListener('click', function(){
        overlay.classList.remove('jl-is-on')
        frameContainer.classList.remove('jl-is-on')
    })
}

getImageSrc();