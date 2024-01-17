let menu = 0;
let listaVagasSalva = [];
let candidatoInscrito = 0;

function criarNovaVaga() {
    let salvarVaga = {}

    salvarVaga.nome = prompt('Digite o nome da vaga:');
    salvarVaga.descricao = prompt('Digite a descrição da vaga:');
    salvarVaga.data = prompt('Digite a data limite da vaga: Exemplo (17/01/24)');
    
    let confirma = confirm(
        `Aperte "OK" para confimar as informações.\n
        Nome: ${salvarVaga.nome}    
        Descrição: ${salvarVaga.descricao}
        Data Limite: ${salvarVaga.data}
        `
    )
    if (confirma === true){
        listaVagasSalva.push(salvarVaga)
    }
}

function listarVagaDisponivel() {
    if(listaVagasSalva >= 1){
        for(i = 0; i < listaVagasSalva.length; i++){
            console.log(i)
            alert("Vaga: " + (i + 1) +
                "\nNome: " + listaVagasSalva[i].nome +
                "\nCandidatos Inscritos: " + candidatoInscrito)
        }
    }else{
        alert("Não Há Vagas Cadastradas!!!")
    }
}

while (menu !== 6) {
  menu = parseInt(
    prompt(
      "Sistema de Vagas de Emprego:\n1 - Listar Vagas Disponíveis\n2 - Criar Nova Vaga\n3 - Visualizar uma Vaga\n4 - Inscrever um candidato em uma vaga\n5 - Excluir uma vaga\n6 - Sair"
    )
  );

  switch (menu) {
    case 1:
        listarVagaDisponivel();
      break;

    case 2:
        criarNovaVaga();
      break;

    case 3:
       ;
      break;

    case 4:
      break;

    case 5:
      break;

    case 6:
      alert("Saindo....");
      break;

    default:
      alert("Digite um número válido!!!");
      break;
  }
}
