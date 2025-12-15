// Atribuir um valor a uma variável é dar um valor a uma variável. É o mesmo que guardar um valor em um espaço da memória.

// a = 4;

// string -> aspas simples ou aspas duplas
// string -> representa uma cadeia de caracteres
const dataDeNascimento = "08/05/1991" // ou '08/05/1991'

// char -> representa uma letra do alfabeto
const letraAlfabeto = "A"

// number 
const posicao = 1;

//float 
const valor = 10.5;

// boolean
const passouDeAno = true;

// padrões de LINT -> EsLINT ou BiomeJS

// console.log('Data de nascimento: ', dataDeNascimento)
// console.log('Number - Posição: ', posicao)
// console.log('Float - Valor: ', valor)

// Os Exs. a seguir demonstram a caracteristica de um char e uma string serem um array
console.log('Letra do Alfabeto - Char: ', letraAlfabeto[0])
console.log('Data de Nascimento, posição 2 : ', dataDeNascimento[1])

// O Ex. a seguir mostra como conseguimos separar uma data em DD / MM / YYYY
console.log('Data de Nascimento, posição 2 : ', dataDeNascimento.split('/'))

console.log('Boolean - passouDeAno: ', passouDeAno)