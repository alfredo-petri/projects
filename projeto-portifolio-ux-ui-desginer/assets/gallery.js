// variavel de captura do elemento overlay
//let overlay = document.querySelector('.jl-overlay');
//variavel de captura do container do frame
let frameContainer = document.querySelector('.jl-gallery-frame-container');
//variavel de captura da imagem do frame
let frameImage = document.querySelector('.jl-gallery-frame-image');
//variavel de captura da imagem da galeria qie se usada no frame
let galleryImages = document.querySelectorAll ('.jl-thumb-img');
//variavel de captura do caminho da imagem 
let imageSrc = null;
//variavel de captura de elementos responsaveis por fechar o frame
let closeGallery = document.querySelectorAll('.jl-toggle-gallery');
//variavel de captura do botao prev
let btnPrev = document.querySelector ('.jl-item-prev');
//variavel de captura do botao next
let btnNext = document.querySelector ('.jl-item-next');
//varprevl de captura do numero da imagem que será aplicada no frame
let itemNum = null;
//variavel que indica o numero do item atual no frame
let currentItemNum = null;
//variavel que indica o numero do proximo item no frame
let nextItemNum = null;
//variavel que ira receber o item atual
let item = null;
//variavel que ira receber o atributo data-item
let dataItemNum = null;
//variavel que captura o caminho da proxima imagem a ser exibida no frame
let nextSrc = null;
//variavel que captura o atributo data-index do proximo item
let nextIndex = null;

let prevSrc = null;
//variavel que captura o atributo data-index do proximo item
let prevIndex = null;

let skeletonLoading = document.querySelector ('.jl-skeleton-loading');

const skeletonAnimation = function (imagem) {
    const myImage = new Image();
    myImage.src = imagem;
    myImage.addEventListener('load', function (){
        skeletonLoading.classList.add('jl-fade-out');
        setTimeout(function () {
            skeletonLoading.style.display = 'none'
        }, 2000);
    });
}

const totalCounterNumber = document.querySelector('.jl-total-slide').innerHTML = galleryImages.length.toString().padStart(2, '0');

const applyCurrentNumber = (number) => {
    document.querySelector('.jl-current-slide').innerHTML = number.toString().padStart(2, '0');
} 

//metodo para pegar a imagem e aplica-la no frame
const getImageSrc =  function(){

    //loop de captura das imagens na galeria
    for (let i = 0; i < galleryImages.length; i++){
        //função para pegar o caminho e num da imagem desejada e aplica-la ao frame, a partir de um click
        galleryImages [i].addEventListener('click', function(){

            imageSrc = this.getAttribute('data-src');
            frameImage.setAttribute ('src', imageSrc);

            skeletonLoading.style.display = 'flex';

            itemNum = this.getAttribute('data-item');
            frameImage.setAttribute ('data-index', itemNum);
            
            //adiciona visibilidade aos elementos overlay e frame de imagem
            overlay.classList.add('jl-is-on');
            frameContainer.classList.add('jl-is-on');

            skeletonAnimation(imageSrc);

            applyCurrentNumber(itemNum);
        })
    }
}

getImageSrc();

//loop para fechar o frame
for (let i = 0; i < closeGallery.length; i++){
    closeGallery[i].addEventListener('click', function(){
        //remove a visibilidade dos elementos overlay e frame de imagem
        overlay.classList.remove('jl-is-on');
        frameContainer.classList.remove('jl-is-on');
    })
}

const nextItem = function(){

    itemNum = parseInt(itemNum) +1;
   
    if (galleryImages[itemNum] == undefined) return;

    item = galleryImages[itemNum];
    nextSrc = item.getAttribute('data-src');
    nextIndex = item.getAttribute('data-item');

    skeletonLoading.style.display = 'flex';

    frameImage.setAttribute('src', nextSrc);
    frameImage.setAttribute('data-index', nextIndex); 
    applyCurrentNumber(nextIndex);
    skeletonAnimation(nextSrc);
}

const prevItem = function(){

    itemNum = parseInt(itemNum) -1;
   
    if (galleryImages[itemNum] == undefined) return;

    item = galleryImages[itemNum];
    prevSrc = item.getAttribute('data-src');
    prevIndex = item.getAttribute('data-item');

    skeletonLoading.style.display = 'flex';

    frameImage.setAttribute('src', prevSrc);
    frameImage.setAttribute('data-index', prevIndex); 
    applyCurrentNumber(prevIndex);
    skeletonAnimation(prevSrc);
}


btnNext.addEventListener('click', function(){
    nextItem()
})

btnPrev.addEventListener('click', function(){
    prevItem()
})
