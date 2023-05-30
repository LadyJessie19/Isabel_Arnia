const io = require ("../io")

io.write('Digite um número:')
const numero1 = io.readInt()

io.write('Digite outro número:')
const numero2 = io.readInt()

const total = numero1 % numero2 

io.write('O resto da divisão dos 2 números é: ')
io.write(total)
