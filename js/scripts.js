let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';


    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log("not a proper pokemon");
        }
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }


    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listItem = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        button.addEventListener("click", function (event) {
            showDetails(pokemon);
        })

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


    function showDetails(item) {
        loadDetails(item).then(function () {
            let modalContainer = document.modalContainer('#modal-container');
            modalContainer.innerHTML = '';

            let modal = document.createElement('div');
            modal.classList.add('modal');

            let closeButton = document.createElement('button');
            closeButton.classList.add('close-modal');
            closeButton.innerText = 'close';
            closeButton.addEventListener('click', hideDetails);

            let pokeName = document.createElement('h1');
            pokeName.innerText = item.name;

            let pokeImg = document.createElement('img');
            pokeImg.src = item.imageUrl;

            let pokeHeight = document.createElement('p');
            pokeHeight.innerText = item.height;

            let pokeType = document.createElement('p');
            pokeType.innerText = item.height;

            modal.appendChild(closeButton);
            modal.appendChild(pokeName);
            modal.appendChild(pokeImg);
            modal.appendChild(pokeHeight);
            modal.appendChild(pokeType);
            modalContainer.appendChild(modal);


            modal.classList.add('is visible');

        });
    }

        function hidePokemon() {
            modalContainer.classList.remove('is-visible');
        }

        document.querySelector('#show-modal').addEventListener('click', () => {
            showDetails();
        })

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
                hideDetails();
            }
        });


        modalContainer.addEventListener('click', (e) => {
            let target = e.target;
            if (target === modalContainer) {
                hideModal();
            }
        });
          
        ;





return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
};

}) ();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

