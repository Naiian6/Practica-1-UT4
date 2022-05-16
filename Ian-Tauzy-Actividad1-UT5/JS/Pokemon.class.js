"use strict";

//let miPokemon = new Object();

class Pokemon
{
    constructor(imagen, nombre, experiencia, ataque)
    {
        this.imagen = imagen;
        this.nombre = nombre;
        this.experiencia = experiencia;
        this.ataque = ataque;
    }
    static getPokemon()
    {
        return HTTP.ajax('GET',
        `https://pokeapi.co/api/v2/pokemon/` + getRandomInt(0,898)).then(
        data => {
            console.log(data)
            let name = data.name
            let Pkimg = data.sprites.front_default
            let Pkexperiencia = data.base_experience
            let Pkataque = data.stats[1].base_stat
            let pk = new Pokemon(Pkimg,name,Pkexperiencia,Pkataque);
            return pk;
        })
    }
    PintaPokemon()
    {
        document.querySelector("img").src = this.imagen;
        document.querySelector("h4").textContent = this.nombre;
        document.querySelectorAll("p")[0].textContent = this.ataque;
        document.querySelectorAll("p")[1].textContent = this.experiencia;
    }

}
