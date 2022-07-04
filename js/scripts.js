let space = "  "
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

pokemonList.forEach(pokemonList => {
    document.write(pokemonList.name + " is " + pokemonList.size + ' tall' + '<br>')
});