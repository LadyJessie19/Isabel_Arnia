const io = require("../io")

io.write('Digite um número: ')
let numero
numero = io.readInt()

let raizQuadrada 
raizQuadrada = numero ** (1/2)
io.write('A raiz quadrada do número digitado é: ')
io.write(raizQuadrada)