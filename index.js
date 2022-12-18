const prompt = require('prompt-sync')()

var nome = prompt("Digite seu Nome:  ")
var salario_bruto = parseFloat(prompt("Digite seu Salario Bruto:   "));
var ir = salario_bruto * 0.10;
var salario_liquido = salario_bruto - ir;
console.log("Salario Liquido R$", salario_liquido);

