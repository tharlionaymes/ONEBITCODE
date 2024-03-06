// Vamos usar o comando "export" antes das funções para exporta-las

export const name = "Tharlion"

export function label(attibutes){
    const element = document.createElement('label')
    Object.assign(element, attibutes)
    return element
}

export function input(attibutes){
    const element = document.createElement('input')
    Object.assign(element, attibutes)
    return element
}

export function br(){
    const element = document.createElement('br')
    return element
}

