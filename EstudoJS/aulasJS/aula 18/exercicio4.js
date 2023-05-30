const io = require ('../io')

io.write('Informe os valores de a, b e c.')

io.write('Informe o valor de a: ')
const a = io.readInt()

io.write('Informe o valor de b: ')
const b = io.readInt()

io.write('Informe o valor de c: ')
const c = io.readInt()

const delta = (b ** 2) - (4 * a * c)

if (delta < 0){
  io.write('Não há raízes na equação.')
  
} 

if (delta >= 0){
  const raiz1 = (-b + (delta ** (1/2))) / (2 * a)
  io.write('A 1° raíz é: '+ raiz1)
}

if (delta > 0){
 const raiz2 = (-b - (delta ** (1/2))) / (2 * a)
  io.write('A 2° raíz é: '+ raiz2)
}