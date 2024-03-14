class Account{
    #password
    #balance = 0

    constructor(user){
        this.email = user.email
        this.#password = user.password
    }
}

const user = {
    email: "arrascaeta@gmail.com",
    password:"12345678"
}

const myAccount = new Account(user)

console.log(myAccount)

myAccount.password = "33508545"
myAccount.balance = 77

console.log(myAccount)


