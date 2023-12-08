let atacante = prompt("Digite o nome do personagem atacante:");
let poderAtaquePersonagem = parseInt(prompt("Digite quanto de ataque o personagem atacante tem:"));
let nomePersonagemDefensor = prompt("Digite o nome do personagem defensor:");
let pontosDeVida = parseInt(prompt("Digite quanto de vida o personagem de defesa tem:"));
let poderDefesa = parseInt(prompt("Digite quanto de defesa o personagem defensor tem:"));
let escudo = prompt ("O personagem de defesa tem escudo? (Sim/Não)").toLowerCase(); //Convertendo para minúsculas

//let escudoLower = escudo.toLowerCase(); // Convertendo a entrada para minúsculas

let dano = 0;

if (poderAtaquePersonagem > poderDefesa && (escudo === "Não" || escudo === "n" || escudo === "nao")){
  dano = poderAtaquePersonagem - poderDefesa;
 }else if (poderAtaquePersonagem > poderDefesa && (escudo === "Sim" || escudo === "s" || escudo === "sim")){
  dano = ((poderAtaquePersonagem - poderDefesa) / 2);
}else {
  dano = 0;
} 


let danoSofrido = dano;

let vidaRestante = pontosDeVida - danoSofrido;

/*
window.alert(
  "Após o Ataque:\n" + 
  "\nNome Personagem Ataque: " + nomePersonagemAtaque + 
  "\nPoder Personagem Ataque: " + poderAtaquePersonagem + 
  "\n\nNome Personagem de Defesa: " + nomePersonagemDefensor +
  "\nPontos de Vida: " + pontosDeVida +
  "\nPoder de Defesa do Personagem: " + poderDefesa + 
  "\nTem Escudo? " + escudo + 
  "\nDano Sofrido: " + danoSofrido + 
  "\nVida Restantes: " + vidaRestante
  );
*/

// Atualizando o HTML com os dados do ataque
document.getElementById('atacante').innerText = atacante;
document.getElementById('poderPersonagemAtaque').innerText = poderAtaquePersonagem;
document.getElementById('nomePersonagemDefesa').innerText = nomePersonagemDefensor;
document.getElementById('pontosDeVida').innerText = pontosDeVida;
document.getElementById('poderDefesa').innerText = poderDefesa;
document.getElementById('escudo').innerText = escudo;
document.getElementById('danoSofrido').innerText = danoSofrido;
document.getElementById('vidaRestante').innerText = vidaRestante;