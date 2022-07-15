let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';


    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".list-group");
        let listItem = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add(
            "btn",
            "btn-custon",
            'col-xl-6',
            'col-md-8',
            'col-11',
            'mx-auto'
        );
        listItem.classList.add('list-group-item');
        button.setAttribute('data-target', '#modal');
        button.setAttribute('data-toggle', 'modal');
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        clickEvent(button, pokemon);
    }

    function clickEvent(button, pokemon) {
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
    }


    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
            item.name = details.name;
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    }


    function showModal(pokemon) {
        let modalBody = document.querySelector('#poke-modal-body');
        let modalTitle = document.querySelector('#poke-modal-title')
        modalBody.innerHTML = "";
        modalTitle.innerHTML = "";

        let pokemonName = document.createElement('h1');
        pokemonName.innerText = pokemon.name;

        let pokemonSprite = document.createElement('img');
        pokemonSprite.src = pokemon.imageUrl;

        let pokemonHeight = document.createElement('p');
        pokemonHeight.innerText = 'Height: ' + pokemon.height;

        modalTitle.appendChild(pokemonName);
        modalBody.appendChild(pokemonSprite);
        modalBody.appendChild(pokemonHeight);

    }



    function getAll() {
        return pokemonList;
    }




    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };

})();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

