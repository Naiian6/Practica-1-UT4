'use strict'

document.querySelector("button").addEventListener("click",function(event){
    let usuario = document.querySelectorAll("input[type='text']")[0]
    let contraseña = document.querySelectorAll("input[type='password']")[0]
    let contraseña2 = document.querySelectorAll("input[type='password']")[1]
    let email = document.querySelector("input[type='email']")
    let nombre = document.querySelectorAll("input[type='text']")[1]
    let apellido = document.querySelectorAll("input[type='text']")[2]
    let edad = document.querySelector("input[type='number'")
    let telefono = document.querySelector("input[type='tel'")
    
    if(/[A-Z]{1}[a-z]*[0-9]{1}/.test(usuario.value)){
        usuario.className = "valido"
    } else usuario.className = "noValido"
    if(/[0-9]{8}[A-Z]{1}/.test(contraseña.value)){
        if(/[0-9]{8}[A-Z]{1}/.test(contraseña2.value)){
            if (contraseña.value == contraseña2.value) {
                contraseña.className = "valido"
                contraseña2.className = "valido"
            } 
            else{
                contraseña.className = "noValido"
                contraseña2.className = "noValido"
            } 
        } else contraseña2.className = "noValido"
    } else contraseña.className = "noValido"
    if(/^[a-zA-Z]*@(?:iesdoctorbalmis|gmail|yahoo|outlook)\.(?:|com|es)+$/.test(email.value)){
        email.className = "valido"
    } else email.className = "noValido"
    if(/[A-Z]{1}[a-z]*/.test(nombre.value)){
        nombre.className = "valido"
    } else nombre.className = "noValido"
    if(/([A-Z]{1}[a-z]*)\s([A-Z]{1}[a-z]*)/.test(apellido.value)){
        apellido.className = "valido"
    } else apellido.className = "noValido"
    if(/[0-9]{2}/.test(edad.value)){
        edad.className = "valido"
    } else edad.className = "noValido"
    if(/(?:6|7|9){1}[0-9]/.test(telefono.value)){
        telefono.className = "valido"
        console.log("god")
    } else telefono = "noValido"

})