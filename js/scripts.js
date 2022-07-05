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

console.log(pokemonRepository.getAll())

pokemonList.forEach(pokemonList.getAll => {
    document.write(pokemonList.name + " is " + pokemonList.size + ' tall' + '<br>')
});
