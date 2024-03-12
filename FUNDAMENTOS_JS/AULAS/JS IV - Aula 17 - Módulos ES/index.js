// o comando "import" serve para importar um módulo
import{name, label, input, br} from "./functions.js"

console.log(name)
console.log(label({for:"fullname", textContent:"Nome Completo"}))
console.log(input(
    {id:"fullname", 
    name:"fullname", 
    placeholder:"Digite o seu nome completo..."}))
console.log(br())
