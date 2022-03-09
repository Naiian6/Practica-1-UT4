'use strict'

function Ejercicio1(cadena,variebleBooleana,funcion,...numeros)
{
    let total = 0;
    if(typeof(String) == cadena && typeof(Boolean) == variebleBooleana && typeof(function(){}) == funcion && typeof(Int32Array) == numeros)
    {
        console.log("Todo correcto")
    }
    /*if (variebleBooleana == true) {
        numeros.forEach(element => {
            console.log(element);
            total =+ total * element;
        });
        if (total > 100) {
            for (let index = 0; index < cadena.length; index++) {
                if(cadena[index] == "a")
                
            }
        }
        /*for(let item of numeros)
        //console.log(item)
        total =+ item * item;
        console.log(total)
    }*/
}

Ejercicio1("Hola mundo",true,()=>{alert("Se acabo el juego")},[1,2,3,4])

console.log("Hola")