'use strict'

function getRandomInt(min,max) {
    return Math.floor(Math.random()*(max-min))+min;
}
let num = getRandomInt(0,151);
console.log(num)
Pokemon.getPokemon().then(pk => pk.PintaPokemon());
Pokemon.PintaPokemon;