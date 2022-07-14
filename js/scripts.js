let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';
    let modalContainer = document.querySelector('#modal');


    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".list-group");
        let listItem = document.createElement("li");
        let listButton = document.querySelector("btn btn-primary");
        listButton.classList.add("group-list-item");
        listButton.innerText = pokemon.name;
        listButton.classList.add('pokemon-button');
        listButton.setAttribute('data-toggle', 'modal');
        $(listButton).addClass('btn btn-secondary');

        listItem.appendChild(listButton);
        pokemonList.appendChild(listItem);

        addListener(listButton, pokemon)
    }


    function openDetails() {
        listButton('click');
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
            console.log('loadDetails', pokemon);
            showModal(pokemon);
        }
        )
    }

    function showModal(pokemon) {
        $('#modal .modal-title').text(pokemon.name);
        $('#modal .modal-img').attr('src', pokemon.imageUrl);
        $('#modal .height').text('height: ${pokemon.height}');
    }



    function getAll() {
        return pokemonList;
    }

    function addListener(button, pokemon){
        button.addEventListener('click' , function () {
                showDetails(pokemon);
            } )
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

