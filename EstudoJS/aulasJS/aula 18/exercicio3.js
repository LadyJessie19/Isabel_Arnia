const io = require('../io')

io.write('Informe 3 tamanhos de segmentos de reta. Lembre que o primeiro tem que ser maior que a soma dos 2 números subsequentes. ')

io.write('Informe o primeiro tamanho: ')
const tamanho1 = io.readInt()

io.write('Informe o segundo tamanho: ')
const tamanho2 = io.readInt()

io.write('Informe o terceiro tamanho: ')
const tamanho3 = io.readInt()

if (tamanho1 > (tamanho2 + tamanho3)){
  io.write('É um triângulo!')
} else {
  io.write('Não é um triângulo!')
}