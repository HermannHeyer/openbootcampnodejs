const compra = ['Pan','Jugo','Miel','Lechuga','Jamon']
compra.push('Aceite de Girasol')
console.log(compra)
compra.pop()
console.log(compra)
const peliculas = [
{ titulo: "Star Wars", director: "George Lucas", anio: 1976},
{ titulo: "Shrek", director: "Andrew Adamson", anio: 2001},
{ titulo: "Rapido y Furioso 7", director: "James Wan", anio: 2013}
]
 const peliculasmayores = peliculas.filter(valor => valor.anio >= 2010)
 console.log(peliculasmayores)

 const directores = peliculas.map(valor => valor.director)
 console.log(directores)
 const titulos = peliculas.map(valor => valor.titulo)
 console.log(titulos)
 const nuevalista = directores.concat(titulos)
 console.log(nuevalista)
 const nuevalistados = [...directores,...titulos]
 console.log(nuevalistados)
