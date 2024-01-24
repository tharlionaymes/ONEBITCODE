function addPlayer(){
    // Obter a seção onde a escalação do time será exibida
    const escalacaoSection = document.getElementById("escalacao-time");

    // Obter os valores dos campos de entrada
    const posicao = document.getElementById("iposicao").value;
    const nome = document.getElementById("inome").value;
    const camisa = document.getElementById("icamisa").value;

    // Confirmar a adição do jogador com um prompt
    const confirmacao = confirm(`Confirmar ${nome} na posição de ${posicao}?`);

    if (confirmacao){        
        // Criar um novo elemento <p> para o jogador
        const jogadorP = document.createElement("p");
        jogadorP.id = "player-" + camisa;  // Definir um ID único para o jogador
        jogadorP.innerText = `${posicao} ${nome} ${camisa}`;
        
        // Adicionar o elemento <p> à seção de escalacao-time
        escalacaoSection.appendChild(jogadorP);
    } else {
        alert("Jogador não escalado");
    }

    // Limpar os campos após adicionar um jogador
    document.getElementById("iposicao").value = "";
    document.getElementById("inome").value = "";
    document.getElementById("icamisa").value = "";
}



function removePlayer() {
    // Obter o número da camisa a ser removido
    const number = document.getElementById("inumber").value;

    // Obter o elemento <p> do jogador usando o ID único
    const playerToRemove = document.getElementById("player-" + number);

    // Exibir o texto do jogador a ser removido no console
    console.log(playerToRemove.innerText);

    // Confirmar a remoção do jogador com um prompt
    const confirmacao = confirm("Remover o " + playerToRemove.innerText + "?");
    
    if (confirmacao){
        // Remover o elemento <p> da seção de escalacao-time
        document.getElementById("escalacao-time").removeChild(playerToRemove);

        // Limpar o campo de número da camisa após remover o jogador
        document.getElementById("inumber").value = "";
    }
}

    

