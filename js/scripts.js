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
    if (pokemonList[i].size > 1) {
        document.write(pokemonList[i].name + ' what a massive thing you may appear as! ', "<br>")
        
    } else if (pokemonList[i].type == 'grass') {
        document.write(pokemonList[i].name + ' (height ' + pokemonList[i].size + ')' , "<br>")
    } else {
        document.write(pokemonList[i].name + ' (height ' + pokemonList[i].size + ')', "<br>");
    }
    
};


// for (let i = 0; i < pokemonList.length; i++){
//     document.write (pokemonList[i].name + ' (height' + space + pokemonList[i].size + ') ' ) 
// }