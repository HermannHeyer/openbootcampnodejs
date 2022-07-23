const fecha_hoy = new Date()
console.log(fecha_hoy)
const fecha_nacimiento = new Date(1990,0,20)
console.log(fecha_nacimiento)
let tarde = true

if(fecha_hoy.getTime() > fecha_nacimiento.getTime()){
    tarde = true
    console.log('Fecha de hoy es mayor')
}else{
    tarde = false
    console.log('Fecha de mi nacimiento es mayor')
}

let dia_nacimiento = fecha_nacimiento.getDate()
console.log(dia_nacimiento)
let mes_nacimiento = fecha_nacimiento.getMonth()+1
console.log(mes_nacimiento)
let anio_nacimiento = fecha_nacimiento.getFullYear()
console.log(anio_nacimiento)