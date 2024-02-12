
var elementos = document.querySelectorAll('.player-options > div img');
var playerOpt = "";
var inimigoOpt = "";

function resetOpacityPlayer(){
    for(let i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}

function resetInimigo (){
    let enemyOptions = document.querySelectorAll('.enemy-options > div img');

    for (let i = 0; i < enemyOptions.length; i++){
        enemyOptions[i].style.opacity = 0.3;
    }
}

function enemyRound(){
    let rand = Math.floor(Math.random()*3);
    let enemyOptions = document.querySelectorAll('.enemy-options > div img');
    
    resetInimigo ();
    
    for (let i = 0; i < enemyOptions.length; i++){
        if (i==rand){
            enemyOptions[i].style.opacity = 1;
            inimigoOpt = enemyOptions[i].getAttribute('data-opt');
        }
    }
}


for(let i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', (t)=> {

        resetOpacityPlayer();

        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('data-opt');
        
        
        enemyRound();
        
    });
};


