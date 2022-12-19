const prompt = require('prompt-sync')()

var nome = prompt("Digite seu Nome:  ")
var salario_bruto = parseFloat(prompt("Digite seu Salario Bruto:   "));

if(salario_bruto > 0 && salario_bruto <= 1903.98){
  var ir = salario_bruto * 0.05;
}else if( salario_bruto <= 2826.65){
  var ir = salario_bruto * 0.75;
}else{
  var ir = salario_bruto * 0.15;
}



var salario_liquido = salario_bruto - ir;
console.log("Salario Liquido R$", salario_liquido);

