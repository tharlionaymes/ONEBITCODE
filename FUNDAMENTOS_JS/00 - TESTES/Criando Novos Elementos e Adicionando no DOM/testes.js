const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")


/*const novoElemento = document.createElement("div")
novoElemento.innerHTML = "Machine Learning"

//Estamos dando ao novoElemento um id = c7
novoElemento.setAttribute("id","c7")

//Estamos dando ao novoElemento duas classes uma curso e outra c1
novoElemento.setAttribute("class","curso c1")

caixa1.appendChild(novoElemento)*/

//Adicionar os cursos dinamicamente

const cursos = ["HTML", "CSS","JS","PHP","React","MySQL","Machine Learning"]

cursos.map((el,i)=>{
    const criarElementos = document.createElement("div")
    criarElementos.innerHTML = el
    criarElementos.setAttribute("id", "c" + (i+1))
    criarElementos.setAttribute("class","curso c1")
    
    const btn_lixeira = document.createElement("img")
    btn_lixeira.setAttribute("src", "lixeira2.png")
    btn_lixeira.setAttribute("class","btn_lixeira")

    btn_lixeira.addEventListener("click",(evt)=>{
        caixa1.removeChild(evt.target.parentNode)
        console.log(evt.target.parentNode)
    })
    
    criarElementos.appendChild(btn_lixeira)
    caixa1.appendChild(criarElementos)
})