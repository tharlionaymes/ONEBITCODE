let menu = 0

do{
    menu = parseInt(prompt("MENU INTERATIVO\n Opção 1\n Opção 2\n Opção 3\n Opção 4\n Opção 5 - Encerrar "));

    if (menu > 0 && menu < 5){
        alert("Sua escolha foi " + menu);
    } else if (menu ===5){
        alert("Sua escolha foi 5. O programa está sendo ENCERRADO.");
    }else {
        alert("Opção inválida. Escolha um número de 1 a 5.");
    }

} while(menu !== 5);