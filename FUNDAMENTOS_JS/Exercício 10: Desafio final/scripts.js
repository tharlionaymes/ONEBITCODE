function criarNovaVaga() {
  // Criando um array vazio
  let novaVaga = [];

  // Loop principal
  while (true) {
    // Loop infinito até que o usuário escolha sair
    // Pedindo informações ao usuário usando o prompt
    let nomeVaga = prompt("Digite um nome para a vaga:");
    let descricaoVaga = prompt("Digite uma descrição para a vaga:");
    let dataLimite = prompt(
      "Qual a data limite dessa vaga (Exemplo: 17/01/24):"
    );

    // Confirmar as informações antes de adicionar ao array
    let confirmar = confirm(
      `Confirme as informações:\nNome da Vaga: ${nomeVaga}\nDescrição da Vaga: ${descricaoVaga}\nData Limite: ${dataLimite}`
    );

    // Se o usuário confirmar, criar e adicionar um objeto ao array
    if (confirmar) {
      novaVaga.push({
        nomeVaga: nomeVaga,
        descricaoVaga: descricaoVaga,
        dataLimite: dataLimite,
      });
      alert("Vaga adicionada com sucesso!");
    } else {
      // Se o usuário não confirmar, perguntar se deseja corrigir informações ou sair
      let corrigir = confirm("Deseja corrigir as informações?");

      if (corrigir) {
        do {
          // Perguntar ao usuário em qual parte deseja corrigir
          let opcaoCorrecao = prompt(
            "Escolha uma opção para corrigir:\n1. Nome\n2. Descrição\n3. Data Limite\n4. Cancelar Correção"
          );

          switch (opcaoCorrecao) {
            case "1":
              // Corrigir o nome
              nomeVaga = prompt("Digite o novo nome para a vaga:");
              break;
            case "2":
              // Corrigir a descrição
              descricaoVaga = prompt("Digite a nova descrição para a vaga:");
              break;
            case "3":
              // Corrigir a data limite
              dataLimite = prompt(
                "Digite a nova data limite para a vaga (Exemplo: 17/01/24):"
              );
              break;
            case "4":
              // Cancelar a correção, terminamos o loop
              alert(
                "Cancelando correção. Saindo do processo de adição de vagas."
              );
              return novaVaga;
            default:
              alert("Opção inválida. Tente novamente.");
              break;
          }

          // Mostrar as informações corrigidas para confirmação
          confirmar = confirm(
            `Confirme as informações corrigidas:\nNome da Vaga: ${nomeVaga}\nDescrição da Vaga: ${descricaoVaga}\nData Limite: ${dataLimite}`
          );
        } while (!confirmar);
      } else {
        // Usuário escolheu sair, terminamos o loop
        alert("Saindo do processo de adição de vagas.");
        return novaVaga;
      }
    }

    // Perguntar ao usuário se deseja adicionar outra vaga
    let adicionarOutra = confirm("Deseja adicionar outra vaga?");

    if (!adicionarOutra) {
      // Se o usuário não quiser adicionar outra vaga, terminamos o loop
      break;
    }
  }

  // Retornando o array com os objetos
  return novaVaga;
}

let menu = 0;

while (menu !== 6) {
  menu = parseInt(
    prompt(
      "Sistema de Vagas de Emprego:\n1 - Vagas Disponíveis\n2 - Criar Nova Vaga\n3 - Visualizar uma Vaga\n4 - Inscrever um candidato em uma vaga\n5 - Excluir uma vaga\n6 - Sair"
    )
  );

  switch (menu) {
    case 1:
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
