"use strict";
class Pokemon
{
    constructor(imagen, nombre, experiencia, ataque, defensa, vida)
    {
        this.imagen = imagen;
        this.nombre = nombre;
        this.experiencia = experiencia;
        this.ataque = ataque;
        this.defensa = defensa;
        this.hp = vida;
    }
    static getPokemon(numRandom)
    {
        return HTTP.ajax('GET',
        `https://pokeapi.co/api/v2/pokemon/` + numRandom).then(
        data => {
            console.log(data)
            let name = data.name
            let Pkimg = data.sprites.front_default
            let Pkexperiencia = data.base_experience
            let Pkataque = data.stats[1].base_stat
            let Pkdefensa = data.stats[2].base_stat
            let Pkhp = data.stats[0].base_stat
            let pk = new Pokemon(Pkimg,name,Pkexperiencia,Pkataque,Pkdefensa,Pkhp);
            return pk;
        })
    }
    PintaPokemon()
    {
        document.querySelector("img").src = this.imagen;
        document.querySelector("h4").textContent = this.nombre;
        document.querySelectorAll("p")[0].textContent = this.ataque;
        document.querySelectorAll("p")[1].textContent = this.defensa;
        document.querySelectorAll("p")[2].textContent = this.experiencia;
        document.querySelector("h5").textContent = this.hp + " HP";
    }
}
