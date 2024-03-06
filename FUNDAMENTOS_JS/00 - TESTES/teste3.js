// PROBLEMAS

// 1 - Dada uma string, retornar a menor palavra encontrada em caso de empate, retornar a primeira palavra
function encontrarMenorPalavra(frase){
    
    let fraseFatiada = frase.split(" ");
    let menorPalavra = fraseFatiada[0];

    for (let i = 1; i < fraseFatiada.length; i++){
        if (fraseFatiada[i].length < menorPalavra.length){
            menorPalavra = fraseFatiada[i]
        }
    }

    return menorPalavra
}
console.log(encontrarMenorPalavra("Temos duas palavras reservadas da linguagem que servem para estes casos"))

// 2 - Dada uma string, retornar um objeto que cada propriedade é a primeira letra das palavras encontradas e o valor é o número de vezes que essa letra é encontrada sendo a primeira letra de cada palavra

// Desenvolva uma função que recebe uma string e retorne a mesma string com as letras embaralhadas.
