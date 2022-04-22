'use strict'
function gestionarFicheroTXT(txtDoc) {
    //alert(txtDoc)
    //console.log(txtDoc.split("\n"))
    let mainHtml = document.querySelector("main")
    let cadena = ""
    let mensajes = txtDoc.split("\n")
    cadena += "<ul>"
        for(let i = 0; i < mensajes.length; i++)
        {
            if (i%2 == 0) {
                cadena += "<li class='emisor'>" + mensajes[i] + "</li>"
            }
            else cadena += "<li class='receptor'>" + mensajes[i] + "</li>"
        }
    cadena += "</ul>"
    
    mainHtml.innerHTML = cadena
}


//loadLDocA("Mensajes.txt")
setInterval(loadLDocA("Mensajes.txt"),10000)
