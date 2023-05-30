const io = require("../io")

io.write(
  "Informe um número inteiro e uma frase de sua escolha. O programa irá digitar automaticamente esta frase de acordo com o número inserido."
)

io.write("Digite um número inteiro: ")
const number = io.readInt()

io.write("Digite uma frase: ")
const frase = io.read()

let contador = 0

while (contador < number) {
  contador++
  io.write(frase)
}
