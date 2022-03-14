'use strict'

function VerAsignaturas(...alumnos)
{
    if (alumnos.length > 0) {
        for (let i = 0; i < alumnos.length; i++) 
        {
            let [nombre,grupo,...asignaturas] = alumnos[i]
            console.log(nombre+"-"+grupo+"-"+"Asignaturas:"+asignaturas.join("/"))
        }
    }
    else console.log("No has pasado ningun parametro")
}

VerAsignaturas(["Sara","DamA","Programacion","ED"],["Martin","DamB","Programacion","LM","ED","BBDD","FOL","SI"],["Emma","ASIR","ISO","BBDD","LM"])
VerAsignaturas(["Alvaro","Semi","BBDD"])
VerAsignaturas()