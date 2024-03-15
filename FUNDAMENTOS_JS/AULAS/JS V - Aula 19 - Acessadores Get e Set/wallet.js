class Carteira{
    #quantidade
    #usuario
    constructor(){
        this.#quantidade = 100.99 * 100 // vezes 100 para retornar inteiro
        this.#usuario = "Gabi"
        console.log(this.#quantidade)
        console.log(this.#usuario)
    }

    get quantidade(){
        return this.#quantidade /100
    }

    set usuario(newUsuario){
        this.#usuario = newUsuario
    }

    get usuario(){
        return this.#usuario
    }
}


const myCarteira = new Carteira()
console.log()
console.log(myCarteira.quantidade)

myCarteira.usuario = "Arrascaeta"
console.log(myCarteira.usuario)