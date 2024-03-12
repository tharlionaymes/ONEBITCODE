class Book{ // Declaração da classe Book
    constructor(titulo) { // Construtor da classe, recebe o título como parâmetro
        this.titulo = titulo // Define o título do livro
        this.published = false // Define o estado de publicação como falso por padrão
    }

    publish(){ // Método para publicar o livro
        this.published = true // Altera o estado de publicação para verdadeiro
    }
    
}

const eragon = new Book("Eragon") // Cria uma instância da classe Book com o título "Eragon"
const eldest = new Book("Eldest") // Cria outra instância da classe Book com o título "Eldest"

eragon.publish() // Chama o método publish() para o livro "Eragon", publicando-o

console.log(eragon) // Exibe no console as informações do livro "Eragon"
console.log(eldest) // Exibe no console as informações do livro "Eldest" 