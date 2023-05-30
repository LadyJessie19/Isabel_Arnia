const io = require("../io")

io.write("Digite um número qualquer e o programa mostrará todos os números, menores que o número escolhido, que são múltiplos de 5. ")

io.write("Digite um número: ")
const n1 = io.readInt()

let n2 = n1 / 5 

while (n2 == 0 && n2 <= n1){
  n1 = n1 - 1
  io.write("Os números que são múltiplos de 5 menores que o número digitado são: "+ n2)
}