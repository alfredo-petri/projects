var amount = document.querySelector('#quantidade');

            amount.addEventListener('keyup', () =>{
                catchPokemons(amount.value)
            })

            catchPokemons(3);

            function catchPokemons (quantidade) {
                
                fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
                .then(response => response.json())
                .then(allpokemon => {

                    var pokemons = [];
                    var imagemPokemons = [];

                    allpokemon.results.map((val)=>{  

                        fetch(val.url)
                        .then(response => response.json())
                        .then(pokemonSingle => {         

                            pokemons.push({nome:val.name, imagem:pokemonSingle.sprites.front_default});  
                        
                            if(pokemons.length == quantidade){
                                
                                //console.log(pokemons);
                                
                                var pokemonBoxes = document.querySelector('.pokemon-boxes');
                                pokemonBoxes.innerHTML = "";
                                
                                pokemons.map(function(val){
                                    
                                    //console.log(val);

                                    pokemonBoxes.innerHTML+=`
                                        <div class="pokemon-box">
                                            <img src=`+val.imagem+` alt="">
                                            <p class="name">`+val.nome+`</p>
                                            <p class="habilities"></p>
                                        </div>
                                    `;

                                });

                                
                            }

                        });

                    });

                    /*
                    pokemons.map((val)=>{
                        console.log(val.nome)
                    });
                    */
                   
                });

            }