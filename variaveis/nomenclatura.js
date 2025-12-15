// Algumas regras a serem seguidas para nomenclatura das variáveis
// O nome de uma variável não deve conter espaços;
// O nome de uma variável não deve conter operadores;
// O nome de uma variável não deve ser só um número;
// Embora seja permitido em JavaScript, o uso de acentos não é permitido em muitas linguagens de programação, por isso recomendamos evitá-los;
// Algumas linguagens de programação diferenciam letras maiúsculas de letras minúsculas, logo: Nome pode ser diferente de nome;
// Variáveis cujo nome seja um substantivo composto, como “data de nascimento”, podem ser nomeadas com o padrão camelCase: dataDeNascimento. Este padrão define que todas as palavras após a primeira devem começar com letra maiúscula. Outra alternativa é utilizar um traço inferior (_), ou underline, entre cada palavra: data_de_nascimento.

// diferença básica entre const e let ( não é necessário , atualmente, mais utilizar var )
// const ->  não permite reatribução de valor 
// Ex: const nome = "daniel"; -> caso na proxima venha nome = "André"; * teremos erro
// let -> permite a reatribução de valor
// Ex: let data = "10/12/2025"; -> caso venha a seguir data = "13/12/2025"; não teremos problema

// const data de nascimento = "" X ERRO
// const soma2+2 = 4 X ERRO
// const 2 = 4 X ERRO
const dataDeNascimento = "08/05/1991" // -> Correto padrão camelCase
const data_de_nascimento = "08/05/1991" // -> Correto padrão snake_case

console.log('Data de nascimento: ', dataDeNascimento)
console.log('Data de nascimento: ', data_de_nascimento)

