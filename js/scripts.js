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


for (let i = 0; i < pokemonList.length; i++) {
    if (pokemmonList[i].size > 1) {
        document.write(pokemonList[i].name + 'what a massiv ething you may appear as')
        
    } else if (pokemonList[i].type == 'grass') {
        document.write(pokemonList[i].name + ' (height' + pokemonList[i].size + ')')
    } else {
        document.write(pokemonList[i].name +' (height' + pokemonList[i].size + ')')
    }
    
};


