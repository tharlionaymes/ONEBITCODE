let numero = parseInt(prompt("Escolha qual tabuada você quer: 1 a 10"))

let conta = 0

tabuada = ""

for (indice = 0; indice < 11; indice ++){
    conta = (numero + "x" + indice + " = " + numero * indice)

    tabuada = tabuada + "\n"+ conta;
}

document.getElementById("tabuada").innerText= tabuada