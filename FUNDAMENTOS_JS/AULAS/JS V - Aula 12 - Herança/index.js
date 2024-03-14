class Propriedade {
    constructor(area, preco){
        this.area = area
        this.preco = preco
    }

    precoPorMetroQuadrado(){
        return this.preco / this. area
    }
}
/*
class Casa extends Propriedade {} //class Casa herda a class Propriedade

const terra = new Propriedade(200, 50000)
const algumaCasa = new Casa (120, 20000)

console.log(terra)
console.log(`O preço pelo metro quadrado é ${terra.precoPorMetroQuadrado()}`)
console.log()
console.log(algumaCasa)
console.log(`O preço pelo metro quadrado é ${algumaCasa.precoPorMetroQuadrado()}`)
*/

class Apartamento extends Propriedade{
    constructor(number, area, price){
        super (area, price) // estou herdando da class Propriedade
        this.number = number // exclusivo da class apartamento
    }

    andar(){ // método exclusivo de Apartamento
        return this.number.slice(0,-2)
    }
}

const apt = new Apartamento("201", 100, 150000)
console.log(apt)
console.log(`Localizado no ${apt.andar()}º andar`)

