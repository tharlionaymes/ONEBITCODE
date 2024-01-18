let menu = 0;
let listaVagasSalva = [];
let candidatoInscrito = 0;
let listaCandidatoVaga = [];

function criarNovaVaga() {
  let salvarVaga = {};

  salvarVaga.nome = prompt("Digite o nome da vaga:");
  salvarVaga.descricao = prompt("Digite a descrição da vaga:");
  salvarVaga.data = prompt("Digite a data limite da vaga: Exemplo (17/01/24)");

  let confirma = confirm(
    `Aperte "OK" para confimar as informações.\n
        Nome: ${salvarVaga.nome}    
        Descrição: ${salvarVaga.descricao}
        Data Limite: ${salvarVaga.data}
        `
  );
  if (confirma === true) {
    listaVagasSalva.push(salvarVaga);
  }
}
function listarVagaDisponivel() {
  if (listaVagasSalva.length >= 1) {
    let mensagem = "Lista de Vagas Disponíveis:\n";
    for (i = 0; i < listaVagasSalva.length; i++) {
      mensagem +=
        "\nVaga: " +
        (i + 1) +
        "\nNome: " +
        listaVagasSalva[i].nome +
        "\nCandidatos Inscritos: " +
        candidatoInscrito +
        "\n---------------------------------";
    }
    alert(mensagem);
  } else {
    alert("Não Há Vagas Cadastradas!!!");
  }
}
function inscreverCandidatoVaga() {
  let salvarCandidato = {};

  salvarCandidato.nome = prompt("Digite o nome do candidato:");
  salvarCandidato.indiceVaga = parseInt(
    prompt(
      `Qual vaga você quer se candidatar?\n${listaVagasSalva}\nDigite o índice da vaga:`
    )
  );

  let confirma = confirm(
    `Aperte "OK" para confimar as informações.\n
        Nome: ${salvarCandidato.nome}    
        Índice da Vaga: ${salvarCandidato.indiceVaga}        `
  );

  if (confirma === true) {
    listaCandidatoVaga.push(salvarCandidato);
  }
}
function selecionarVagaPorIndice(indice) {
  if (indice >= 0 && indice < listaVagasSalva.length) {
    vagaSelecionada = listaVagasSalva[indice];
    alert(
      `### Vaga Selecionada ###\n\nÍndide: ${indice}\nNome: ${vagaSelecionada.nome}\nDescrição: ${vagaSelecionada.descricao}\nData Limite: ${vagaSelecionada.data}`
    );
  } else {
    alert("Índice inválido");
  }
}
function totalCandidato(posicao) {
  let filtroIndice = listaCandidatoVaga.filter(function (candidato) {
    return candidato["indice da vaga"] === posicao;
  });

  let somaCandidato = filtroIndice.length;

  return somaCandidato;
}
function visualizarCandidato(posicao) {
  let nomes = listaCandidatoVaga
    .filter(function (candidato) {
      return candidato["indice da vaga"] === posicao;
    })
    .map(function (candidato) {
      return candidato.nome;
    });

  return nomes;
}
function visualizarVaga() {
  let posicao = parseInt(prompt("Digite o número da vaga: "));

  let vaga = selecionarVagaPorIndice(posicao);
  alert(
    `${vaga}\nQuantidade de Candidatos: ${totalCandidato(
      posicao
    )}\nNomes dos Candidatos: ${visualizarCandidato(posicao).join(", ")}`
  );
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
        visualizarVaga()
      break;

    case 4:
      if (listaVagasSalva.length === 0) {
        alert("Não Há Vagas para se candidatar.");
      } else {
        inscreverCandidatoVaga();
      }
      break;

    case 5:
      break;

    case 6:
      alert("Saindo....");
      break;

    default:
      alert("Digite um número válido.");
      break;
  }
}
