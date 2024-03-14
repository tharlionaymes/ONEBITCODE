const Address = require("./address")
const Person = require("./person")

const addr = new Address ("7 de Setembro",99,"Centro","Rio de Janeiro", "RJ")
const mario = new Person("Mario Luigi",addr)

console.log(mario)
console.log(mario.address.fullAddress())