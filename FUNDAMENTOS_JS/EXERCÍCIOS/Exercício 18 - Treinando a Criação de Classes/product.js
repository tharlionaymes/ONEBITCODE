class Product{
    // Define a classe "Product"
    constructor(name, description, price, inStock = 0){
        // Define o construtor da classe, que recebe os parâmetros name, description, price e inStock, e inicializa as propriedades correspondentes do objeto.
        this.name = name // Define a propriedade "name" do objeto como o valor passado para o parâmetro "name".
        this.description = description // Define a propriedade "description" do objeto como o valor passado para o parâmetro "description".
        this.price = price // Define a propriedade "price" do objeto como o valor passado para o parâmetro "price".
        this.inStock = inStock // Define a propriedade "inStock" do objeto como o valor passado para o parâmetro "inStock", ou 0 se nenhum valor for passado.
    }

    addToStock(qtd){
        // Define o método "addToStock", que adiciona a quantidade especificada ao estoque do produto.
        this.inStock += qtd // Incrementa o valor da propriedade "inStock" pelo valor passado para o parâmetro "qtd".
    }

    calculateDiscount(percent){
        // Define o método "calculateDiscount", que calcula e retorna o preço do produto com desconto.
        return this.price = this.price * ((100 - percent)/ 100) // Calcula o preço com desconto e atualiza o valor da propriedade "price", além de retornar o valor calculado.
    }
}

const carro = new Product("Ka","sedan",1000,1) // Cria uma nova instância da classe "Product" com os valores passados e atribui à variável "carro".
console.log(carro) // Imprime no console o objeto "carro" criado.
carro.addToStock(9) // Chama o método "addToStock" da instância "carro", adicionando 9 unidades ao estoque.
console.log(carro) // Imprime no console o objeto "carro" após a adição ao estoque.
carro.calculateDiscount(10) // Chama o método "calculateDiscount" da instância "carro", aplicando um desconto de 10% ao preço.
console.log(carro) // Imprime no console o objeto "carro" após o cálculo do desconto.
