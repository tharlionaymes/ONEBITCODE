let menu = 0;
let candidatoInscrito = 0;
let listaCandidatoVaga = [
  {
    nome: "Tharlion",
    "indice da vaga": 3,
  },
  {
    nome: "Maria",
    "indice da vaga": 1,
  },
  {
    nome: "Joao",
    "indice da vaga": 1,
  },
  {
    nome: "Jessica",
    "indice da vaga": 4,
  },
  {
    nome: "Gabi",
    "indice da vaga": 5,
  },
];
let listaVagasSalva = [
  {
    nome: "Analista de Sistemas",
    descricao:
      "Responsável pela captura das regras de negócio, dos requisitos de sistema e documentos de apoio ao desenvolvimento.",
    data: "18/01/25",
  },
  {
    nome: "Desenvolvedor Full Stack",
    descricao:
      "Responsável pelo desenvolvimento de aplicações web e mobile, atuando tanto no frontend quanto no backend.",
    data: "18/01/25",
  },
  {
    nome: "Engenheiro de Software",
    descricao: "Planejar, projetar, implementar e testar sistemas de software.",
    data: "18/01/25",
  },
  {
    nome: "Analista de Dados",
    descricao:
      "Analisar dados, desenvolver modelos estatísticos e criar visualizações para apoiar a tomada de decisões.",
    data: "18/01/25",
  },
  {
    nome: "Especialista em Segurança da Informação",
    descricao:
      "Garantir a segurança dos sistemas de informação da empresa, implementando medidas para proteger contra ameaças.",
    data: "18/01/25",
  },
  {
    nome: "Gestor de Projetos",
    descricao:
      "Planejar, coordenar e monitorar projetos de TI, garantindo que sejam concluídos no prazo e dentro do orçamento.",
    data: "18/01/25",
  },
  {
    nome: "Policial",
    descricao:
      "Proteger a sociedade, manter a ordem pública e combater a criminalidade.",
    data: "01/07/25",
  },
  {
    nome: "Advogado",
    descricao:
      "Atuar na defesa dos interesses do cliente, interpretando leis, regulamentos e decisões judiciais.",
    data: "01/07/25",
  },
  {
    nome: "Jogador Profissional",
    descricao:
      "Atuar em competições esportivas, representando equipes em diversas modalidades de jogos.",
    data: "01/07/25",
  },
  {
    nome: "Designer Gráfico",
    descricao:
      "Criar elementos visuais para comunicação, como logotipos, peças publicitárias e interfaces de usuário.",
    data: "18/01/25",
  },
];
//let listaCandidatoVaga = [];
//let listaVagasSalva = [];

function criarNovaVaga() {
  let salvarVaga = {};

  salvarVaga.nome = prompt("Digite o nome da vaga:");
  salvarVaga.descricao = prompt("Digite a descrição da vaga:");
  salvarVaga.data = "18/01/25";

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
function selecionarVagaPorIndice(indice) {
  if (indice >= 0 && indice < listaVagasSalva.length) {
    vagaSelecionada = listaVagasSalva[indice];
    let informacao = `### Vaga Selecionada ###\n\nÍndice: ${
      indice + 1
    }\nNome: ${vagaSelecionada.nome}\nDescrição: ${
      vagaSelecionada.descricao
    }\nData Limite: ${vagaSelecionada.data}`;
    return informacao;
  } else {
    alert("Índice inválido");
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
  let opcoesVagas = listaVagasSalva
    .map((vaga, index) => `${index + 1}. ${vaga.nome}`)
    .join("\n");
  let posicao = parseInt(
    prompt(`Escolha a vaga para visualizar:\n${opcoesVagas}`)
  );

  if (isNaN(posicao) || posicao < 1 || posicao > listaVagasSalva.length) {
    alert("Opção inválida. Escolha um índice válido.");
    return;
  }

  let vaga = selecionarVagaPorIndice(posicao - 1);
  alert(
    `${vaga}\nQuantidade de Candidatos: ${totalCandidato(
      posicao
    )}\nNomes dos Candidatos: ${visualizarCandidato(posicao).join(", ")}`
  );
}

function excluirVaga() {
  let exclusaoPosicao = parseInt(prompt("Digite o número da vaga: "));

  let exclusaoVaga = selecionarVagaPorIndice(exclusaoPosicao - 1);

  alert(exclusaoVaga);

  let confirma = confirm("Gostaria realmente de excluir as informações?");

  if (confirma === true) {
    listaVagasSalva.splice(exclusaoVaga, 1);
  } else {
    menu;
  }

  console.log(exclusaoVaga);
  console.log(menu);
}
function inscreverCandidatoVaga() {
  let salvarCandidato = {};

  salvarCandidato.nome = prompt("Digite o nome do candidato:");

  if (listaVagasSalva.length === 0) {
    alert("Não há vagas disponíveis para se candidatar.");
    return;
  }

  let opcoesVagas = listaVagasSalva
    .map((vaga, index) => `${index + 1}. ${vaga.nome}`)
    .join("\n");
  salvarCandidato.indiceVaga = parseInt(
    prompt(`Escolha a vaga para a qual deseja se candidatar:\n${opcoesVagas}`)
  );

  if (
    isNaN(salvarCandidato.indiceVaga) ||
    salvarCandidato.indiceVaga < 1 ||
    salvarCandidato.indiceVaga > listaVagasSalva.length
  ) {
    alert("Opção inválida. Escolha um índice válido.");
    return;
  }

  let confirma = confirm(
    `Aperte "OK" para confirmar as informações.\n
        Nome: ${salvarCandidato.nome}    
        Índice da Vaga: ${salvarCandidato.indiceVaga}        `
  );

  if (confirma === true) {
    listaCandidatoVaga.push(salvarCandidato);
    alert("Candidato inscrito com sucesso!");
  } else {
    alert("Inscrição cancelada.");
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
      if (listaVagasSalva.length === 0) {
        alert("Não há vagas para listar.");
      } else {
        listarVagaDisponivel();
      }
      break;

    case 2:
      criarNovaVaga();
      break;

    case 3:
      if (listaVagasSalva.length === 0) {
        alert("Não há vagas para visualizar.");
      } else {
        visualizarVaga();
      }
      break;

    case 4:
      if (listaVagasSalva.length === 0) {
        alert("Não há vagas para se candidatar.");
      } else {
        inscreverCandidatoVaga();
      }
      break;

    case 5:
      if (listaVagasSalva.length === 0) {
        alert("Não há vagas para excluir.");
      } else {
        excluirVaga();
      }
      break;

    case 6:
      alert("Saindo....");
      break;

    default:
      alert("Digite um número válido.");
      break;
  }
}
