const io = require("../io")

io.write("Digite 10 números diferentes e o programa irá dizer a média aritmética deles.")

io.write("Digite o 1° número: ")
let n1 = io.readInt()

io.write("Digite o 2° número: ")
let n2 = io.readInt()

io.write("Digite o 3° número: ")
let n3 = io.readInt()

io.write("Digite o 4° número: ")
let n4 = io.readInt()

io.write("Digite o 5° número: ")
let n5 = io.readInt()

io.write("Digite o 6° número: ")
let n6 = io.readInt()

io.write("Digite o 7° número: ")
let n7 = io.readInt()

io.write("Digite o 8° número: ")
let n8 = io.readInt()

io.write("Digite o 9° número: ")
let n9 = io.readInt()

io.write("Digite o 10° número: ")
let n10 = io.readInt()

const media = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10) / 10

io.write("A média aritmética entre os números é: "+ media)