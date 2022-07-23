const datos = {
    nombre: "Hermann",
    apellido: "Heyer",
    edad:   32,
    eresDesarrollador: true
}

let edad = datos.edad

 

 const amigos = [
    {nombre: "Pedro", apellido: "Perez", edad:   44,},
    {nombre: "Diego", apellido: "Perez", edad:   31}
    ]

const nuevosdatos = [{...datos,...amigos}]
 console.log(nuevosdatos)

 nuevosdatos.sort((a,b)=> a.edad-b.edad)
 console.log(nuevosdatos)
 