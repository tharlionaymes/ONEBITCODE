let selecao = 0
let depositar = 0;
let sacar = 0;
let novoSaldo = 0;

let saldo = parseFloat(prompt("Qual a quantidade de dinheiro você tem? R$"));

do{
    selecao = parseInt(prompt("Seu saldo é: R$" + saldo + "\n1 - Depositar Dinheiro\n2 - Sacar Dinheiro\n3 - Sair"));  

    if (selecao === 1){
        depositar = parseFloat(prompt("Quanto você quer depositar? R$"));
        novoSaldo = saldo + depositar;
        alert("Seu novo saldo é: R$" + novoSaldo);
        saldo = novoSaldo;

    }else if (selecao === 2){
        sacar = parseFloat(prompt("Quanto você quer sacar? R$"));
        novoSaldo = saldo - sacar;
        alert("Seu novo saldo é: R$" + novoSaldo);
        saldo = novoSaldo;
    
    }else if (selecao === 3){
        break;
    
    }else {
        alert("Opção inválida. Escolha um número de 1 a 3.");
    }

} while(selecao !== 3);