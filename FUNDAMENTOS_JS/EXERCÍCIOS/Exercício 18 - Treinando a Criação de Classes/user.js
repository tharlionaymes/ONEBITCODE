class User{
    // Define a classe "User"
    constructor(fullname, email, password){
        // Define o construtor da classe, que recebe os parâmetros fullname, email e password, e inicializa as propriedades correspondentes do objeto.
        this.fullname = fullname // Define a propriedade "fullname" do objeto como o valor passado para o parâmetro "fullname".
        this.email = email // Define a propriedade "email" do objeto como o valor passado para o parâmetro "email".
        this.password = password // Define a propriedade "password" do objeto como o valor passado para o parâmetro "password".
    }

    login(loginEmail, loginPass){
        // Define o método "login", que verifica se o email e a senha passados correspondem aos do usuário.
        if (loginEmail === this.email && loginPass === this.password){
            // Verifica se o email e a senha passados são iguais aos do usuário.
            console.log("Sucesso no Login!!!") // Se forem iguais, imprime "Sucesso no Login!!!" no console.
        }else{
            console.log("Erro de Login!!!") // Se não forem iguais, imprime "Erro de Login!!!" no console.
        }
    }
}

const usuario1 = new User("João Silva", "joao@example.com", "senha123"); // Cria uma nova instância da classe "User" com os valores passados e atribui à variável "usuario1".
usuario1.login("joao@example.com", "senha123"); // Chama o método "login" da instância "usuario1" com email e senha corretos. Imprimirá "Sucesso no Login!!!".
usuario1.login("joao@example.com", "senhaErrada"); // Chama o método "login" da instância "usuario1" com email correto e senha incorreta. Imprimirá "Erro de Login!!!".
