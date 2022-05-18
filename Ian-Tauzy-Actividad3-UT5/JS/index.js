'use strict'

function getRandomInt(min,max) {
    return Math.floor(Math.random()*(max-min))+min;
}
let num = getRandomInt(0,151);

Pokemon.getPokemon(num).then(pk => pk.PintaPokemon());

document.querySelector("#ant").addEventListener("click",function(event){
    num--
    Pokemon.getPokemon(num).then(pk => pk.PintaPokemon());
    event.preventDefault();
})
document.querySelector("#sig").addEventListener("click",function(event){
    num++
    Pokemon.getPokemon(num).then(pk => pk.PintaPokemon());
    event.preventDefault();
})
