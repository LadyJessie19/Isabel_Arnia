const io = require("../io")
io.write("Digite um número n e o programa irá dizer quais números, até o número n, são pares e quais são ímpares.")

io.write("Digite o número n: ")
let n = io.readInt()

let nP = n % 2
let nI = n % 2

while (nP == 0 && nP <= n)(nI != 0 && nI <= n){
 io.write(nP + " - Par") 
 io.write(nI + "- Ímpar")
}