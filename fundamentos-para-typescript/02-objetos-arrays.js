// ===========================================
// MÓDULO 02: OBJETOS E ARRAYS (ESTRUTURAS DE DADOS)
// ===========================================

/*
    🎯 OBJETIVO DESTE MÓDULO:
    
    Dominar as duas estruturas de dados mais importantes do JavaScript:
    - OBJETOS: Coleções de propriedades (pares chave-valor)
    - ARRAYS: Listas ordenadas de valores
    
    Você usará objetos e arrays TODOS OS DIAS como desenvolvedor!
*/

console.log('🚀 MÓDULO 02: OBJETOS E ARRAYS\n');

// ===========================================
// PARTE 1: OBJETOS - FUNDAMENTOS
// ===========================================

console.log('═══════════════════════════════════════════════');
console.log('PARTE 1: OBJETOS - FUNDAMENTOS');
console.log('═══════════════════════════════════════════════\n');

// Criando objetos - Sintaxe Literal (mais comum)
const pessoa = {
    nome: 'João Silva',
    idade: 30,
    email: 'joao@email.com',
    ativo: true
};

console.log('📦 Objeto pessoa:', pessoa);
console.log('   Tipo:', typeof pessoa, '\n');

// Acessando propriedades - Notação de ponto
console.log('🔹 Acessando com notação de ponto:');
console.log('   pessoa.nome:', pessoa.nome);
console.log('   pessoa.idade:', pessoa.idade);
console.log('   pessoa.email:', pessoa.email, '\n');

// Acessando propriedades - Notação de colchetes
console.log('🔹 Acessando com notação de colchetes:');
console.log('   pessoa["nome"]:', pessoa['nome']);
console.log('   pessoa["idade"]:', pessoa['idade']);

// Quando usar colchetes? Quando a chave é dinâmica ou tem caracteres especiais
const propriedade = 'email';
console.log(`   pessoa[propriedade]:`, pessoa[propriedade]); // Dinâmico!
console.log('');

// Adicionando novas propriedades
pessoa.telefone = '(11) 98765-4321';
pessoa['cpf'] = '123.456.789-00';

console.log('➕ Depois de adicionar telefone e cpf:', pessoa, '\n');

// Modificando propriedades existentes
pessoa.idade = 31;
console.log('🔄 Depois de modificar idade:', pessoa.idade, '\n');

// Deletando propriedades
delete pessoa.ativo;
console.log('➖ Depois de deletar "ativo":', pessoa, '\n');

// Objetos podem conter qualquer tipo de valor
const produto = {
    nome: 'Notebook',
    preco: 3500.00,
    emEstoque: true,
    categorias: ['Eletrônicos', 'Informática'], // Array dentro de objeto
    fabricante: { // Objeto dentro de objeto (aninhado)
        nome: 'Dell',
        pais: 'EUA'
    },
    calcularDesconto: function(percentual) { // Método (função dentro de objeto)
        return this.preco * (percentual / 100);
    }
};

console.log('📦 Objeto complexo (produto):', produto);
console.log('   Categorias (array):', produto.categorias);
console.log('   Fabricante (objeto):', produto.fabricante);
console.log('   Fabricante país:', produto.fabricante.pais);
console.log('   Desconto de 10%:', produto.calcularDesconto(10), '\n');

// ===========================================
// PARTE 2: ARRAYS - FUNDAMENTOS
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 2: ARRAYS - FUNDAMENTOS');
console.log('═══════════════════════════════════════════════\n');

// Criando arrays - Sintaxe Literal
const numeros = [1, 2, 3, 4, 5];
const frutas = ['maçã', 'banana', 'laranja'];
const misto = [1, 'texto', true, null, { nome: 'obj' }]; // Tipos misturados (possível mas não recomendado)

console.log('📦 Array numeros:', numeros);
console.log('📦 Array frutas:', frutas);
console.log('📦 Array misto:', misto);
console.log('   Tipo:', typeof numeros, '(sempre "object")', '\n');

// Acessando elementos por índice (começa em 0)
console.log('🔹 Acessando elementos:');
console.log('   frutas[0]:', frutas[0]); // Primeiro elemento
console.log('   frutas[1]:', frutas[1]); // Segundo elemento
console.log('   frutas[2]:', frutas[2]); // Terceiro elemento
console.log('   frutas[3]:', frutas[3]); // undefined (não existe)
console.log('');

// Propriedades importantes
console.log('🔹 Propriedades do array:');
console.log('   frutas.length:', frutas.length); // Tamanho do array
console.log('   Último elemento:', frutas[frutas.length - 1], '\n');

// Modificando elementos
frutas[1] = 'morango'; // Substitui "banana" por "morango"
console.log('🔄 Depois de modificar índice 1:', frutas, '\n');

// Adicionando elementos
frutas.push('uva'); // Adiciona no final
frutas.unshift('abacaxi'); // Adiciona no início
console.log('➕ Depois de push e unshift:', frutas, '\n');

// Removendo elementos
const ultimoElemento = frutas.pop(); // Remove do final
const primeiroElemento = frutas.shift(); // Remove do início
console.log('➖ Elemento removido do final:', ultimoElemento);
console.log('➖ Elemento removido do início:', primeiroElemento);
console.log('   Array agora:', frutas, '\n');

// ===========================================
// PARTE 3: DESTRUCTURING (ES6+)
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 3: DESTRUCTURING - SINTAXE MODERNA');
console.log('═══════════════════════════════════════════════\n');

// Destructuring de Objetos
const usuario = {
    id: 1,
    nome: 'Maria Santos',
    email: 'maria@email.com',
    idade: 28,
    cidade: 'São Paulo'
};

// Forma antiga (verbosa)
const nomeAntigo = usuario.nome;
const emailAntigo = usuario.email;

// Forma moderna (destructuring) ✨
const { nome, email, idade } = usuario;

console.log('✨ Destructuring de objeto:');
console.log('   nome:', nome);
console.log('   email:', email);
console.log('   idade:', idade, '\n');

// Destructuring com renomeação
const { nome: nomeUsuario, email: emailUsuario } = usuario;
console.log('🔄 Destructuring com renomeação:');
console.log('   nomeUsuario:', nomeUsuario);
console.log('   emailUsuario:', emailUsuario, '\n');

// Destructuring com valor padrão
const { telefone = 'Não informado', pais = 'Brasil' } = usuario;
console.log('⚙️ Destructuring com valores padrão:');
console.log('   telefone:', telefone); // Não existe no objeto, usa valor padrão
console.log('   pais:', pais, '\n'); // Não existe no objeto, usa valor padrão

// Destructuring de Arrays
const cores = ['vermelho', 'verde', 'azul', 'amarelo'];

const [primeira, segunda, terceira] = cores;
console.log('✨ Destructuring de array:');
console.log('   primeira cor:', primeira);
console.log('   segunda cor:', segunda);
console.log('   terceira cor:', terceira, '\n');

// Ignorando elementos
const [, , corFavorita] = cores; // Ignora as duas primeiras
console.log('⏭️ Ignorando elementos:', corFavorita, '\n');

// Rest operator em destructuring
const [primeiraCor, ...restoCores] = cores;
console.log('📦 Rest operator:');
console.log('   primeiraCor:', primeiraCor);
console.log('   restoCores:', restoCores, '\n');

// ===========================================
// PARTE 4: SPREAD OPERATOR (...)
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 4: SPREAD OPERATOR (...) - SUPER ÚTIL!');
console.log('═══════════════════════════════════════════════\n');

// Spread em Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Concatenando arrays
const arrayCombinado = [...array1, ...array2];
console.log('🔗 Concatenando arrays com spread:');
console.log('   array1:', array1);
console.log('   array2:', array2);
console.log('   combinado:', arrayCombinado, '\n');

// Copiando arrays
const copiaArray = [...array1];
console.log('📋 Copiando array:');
console.log('   original:', array1);
console.log('   cópia:', copiaArray);
console.log('   São iguais?', array1 === copiaArray); // false (diferentes referências!)
console.log('');

// Spread em Objetos
const dadosBasicos = {
    nome: 'Pedro',
    idade: 25
};

const dadosContato = {
    email: 'pedro@email.com',
    telefone: '(11) 99999-8888'
};

// Combinando objetos
const usuarioCompleto = {
    ...dadosBasicos,
    ...dadosContato,
    ativo: true
};

console.log('🔗 Combinando objetos com spread:');
console.log('   usuarioCompleto:', usuarioCompleto, '\n');

// Spread sobrescreve propriedades
const config = {
    tema: 'claro',
    idioma: 'pt-BR',
    notificacoes: true
};

const novaConfig = {
    ...config,
    tema: 'escuro' // Sobrescreve tema
};

console.log('🔄 Spread com sobrescrita:');
console.log('   config original:', config);
console.log('   novaConfig:', novaConfig, '\n');

// ===========================================
// PARTE 5: MÉTODOS ÚTEIS DE OBJETOS
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 5: MÉTODOS ÚTEIS DE OBJETOS');
console.log('═══════════════════════════════════════════════\n');

const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2023,
    cor: 'prata'
};

// Object.keys() - Retorna array com as chaves
const chaves = Object.keys(carro);
console.log('🔑 Object.keys(carro):', chaves, '\n');

// Object.values() - Retorna array com os valores
const valores = Object.values(carro);
console.log('💎 Object.values(carro):', valores, '\n');

// Object.entries() - Retorna array de pares [chave, valor]
const entradas = Object.entries(carro);
console.log('📋 Object.entries(carro):', entradas, '\n');

// Iterando sobre objeto
console.log('🔁 Iterando sobre objeto com for...of:');
for (const [chave, valor] of Object.entries(carro)) {
    console.log(`   ${chave}: ${valor}`);
}
console.log('');

// Object.assign() - Copia propriedades
const copia = Object.assign({}, carro);
console.log('📋 Object.assign():', copia, '\n');

// Object.freeze() - Torna imutável
const objetoCongelado = Object.freeze({ valor: 100 });
objetoCongelado.valor = 200; // Não funciona!
console.log('❄️ Object.freeze():', objetoCongelado.valor); // Ainda é 100
console.log('');

// ===========================================
// PARTE 6: MÉTODOS ÚTEIS DE ARRAYS
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 6: MÉTODOS BÁSICOS DE ARRAYS');
console.log('═══════════════════════════════════════════════\n');

const lista = [1, 2, 3, 4, 5];

// includes() - Verifica se contém elemento
console.log('🔍 includes():');
console.log('   lista.includes(3):', lista.includes(3)); // true
console.log('   lista.includes(10):', lista.includes(10), '\n'); // false

// indexOf() - Retorna índice do elemento (-1 se não encontrar)
console.log('🔍 indexOf():');
console.log('   lista.indexOf(3):', lista.indexOf(3)); // 2
console.log('   lista.indexOf(10):', lista.indexOf(10), '\n'); // -1

// slice() - Retorna porção do array (não modifica original)
const porcao = lista.slice(1, 4); // Do índice 1 até 3 (não inclui 4)
console.log('✂️ slice(1, 4):', porcao);
console.log('   Original:', lista, '\n'); // Não foi modificado

// concat() - Concatena arrays
const lista2 = [6, 7, 8];
const concatenado = lista.concat(lista2);
console.log('🔗 concat():', concatenado, '\n');

// join() - Transforma array em string
const palavras = ['JavaScript', 'é', 'incrível'];
const frase = palavras.join(' ');
console.log('🔗 join(" "):', frase, '\n');

// reverse() - Inverte array (MODIFICA o original!)
const invertido = [1, 2, 3, 4, 5];
invertido.reverse();
console.log('🔄 reverse():', invertido, '(modificou o original!)\n');

// ===========================================
// PARTE 7: JSON - TRABALHANDO COM DADOS
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 7: JSON (JavaScript Object Notation)');
console.log('═══════════════════════════════════════════════\n');

const aluno = {
    nome: 'Ana',
    idade: 22,
    curso: 'Desenvolvimento Web',
    notas: [8.5, 9.0, 7.5]
};

// JSON.stringify() - Converte objeto para string JSON
const alunoJSON = JSON.stringify(aluno);
console.log('📤 JSON.stringify():');
console.log('   Objeto:', aluno);
console.log('   JSON:', alunoJSON);
console.log('   Tipo:', typeof alunoJSON, '\n');

// JSON.stringify() com formatação (3º parâmetro = indentação)
const alunoJSONFormatado = JSON.stringify(aluno, null, 2);
console.log('📤 JSON.stringify() formatado:');
console.log(alunoJSONFormatado, '\n');

// JSON.parse() - Converte string JSON para objeto
const alunoDeVolta = JSON.parse(alunoJSON);
console.log('📥 JSON.parse():');
console.log('   JSON:', alunoJSON);
console.log('   Objeto:', alunoDeVolta);
console.log('   Tipo:', typeof alunoDeVolta, '\n');

// ===========================================
// PARTE 8: CHECANDO TIPOS
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 8: VERIFICANDO TIPOS');
console.log('═══════════════════════════════════════════════\n');

const valor1 = [1, 2, 3];
const valor2 = { nome: 'João' };
const valor3 = 'texto';

// Array.isArray() - Verifica se é array
console.log('🔍 Array.isArray():');
console.log('   Array.isArray(valor1):', Array.isArray(valor1)); // true
console.log('   Array.isArray(valor2):', Array.isArray(valor2)); // false
console.log('   Array.isArray(valor3):', Array.isArray(valor3), '\n'); // false

// instanceof - Verifica tipo mais específico
console.log('🔍 instanceof:');
console.log('   valor1 instanceof Array:', valor1 instanceof Array); // true
console.log('   valor2 instanceof Object:', valor2 instanceof Object); // true
console.log('   valor3 instanceof String:', valor3 instanceof String, '\n'); // false (primitivo)

// ===========================================
// PARTE 9: EXERCÍCIOS PRÁTICOS
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('EXERCÍCIOS - MÓDULO 02');
console.log('═══════════════════════════════════════════════\n');

console.log(`
🎯 DESAFIOS:

1. Crie um objeto "livro" com: título, autor, ano, páginas
   Adicione um método que retorna: "TÍTULO por AUTOR (ANO)"

2. Crie um array de 5 produtos (objetos com nome e preço)
   Use destructuring para extrair o primeiro e o último

3. Use spread operator para:
   - Combinar dois arrays de números
   - Adicionar uma nova propriedade a um objeto sem modificar o original

4. Dado o objeto:
   const user = { nome: 'João', idade: 30, cidade: 'SP' }
   
   Use Object.entries() para criar um array de strings:
   ['nome: João', 'idade: 30', 'cidade: SP']

5. Crie uma função que recebe um array e retorna um objeto
   com a contagem de cada elemento:
   
   contarElementos(['a', 'b', 'a', 'c', 'b', 'a'])
   // { a: 3, b: 2, c: 1 }

💡 DICA: Use os métodos que aprendeu neste módulo!
`);

console.log('\n✅ Módulo 02 concluído!');
console.log('📚 Próximo: Módulo 03 - Valor vs Referência (CRÍTICO!)\n');
