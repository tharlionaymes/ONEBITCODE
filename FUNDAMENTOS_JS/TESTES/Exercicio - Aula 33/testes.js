const caixa1 = document.getElementById("caixa1")
const caixa2 = document.getElementById("caixa2")
const btn1 = document.getElementById("btn_caixa1")
const btn2 = document.getElementById("btn_caixa2")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})


btn1.addEventListener("click",()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
    caixa1.appendChild(el)
    })
})


btn2.addEventListener("click",()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
})