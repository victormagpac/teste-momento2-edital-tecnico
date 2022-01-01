
// Dados três valores distintos, fazer um algoritmo que, após a leitura destes dados imprima-os em ordem crescente.

var idade = [];
for (var i = 0; i < 3; i++)
    idade[i] = prompt("Informe um numero aleatório: ");
idade.sort(function (a, b) {
    return a - b;
});

console.log('Numeros ordenados são: ', idade);