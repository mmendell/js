let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: "bulbasur",
            size: 7,
            type: "grass"
        },
        {
            name: "charmader",
            size: 0.6,
            type: "fire"
        },
        {
            name: "kakuna",
            size: 0.6,
            type: "bug"
        },
    ];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };

})();


let pokemonList = pokemonRepository.getAll();

pokemonList.forEach(function (pokemon){
        document.write(pokemon.name + ' is ' + pokemon.size + ' tall' + '<br>')
    
})