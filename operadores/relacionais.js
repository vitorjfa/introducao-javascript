// **Igual (==): 5 == 5
// **Diferente (!=): 8 != 80
// Maior que (>): 12 > 11
// Menor que (<): 11 < 12
// Maior ou igual (>=): 18 >= 17
// Menor ou igual (<=): 16 <= 16

const maior = 5 > 4
const menor = 4 < 5
const maiorOuIgual = 5 >= 5
const menorOuIgual = 10 <= 20

console.log('maior: ', maior)
console.log('menor: ', menor)
console.log('maiorOuIgual: ', maiorOuIgual)
console.log('menorOuIgual: ', menorOuIgual)

// O Cliente dispensa acompanhamento da instalação ? ** ERRADO
const naoAcompanhaInstalacao = true 
// Voce deseja acompanhar a instalação ? ** CORRETO 
const acompanharInstalacao = true


// Igualdade simples e estrita
// Igualdade simples -> não leva em consideração o tipo
const stringENumbersSaoIguais = 5 == "5"

// Igualdade estrita -> leva em consideração o tipo
const stringENumbersNaoSaoIguais = 5 === "5"

console.log('Igualdade simples: ', stringENumbersSaoIguais)
console.log('Igualdade estrita', stringENumbersNaoSaoIguais)