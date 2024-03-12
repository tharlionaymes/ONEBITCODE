let nome = window.prompt("Digite seu primeiro nome:");

let sobrenome = window.prompt("Digite seu sobrenome")

let profissao = window.prompt("Digite sua profissão:")

let anoNascimento = window.prompt("Digite seu ano de nascimento:")

let anoAtual = new Date ().getFullYear();

let idade = anoAtual - anoNascimento

// document.getElementById("nomeCompleto").innerText = "Seu nome completo é: " + nome + " " + sobrenome;

// document.getElementById("profissao").innerText = "Sua profissão é: " + profissao;

// document.getElementById("idadeUsuario").innerText = "Sua Idade é: " + idade;

document.querySelector(".estiloNomeCompleto").innerText = nome + " " + sobrenome;

document.querySelector(".estiloProfissao").innerText = profissao;

document.querySelector(".estiloIdadeUsuario").innerText = idade;