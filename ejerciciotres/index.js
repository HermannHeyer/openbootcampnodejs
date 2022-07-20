console.log("----------Factorial Break----------")

resultado = 1
let i = 1
while(i<=10){
  resultado *=i
  if(i == 5){
    console.log("i :"+i)
    break
  }
  
  i++ 
}
console.log(resultado)