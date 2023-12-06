let n1 = parseInt(prompt("Digite um número:"));

let n2 = parseInt(prompt("Digite um outro número:"));

let adicao = n1 + n2;

let subtracao = n1 - n2;

let multiplicacao = n1 * n2;

let divisao = n1 / n2;

let potenciacao = n1 ** n2;

let restoDivisao = n1 % n2;


document.getElementById("adicao").innerHTML = "ADIÇÃO: " +  n1 + " + " + n2 + " = " + adicao;

document.getElementById("subtracao").innerHTML = "SUBTRAÇÃO: " + n1 + " - " + n2 + " = " + subtracao;

document.getElementById("multiplicacao").innerHTML = "MULTIPLICAÇÃO: " + n1 + " * " + n2 + " = " + multiplicacao;

document.getElementById("divisao").innerHTML = "DIVISÃO: " + n1 + " / " + n2 + " = " + divisao;

document.getElementById("potenciacao").innerHTML = "POTÊNCIA: " + n1 + " ** " + n2 + " = " + potenciacao;

document.getElementById("restoDivisao").innerHTML = "RESTO DA DIVISÃO: " + n1 + " % " + n2 + " = " + restoDivisao;