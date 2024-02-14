const qdd = document.getElementById("clique")
const div = document.getElementById("container")


function clicar(){
    qdd.innerText = "CLICOU!!!"
    qdd.style.backgroundColor = "red"
};

function entrar(){
    qdd.innerText = "ENTROU!!!"
    qdd.style.backgroundColor = "green"
}

function sair(){
    qdd.innerText = "SAIU!!!"
    qdd.style.backgroundColor = "#05f"
}
function interagir(){
    qdd.innerText = "Interação"
    qdd.style.backgroundColor = "yellow"
}

qdd.addEventListener("click", clicar)
qdd.addEventListener("mouseenter", entrar)
qdd.addEventListener("mouseleave",sair)
div.addEventListener("mouseout", interagir)