// variavel de captura do elemento overlay
let overlay = document.querySelector('.jl-overlay');
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
//variavel de captura do numero da imagem que será aplicada no frame
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

//metodo para pegar a imagem e aplica-la no frame
const getImageSrc =  function(){

    //loop de captura das imagens na galeria
    for (let i = 0; i < galleryImages.length; i++){
        //função para pegar o caminho e num da imagem desejada e aplica-la ao frame, a partir de um click
        galleryImages [i].addEventListener('click', function(){

            imageSrc = this.getAttribute('data-src');
            frameImage.setAttribute ('src', imageSrc);

            itemNum = this.getAttribute('data-item');
            frameImage.setAttribute ('data-index', itemNum);
            
            //adiciona visibilidade aos elementos overlay e frame de imagem
            overlay.classList.add('jl-is-on');
            frameContainer.classList.add('jl-is-on');
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

/*
const nextItem = function(){
    currentItemNum = parseInt(frameImage.getAttribute('data-index'));
    nextItemNum = currentItemNum +1;
   
    for (let i = 0; i < galleryImages.length; i++){
        item = galleryImages[i];
        dataItemNum = parseInt(item.getAttribute('data-item'));

        if (dataItemNum === nextItemNum){
            nextSrc = item.getAttribute('data-src');
            nextIndex = item.getAttribute('data-item');
            frameImage.setAttribute('src', nextSrc);
            frameImage.setAttribute('data-index', nextIndex);
        }
    }
}
*/

const nextItem = function(){

    itemNum = parseInt(itemNum) +1;
   
    if (galleryImages[itemNum] == undefined) return;

    item = galleryImages[itemNum];
    nextSrc = item.getAttribute('data-src');
    nextIndex = item.getAttribute('data-item');
    frameImage.setAttribute('src', nextSrc);
    frameImage.setAttribute('data-index', nextIndex);
}


btnNext.addEventListener('click', function(){
    nextItem()
})
//identificar o item atual no frame

//identificar o proximo item

//loop para pegar proximo item

//capturar o caminho do frame 

//atribui o  novo caminho ao frame
