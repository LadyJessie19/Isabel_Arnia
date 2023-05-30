const io = require("../io")

io.write('Informe um ano aleatório e o programa dirá se ele é bissexto ou não.')

io.write('Digite um ano: ')
const ano = io.readInt()

if (ano % 100 === 0 && ano % 400 === 0){
  io.write('É ano bissexto!')

} if (ano % 100 !== 0 && ano % 4 === 0){
  io.write('É ano bissexto!')

} else {
  io.write('Não é ano bissexto!')
}

io.write('Fim do programa.')