const io = require("../io")

io.write("Informe o total de eleitores:")
const eleitores = io.readInt()

io.write("Informe o total de votos brancos:")
const votoBranco = io.readFloat()

io.write("Informe o total de votos nulos:")
const votoNulo = io.readFloat()

io.write("Informe o total de votos válidos:")
const votoValido = io.readFloat()

const porcentoBranco = (votoBranco * 100) / eleitores
const porcentoNulo = (votoNulo * 100) / eleitores
const porcentoValido = (votoValido * 100) / eleitores

io.write("Brancos representam: " + porcentoBranco + "% dos eleitores")
io.write("Nulos representam: " + porcentoNulo + "% dos eleitores")
io.write("Válidos representam: " + porcentoValido + "% dos eleitores")