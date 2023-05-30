const io = require("../io")

// // Programa "Imprima todos os números pares que são menores que 100.")

let n = 100
let contador = 0

while (n % 2 == 0){
  contador++
  io.write("Número par: " + n)
}  