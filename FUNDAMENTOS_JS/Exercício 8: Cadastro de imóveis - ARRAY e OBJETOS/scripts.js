let menu = 0;
let imoveis = []
let contador = 0;

while (menu !== 3){
   
    menu = parseInt(prompt(`Quantidade de Imóveis Cadastrados: ${contador}
    \n1 - Salvar um Imóvel\n2 - Mostrar Todos os Imóveis\n3 - Sair`));

    if (menu === 1){              
        let salvarAp = {}
        salvarAp.proprietario = prompt("Qual o nome do proprietário?")        
        salvarAp.quartos = parseInt(prompt("O imóvel tem quantos quartos?"))    
        salvarAp.banheiros = parseInt(prompt("O imóvel tem quantos Banheiros?"))        
        salvarAp.garagem = prompt("O imóvel possui garagem? Sim/Não")
                
        let confirmar = confirm(
            "Salvar as informações do imóvel?\n" +           
            "\nProprietário: " + salvarAp.proprietario +
            "\nQuartos: " + salvarAp.quartos +
            "\nBanheiros: " + salvarAp.banheiros +
            "\nPossui Garagem? " + salvarAp.garagem
        )
        
        if (confirmar === true){
            imoveis.push(salvarAp)
            contador++
            console.log(imoveis)
        }       
            
    }else if (menu === 2) {    
        for(i = 0; i < imoveis.length; i++){
          console.log(i)
          alert("Imóvel " + (i + 1) +
                "\nProprietário: " + imoveis[i].proprietario +
                "\nQuartos: " + imoveis[i].quartos +
                "\nBanheiros: " + imoveis[i].banheiros +
                "\nPossui Garagem? " + imoveis[i].garagem)
        }
        
        if (contador === 0){
            alert("Nenhum imóvel cadastrado.")
        }
    }
   
    else if (menu === 3) {
        alert("Saindo do Programa.")
    }

    else{
        alert("Você digitou errado! Escolha um número correspondendo as opções!!!")
    }
}