class Veiculo{
    move(){
        console.log("Veículo em movimento.")
    }
}

class Carro extends Veiculo{
    move(){
        console.log("O Carro está andando.")
    }
}

class Barco extends Veiculo{
    move(){
        console.log("O Barco está navegando.")
    }
}

class Aviao extends Veiculo{
    move(velocidade){
        console.log(`O Avião está voando a ${velocidade}Km/h.`)
    }
}

const ferrari = new Carro()
const iate = new Barco()
const f16 = new Aviao()

function start (veiculo){
    console.log("Ligando o veículo!!!")
    veiculo.move()
}

start(ferrari)
start(iate)
start(f16)