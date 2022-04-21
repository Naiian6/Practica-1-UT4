'use strict'

function CalcularElPrecioMasBarato(precios)
{
    let precioBarato = Number.MAX_VALUE
    for (let i = 0; i < precios.length; i++) {
        if(precios[i].textContent < precioBarato){
            precioBarato = precios[i].textContent;
        }
    }
    return precioBarato
}

function gestionarFicheroXML(xmlDoc)
{
    //alert(xmlDoc)
    let librerias = xmlDoc.querySelectorAll("libreria")
    let mainHtml = document.querySelector("main")
    let cadena = ""
    
    for(let libreria of librerias)
    {
       cadena += "<h2>"+  libreria.querySelector("nombre").textContent +"</h2>"
       cadena += "<table>" 
        let libros = libreria.querySelectorAll("libro")
        let precios = libreria.querySelectorAll("precio")
        let barato = CalcularElPrecioMasBarato(precios)
        for(let libro of libros)
        {
            if (libro.querySelector("precio").textContent == barato) {
                cadena += "<tr class='ColorFondo'>"
            }
            else cadena += "<tr>"
            cadena += "<td>" + libro.querySelector("ISBN").textContent + "</td>"
            cadena += "<td>" + libro.querySelector("titulo").textContent + "</td>"
            cadena += "<td>" + libro.querySelector("nivelProfundidad").textContent + "</td>"
            let autores = libro.querySelectorAll("autores")
            for(let autor of autores)
            {
                cadena += "<td>" + autor.querySelector("autor").textContent + "</td>"
            }
            cadena += "<td>" + libro.querySelector("editorial").textContent + "</td>"
            cadena += "<td>" + libro.querySelector("fechaPublicacion").textContent + "</td>"
            cadena += "<td>" + libro.querySelector("paginaWeb").textContent + "</td>"
            cadena += "<td>" + libro.querySelector("precio").textContent + "</td>"
            
            cadena += "</tr>"
        }
       cadena += "</table>"
    }
mainHtml.innerHTML = cadena
}


loadLDocA("libros.xml")


