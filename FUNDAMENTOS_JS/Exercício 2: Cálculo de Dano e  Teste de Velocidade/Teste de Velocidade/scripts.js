let carro1 = parseInt(prompt("Digite a velocidade do carro 1:"));

let carro2 = parseInt(prompt("Digite a velocidade do carro 2:"));

if  (carro1 > carro2){
  alert("O Carro 1 é mais rápido!");
}
else if  (carro1 < carro2){
  alert("O Carro 2 é mais rápido!");
}
else{
  alert("A velocidade dos dois carros são iguais!");
}

diferenca = parseInt(carro1 - carro2)

if (Math.sign(diferenca) === 1){
    diferenca = diferenca
}else if (Math.sign(diferenca) === -1){
    diferenca = diferenca * (-1)
}

alert("A diferença entre os dois é de: " + diferenca)

/*OBS.: Math.sign()

A função Math.sign() retorna o sinal de um número, indicando se o número é positivo, negativo ou zero.

Sintaxe:
Math.sign(x)

Valor retornado:

Se o argumento é um número positivo, o retorno será 1;

Se o numero passado for negativo, o retorno será -1

Se o argumento for um zero positivo , o retorno será +0

Se o argumento for 0 negativo , o retorno será -0

*/