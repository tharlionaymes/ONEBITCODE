function calcularAreaTriangulo() {
  let base = parseFloat(prompt("Digite a Base do Triângulo: "));
  let altura = parseFloat(
    prompt(`A Base é igual a ${base}.\n\nDigite a Altura do Triângulo: `)
  );

  let area = (base * altura) / 2;

  alert(
    `A Base é igual a: ${base}\nA Altura é igual a: ${altura}\nÁrea do Triângulo é (${base} x ${altura}) / 2 = ${area}`
  );

  return area;
}

function calcularAreaRetangulo() {
  let base = parseFloat(prompt("Digite a Base do Retângulo: "));
  let altura = parseFloat(
    prompt(`A Base é igual a ${base}.\n\nDigite a Altura do Retângulo: `)
  );

  let area = base * altura;

  alert(
    `A Base é igual a: ${base}\nA Altura é igual a: ${altura}\nÁrea do Retângulo é (${base} x ${altura}) = ${area}`
  );

  return area;
}

function calcularAreaQuadrado() {
  let lado = parseFloat(prompt("Digite o Lado do Quadrado: "));

  let area = lado * lado;

  alert(
    `A Lado é igual a: ${lado}\nÁrea do Quadrado é (${lado} x ${lado}) = ${area}`
  );

  return area;
}

function calcularAreaTrapezio() {
  let baseMaior = parseFloat(prompt("Digite a Base Maior do Trapézio: "));
  let baseMenor = parseFloat(
    prompt(
      `A Base Maior é igual a ${baseMaior}.\n\nDigite a Base Menor do Trapêzio: `
    )
  );
  let altura = parseFloat(
    prompt(
      `A Base Maior é igual a ${baseMaior}.\nA Base Menor é igual a ${baseMenor}\n\nDigite a Altura do Trapêzio: `
    )
  );

  let area = ((baseMaior + baseMenor) * altura) / 2;

  alert(
    `A Base Maior é igual a: ${baseMaior}\n A Base Menor é igual a ${baseMenor}\nA Altura é igual a: ${altura}\nÁrea do Trapêzio é ((${baseMaior} + ${baseMenor}) * ${altura}) / 2 = ${area}`
  );

  return area;
}

function calcularAreaCirculo() {
  let raio = parseFloat(prompt("Digite o Raio do Círculo: "));

  let area = 3.14 * (raio * raio);

  alert(
    `O Raio é igual a: ${raio}\nÁrea do Círculo é (pi = 3,14 x ${raio}²) = ${area}`
  );

  return area;
}

function calcularTodasAreas() {
  let base = parseFloat(prompt("Digite a Base: "));
  let altura = parseFloat(prompt("Digite a Altura: "));
  let lado = parseFloat(prompt("Digite o Lado: "));
  let baseMaior = parseFloat(prompt("Digite a Base Maior: "));
  let baseMenor = parseFloat(prompt("Digite a Base Menor: "));
  let raio = parseFloat(prompt("Digite o Raio: "));

  let area1 = (base * altura) / 2;
  let area2 = base * altura;
  let area3 = lado * lado;
  let area4 = ((baseMaior + baseMenor) * altura) / 2;
  let area5 = 3.14 * (raio * raio);

  alert(`
    A Base = ${base}
    A Altura = ${altura}    
    O Lado = ${lado}
    A Base Maior = ${baseMaior}
    A Base menor = ${baseMenor}
    O Raio = ${raio}
    Área do Triângulo é (${base} x ${altura}) / 2 = ${area1}
    Área do Retângulo é (${base} x ${altura}) = ${area2}
    Área do Quadrado é (${lado} x ${lado}) = ${area3}
    Área do Trapêzio é ((${baseMaior} + ${baseMenor}) * ${altura}) / 2 = ${area4}
    Área do Círculo é (pi = 3,14 x ${raio}²) = ${area5}
    `);
}

let opcao = 0;

while (opcao !== 7) {
  opcao = parseInt(
    prompt(
      "Escolha uma Opção:\n1 - Área do Triangulo\n2 - Área do Retângulo\n3 - Área do Quadrado\n4 - Área do Trapézio\n5 - Área do Círculo\n6 - Todas as Opções Acima\n7 - Sair"
    )
  );

  switch (opcao) {
    case 1:
      calcularAreaTriangulo();
      break;

    case 2:
      calcularAreaRetangulo();
      break;

    case 3:
      calcularAreaQuadrado();
      break;

    case 4:
      calcularAreaTrapezio();
      break;

    case 5:
      calcularAreaCirculo();
      break;

    case 6:
      calcularTodasAreas();
      break;

    case 7:
      alert("Saindo....");
      break;

    default:
      alert("Digite um número válido!!!");
      break;
  }
}
