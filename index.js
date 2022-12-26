const prompt = require('prompt-sync')()


for (i = 1; i <= 5; i++) {
  console.log("Pessoa: ", i)
  var nome = prompt("Digite seu Nome:  ")
  var salario_bruto = parseFloat(prompt("Digite seu Salario Bruto:   "));
  var dependentes = parseInt(prompt("Digite o numero de dependentes:  "))

for (j = 1; j <= dependentes; j++){
  var ganho = parseInt(prompt("Digite seu ganho mensal: R$"));salario_bruto = ganho + salario_bruto
}
  
  var renda_percapta = salario_bruto  / (dependentes + 1)

  


  if (renda_percapta >= 500) {
    if (salario_bruto > 0 && salario_bruto <= 1903.98) {
      var ir = salario_bruto * 0.05;
    } else if (salario_bruto <= 2826.65) {
      var ir = salario_bruto * 0.75;
    } else {
      var ir = salario_bruto * 0.15;
    }
  } else { var ir = 0; }


  var salario_liquido = salario_bruto - ir;
  console.log("Salario Liquido R$", salario_liquido);



}


