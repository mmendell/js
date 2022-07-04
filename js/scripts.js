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
    function getAll() {
        return pokemonList;
    }

    function add() {
        pokemonRepository.add(item);
    }

  })();
  