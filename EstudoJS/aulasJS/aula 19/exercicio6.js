const io = require("../io")

io.write("Informe ao programa quanto você recebe e qual a porcentagem do reajuste de seu salário.")

io.write("Informe o seu salário atual:")
const salarioAtual = io.readInt()

io.write("Informe o percentual de reajuste:")
const porcentoReajuste = io.readFloat()

const calculoReajuste = salarioAtual * porcentoReajuste / 100
const totalFinal = salarioAtual + calculoReajuste

io.write("O seu salário será reajustado para: " + totalFinal)

io.write("Fim do programa. Até a próxima.")