import dayjs from "dayjs";
import './styles/index.css'

function atualizarRelogio() {
    // Obtém a hora atual usando Day.js
    const currentTime = dayjs().format("HH:mm:ss");

    // Atualiza o texto do parágrafo com a hora atual
    p2.textContent = `${currentTime}`;
}

const p1 = document.getElementById('p1')
p1.innerText = `Hoje é: ${dayjs().format("DD/MM/YYYY") }`

const p2 = document.createElement("p")
document.body.appendChild(p2)

atualizarRelogio();

setInterval(atualizarRelogio, 1000)