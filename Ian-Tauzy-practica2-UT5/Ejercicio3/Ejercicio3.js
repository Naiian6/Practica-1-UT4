'use strict'

document.querySelector("button").addEventListener("click",function(event){
    let email = document.querySelector("input[type='email']")
    let contraseña = document.querySelector("input[type='password']")

    //let patronEmail = /^[a-zA-Z][0-9]*@iesdoctorbalmis.(?:|com|es)+$/ /*.test(campo.value)*/
    if (/^[a-zA-Z]*@iesdoctorbalmis\.(?:|com|es)+$/.test(email.value)) {
        email.className = "valido"
    }
    else email.className = "noValido"

    if (/^[0-9]{8}/.test(contraseña.value)) {
        contraseña.className = "valido"
    }
    else contraseña.className = "noValido"
})