//Faça um programa de computador para receber 10 números e depois imprimir os números classificados como primos.

const io = require("../io")

let numeros = []

for (i = 1; i <= 10; i++){
    io.write(`Digite o ${i}º número:`)
    let numero = io.readInt()
    numeros.push(numero)
}
  if (numeros.length % 1 === 0){
    
}