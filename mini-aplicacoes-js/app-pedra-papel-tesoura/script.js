
var elements = document.querySelectorAll('.player-options > div img');
var playerOpt = "";
var inimigoOpt = "";
var winner = document.querySelector('.winner');

function resetOpacityPlayer(){
    for(let i = 0; i < elements.length; i++){
        elements[i].style.opacity = 0.3;
    }
}

function resetInimigo (){
    let enemyOptions = document.querySelectorAll('.enemy-options > div img');

    for (let i = 0; i < enemyOptions.length; i++){
        enemyOptions[i].style.opacity = 0.3;
    }
}

function victory (){
    if (playerOpt == "paper") {
        if (inimigoOpt == "paper") {
            winner.innerHTML = "O resultado deu empate!";
            winner.style.backgroundColor = "#d6d6d6";
        } else if (inimigoOpt == "scisor") {
            winner.innerHTML = "O inimigo ganhou!";
            winner.style.backgroundColor = "#ff1515";
        } else if (inimigoOpt == "rock") {
            winner.innerHTML = "Você ganhou!";
            winner.style.backgroundColor = "#15ff5b";
        } else {
            alert("erro");
        }
    } else if (playerOpt == "scisor") {
        if (inimigoOpt == "scisor") {
            winner.innerHTML = "O resultado deu empate!";
            winner.style.backgroundColor = "#d6d6d6";
        } else if (inimigoOpt == "rock") {
            winner.innerHTML = "O inimigo ganhou!";
            winner.style.backgroundColor = "#ff1515";
        } else if (inimigoOpt == "paper") {
            winner.innerHTML = "Você ganhou!";
            winner.style.backgroundColor = "#15ff5b";
        } else {
            alert("erro");
        }
    } else if (playerOpt == "rock") {
        if (inimigoOpt == "rock") {
            winner.innerHTML = "O resultado deu empate!";
            winner.style.backgroundColor = "#d6d6d6";
        } else if (inimigoOpt == "paper") {
            winner.innerHTML = "O inimigo ganhou!";
            winner.style.backgroundColor = "#ff1515";
        } else if (inimigoOpt == "scisor") {
            winner.innerHTML = "Você ganhou!";
            winner.style.backgroundColor = "#15ff5b";
        } else {
            alert("erro");
        }
    } else {
        alert("erro");
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

    victory();

}


for(let i = 0; i < elements.length; i++){
    elements[i].addEventListener('click', (t)=> {

        resetOpacityPlayer();

        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('data-opt');
        
        
        enemyRound();
        
    });
};


