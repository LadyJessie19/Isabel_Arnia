const io = require("../io")

io.write('Informe aqui há quantos anos você fuma:')
const anos = io.readInt()

io.write('Informe aqui qual o preço do maço de seu cigarro favorito:')
const precoMaco = io.readFloat()

io.write('Informe aqui, em média, quantos cigarros você consome por dia:')
const cigarrosDia = io.readInt()


const totalAnos = anos * 365
const totalCigarro = precoMaco / 20
const totalGasto = totalAnos * totalCigarro 
const totalConsumido = cigarrosDia * totalAnos 
  
io.write('Você gastou fumando:') 
io.write(totalGasto + 'reais.')

io.write('Você já fumou:')
io.write (totalConsumido + 'cigarros.')