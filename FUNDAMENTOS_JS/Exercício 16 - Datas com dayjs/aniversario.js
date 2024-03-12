const dayjs = require ("dayjs")

function aniversario(date){
    const aniversario = dayjs(date)
    const today = dayjs()

    const idadeAnos = today.diff(aniversario,"year")
    const proxNiver = aniversario.add(idadeAnos + 1, "year")
    const diasProxNiver = proxNiver.diff(today, "day") + 1

    console.log (`Idade: ${idadeAnos} anos`)
    console.log (`Próximo aniversário: ${proxNiver.format("DD/MM/YYYY")}`)
    console.log(`Dias até completar ${idadeAnos + 1} anos: ${diasProxNiver} dias`)
}

aniversario("1988-07-01") //formato americano