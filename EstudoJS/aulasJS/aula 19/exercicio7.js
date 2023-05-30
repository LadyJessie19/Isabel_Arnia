const io = require("../io")

io.write("Informe ao programa a temperatura em Fahrenheit e ele converterá a temperatura para Celsius.")

io.write("Informe a temperatura em Fahrenheit:")
const fahrenheit = io.readFloat()

const celsius = ((fahrenheit - 32) / 9) * 5

io.write("A temperatura em Celsius é: "+ celsius)