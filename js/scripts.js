let pokemonRepository = (function () {
    let repository = [
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
        repository.push(pokemon);
    }

    function getAll() {
        return repository;
    }

    function showDetails(pokemon) {
        console.log(pokemon);
    };


    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listItem = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        button.addEventListener('click', function(){
           showDetails(pokemon);
        })

    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails:showDetails,
    };

})();


let pokemonList = pokemonRepository.getAll();

pokemonList.forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon)
})