
const url = "https://pokeapi.co/api/v2/pokemon/"
// const searchButton = document.querySelector(".submitButton");
// const seachBarResults = document.querySelector("#pokName");





searchButton.addEventListener("click", function() {
    const searchBarValue = seachBarResults.value;
    const searchBarCapital= searchBarCapital.toLowerCase()

    
    fetch(url)
        .then((res) => {
             return res.json();
  })
                .then((res) => {
                     pokemon = res.results
                         for(let i = 0; i < pokemon.length; i++){
                            if(pokemon[i].name === searchBarCapital )
                                console.log(pokemon[i]);
    }
  });

});
 

        
