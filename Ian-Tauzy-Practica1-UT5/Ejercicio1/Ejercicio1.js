'use strict'

function Ejercicio1(cadena,variebleBooleana,funcion,numeros)
{
    let total = 1;
    if(typeof(cadena) == "string" && typeof(variebleBooleana) == "boolean" && typeof(funcion) == "function" && typeof(numeros) == "object")
    {
        if (variebleBooleana == true) {
            numeros.forEach(numeros => {
                console.log(numeros);
                total = total * numeros;
            });
            console.log(total);
            if (total > 100) {
                alert(cadena.includes("a") ? "La 'a' no esta permitida" : "Muy bien no has utilizado la 'a'")
            }
            else alert("El resultado de tu array es insuficiente para comprobar la cadena");
        }
        else funcion()
    }
    else alert("No se cumples los parametros");
}

Ejercicio1("Hola mundo",true,()=>{alert("Se acabo el juego")},[1,2,3,8])
Ejercicio1();
Ejercicio1("Si",true,()=>{alert("Se acabo el juego")},[10,20,30,40])
Ejercicio1("Si",false,()=>{alert("Se acabo el juego")},[10,20,30,40])
