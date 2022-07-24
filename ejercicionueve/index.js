const logger = require('../log')

logger.info("error desde el index")

function numero(valor){
console.log(valor)
}

try {
    numero(5)
    console.log("Esta correcto")
    
} catch (error) {
    console.log("Solo Numeros")
}