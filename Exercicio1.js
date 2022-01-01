
// Escreva um programa que, dado quatro valores,  A, B, C e D, imprima o maior e o menor valor.

var num1 = prompt("Digite o 1 numero ");
var num2 = prompt("Digite o 2 numero ");
var num3 = prompt("Digite o 3 numero ");
var num4 = prompt("Digite o 4 numero ");

var arr = [num1, num2, num3, num4];
var max = Math.max(...arr);
var min = Math.min(...arr);
console.log("O maior valor é: " + max)
console.log("O menor valor é: " + min)