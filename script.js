
const searchButton = document.querySelector(".submitButton");
const seachBarResults = document.querySelector("#pokName");
const showImage = document.querySelector(".pokemonPicture")
const height = document.querySelector(".height")
const weight = document.querySelector(".weight")
const id = document.querySelector(".id")
const abilities = document.querySelector(".abilities")
const pokemonName = document.querySelector(".pokemonName")
const debutGame = document.querySelector(".debutGame")
const pokedex = document.querySelector(".pokedex")




searchButton.addEventListener("click", function(e) {
    e.preventDefault();
    const searchBarValue = seachBarResults.value;
    const searchBarLower= searchBarValue.toLowerCase()
    const url = `https://pokeapi.co/api/v2/pokemon/${searchBarLower}`;

    
        fetch(url)
            .then((res) =>{ 
              
                return res.json();
    })
                    .then((data) => {
                        pokemon = data.results //results is the array that pulls the pokemon out from the res iterable
                      

                        const imageLink = data.sprites.front_default
                        showImage.setAttribute("src", imageLink)
                        console.log(data.game_indices[0].version.name)
                        pokemonName.innerHTML = `Name: ${data.name}`
                        height.innerHTML = `Height: ${data.height} `
                        weight.innerHTML = `Weight: ${data.weight}`
                        id.innerHTML = `Pokemon ID: ${data.id}`
                        debutGame.innerHTML = `Debut Game: Pokemon ${data.game_indices[0].version.name}`

                        console.log(`${data.game_indices[0].version.name}`)
                        pokedex.style.backgroundColor = data.game_indices[0].version.name
                        
                        

                        

                      });

    });
    


            
