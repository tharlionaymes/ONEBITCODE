/*
Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu
*/

let pacientes = [
    "1° Tharlion", 
    "2º Jessica", 
    "3º Biorne", 
    "4º Arrascaeta", 
    "5° Pulgar", 
    "6º Felipe Luís",
    "7º Thaissa"];

let novoPaciente = []
let consultarPaciente = ""
let escolha = 0
let numeracao = 0


do{
    let escolha = parseInt((prompt("PACIENTES:\n\n" + pacientes.join(", ") + "\n--------------------------------------------------------------------------------1 - Novo Paciente \n2 - Consultar Paciente \n3 - Sair")));

    numeracao = (pacientes.length) + 1 + "º"

    if (escolha === 1){
        novoPaciente = prompt(" Qual o Nome do Paciente? ")
        pacientes.push(numeracao + " " + novoPaciente);
    }else if (escolha ===2){
        consultarPaciente = pacientes.shift();
        pacientes = pacientes.map((paciente, index) => `${index + 1}° ${paciente.split(' ').slice(1).join(' ')}`)
        let partes = consultarPaciente.split(" ")
        let consultado = partes.slice(1).join(" ")
        alert(consultado + " foi consultado(a)!");
    }else if (escolha === 3){
        break;    
    }else {
        alert("Opção inválida. Escolha um número de 1 a 3.");
    }

} while (escolha !== 3)
alert("O programa esta encerrado!!!")


/*
RESOLUCAO DO PROFESSOR

let fila = []
let opcao = ""

do {
  let pacientes = ""
  for (let i = 0; i < fila.length; i++) {
    pacientes += (i + 1) + "º - " + fila[i] + "\n"
  }

  opcao = prompt(
    "Pacientes:\n" + pacientes +
    "\nEscolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
  )

  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Qual é o nome do paciente?")
      fila.push(novoPaciente)
      break
    case "2":
      const pacienteConsultado = fila.shift()
      if (!pacienteConsultado) {
        alert("Não há pacientes na fila!")
      } else {
        alert(pacienteConsultado + " foi removido da fila.")
      }
      break
    case "3":
      alert("Encerrando...")
      break
    default:
      alert("Opção inválida!")
      break
  }
} while (opcao !== "3");

*/