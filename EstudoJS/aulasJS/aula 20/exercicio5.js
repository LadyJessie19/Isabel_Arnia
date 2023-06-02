const io = require("../io")

io.write("Digite um número n e o programa irá dizer quais números, até o número n, são pares e quais são ímpares.")

io.write("Digite o número n: ")
let n = io.readInt()

let contador = 0

while (contador <= n){
    let resultado;
    if(contador % 2 == 0){
        resultado = ' - Par'
    } else{
        resultado = "- Ímpar"
    }
 io.write(contador + resultado)
 contador++
}