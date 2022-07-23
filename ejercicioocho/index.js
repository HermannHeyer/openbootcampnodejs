function siempretrue (){
    return true
}


console.log(siempretrue)

console.log("------Promesa------")
setTimeout(function(){
    console.log("Hola soy una promesa")
}, 5000);

const promesa = new Promise((resolve,reject)=>{
    setTimeout()
    
    if(false){
        resolve()
    }else{
        reject()
    }

})

promesa
.then(()=>console.log("Correcto"))
.catch(()=>console.log("Error"))
.finally(()=>console.log("Siempre se ejecuta"))

console.log("------Funcion Generadora------")

function* generadorid(){
    let id = 0
    while(true){
        id++
       
        if(id==10){
            if(id%2==0){
                
                yield id
                
            }
            return id
        }
    }

}

const gen = generadorid()
console.log(gen.next())
console.log(gen.next())