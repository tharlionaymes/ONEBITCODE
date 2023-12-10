//Minha resolução

let turista = prompt("Qual o seu nome?")
let cidades = []
let contador = 0
let pergunta = prompt("Você já visitou alguma cidade?").toLowerCase()


if (pergunta === "não" || pergunta === "n" || pergunta === "nao"){
    document.getElementById("turista").innerText= "Nome: " + turista;
    document.getElementById("resposta").innerText= "Visitou alguma cidade: Não" ;
}else{

    while (pergunta = prompt("Qual cidade você já visitou?").toLowerCase()){
        cidades.push(pergunta)
        contador ++

        pergunta = prompt("Voce visitou mais alguma cidade?")
            if (pergunta === "Sim" || pergunta === "s" || pergunta === "sim"){
                pergunta = "Sim"
            
                }else{
                    break
                }
    }
}

document.getElementById("turista").innerText= "Nome: " + turista.toLocaleUpperCase();
document.getElementById("contador").innerText= "Visitou " + contador + " cidade(s).";
document.getElementById("cidades").innerText= "As cidades visitadas foram: " + cidades.join(", ").toLocaleUpperCase();


/*Resolução do Professor

const turista = prompt("E aí, turista! Qual é o seu nome?")
let cidades = ""
let contagem = 0
let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")

while (continuar === "Sim") {
  let cidade = prompt("Qual é o nome da cidade visitada?")
  cidades += " - " + cidade + "\n"
  contagem++
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}

alert(
  "Turista: " + turista +
  "\nQuantidade de cidades visitadas: " + contagem +
  "\nCidades visitadas:\n" + cidades
)

*/

