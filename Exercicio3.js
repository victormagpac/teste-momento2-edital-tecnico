// Faça um algoritmo que leia um número inteiro e mostre uma mensagem indicando 
// se este número é par ou ímpar, e se é positivo ou negativo.

var valor = prompt('Digite um número: ');

function verificaNegativo(valor) {
    if (valor < 0) {
        console.log(`O número ${valor} é Positivo`);
    } else {
        console.log(`O número ${valor} é Negativo`);
    }
}

function verificaParOuImpar(valor) {
    if (valor % 2 === 0) {
        console.log(`O número ${valor} é Par`);
    } else {
        console.log(`O número ${valor} é Ímpar`);
    }
}

verificaParOuImpar(valor);
verificaNegativo(valor);