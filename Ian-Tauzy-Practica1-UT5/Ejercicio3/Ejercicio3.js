'use strict'
let entradaUsuario = 0;
let arrayInsertado = []
function MayorMenor(num1,num2){return num2-num1}

while(!isNaN(entradaUsuario)) 
{
    entradaUsuario = Number(prompt("Introduce un numero"))
    if(!isNaN(entradaUsuario))
    arrayInsertado.unshift(entradaUsuario);
}
console.log("Mostrando 1º parte: " + arrayInsertado.join(" | "))
console.log("Ordenando de Mayor a menor: " + arrayInsertado.sort(MayorMenor).join(" | "))
console.log("Mostrando los multiplos de 3: " + arrayInsertado.filter(num => num%3==0).join(" | "))
console.log("Ordenado de Mayor a Menor y los que son multiplos de 3: "+ arrayInsertado.sort(MayorMenor).filter(num => num%3==0).join(" | "))