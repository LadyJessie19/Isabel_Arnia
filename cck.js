



















function imprimirNoConsole(impressao){
    return console.log(impressao)
}

/* A função aceita 3 parametros: 

- O primeiro número da equação de soma;
- O segundo numero da equação de soma;
- Função que ira imprimir o numero no console. */

function somarDoisNumeros(numero1, numero2, functionCallback){
    const sum = numero1 + numero2
    return functionCallback(sum)
}

somarDoisNumeros(14, 15, imprimirNoConsole)