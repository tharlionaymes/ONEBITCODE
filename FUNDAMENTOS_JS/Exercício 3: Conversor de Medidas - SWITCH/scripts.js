let valor = parseFloat(prompt("Digite um valor em metros:"))

let escolha = 0

while (escolha < 1 || escolha > 6) {

    escolha = parseInt(prompt("Escolha o número da unidade que quer converter?\n 1 - Milímetro (mm)\n 2 - Centímetro (cm)\n 3 - Decímetro (dm)\n 4 - Decâmetro (dam)\n 5 - Hectômetro (hm)\n 6 - Quilômetro (km) "))


    switch(escolha){
        case 1:
            alert(valor + "m" + " corresponde a " + valor * 1000 + "mm")
            break
        
        case 2:
            alert(valor + "m" + " corresponde a " + valor * 100 + "cm")
            break

        case 3:
            alert(valor + "m" + " corresponde a " + valor * 10 + "dm")
            break

        case 4:
            alert(valor + "m" + " corresponde a " + valor / 10 + "dm")
            break

        case 5:
            alert(valor + "m" + " corresponde a " + valor / 100 + "hm")
            break
            
        case 6:
            alert(valor + "m" + " corresponde a " + valor / 1000 + "km")
            break
        
        default:
            alert("Opção Inválida. Você escolheu a opção " + escolha);
                break;
    }
}