// ===========================================
// MÓDULO 05: MANIPULAÇÃO DE ARRAYS (ES6+) 🌟
// ===========================================

/*
    🎯 OBJETIVO DESTE MÓDULO:
    
    Este é um dos módulos MAIS IMPORTANTES!
    
    Os métodos de array (map, filter, reduce, etc.) são usados
    TODOS OS DIAS por desenvolvedores profissionais.
    
    Você vai aprender:
    - Programação funcional vs imperativa
    - map, filter, reduce, find, every, some
    - Encadeamento (chaining) de métodos
    - Como trabalhar com dados de APIs
    
    TypeScript brilha MUITO aqui com tipos!
*/

console.log('🚀 MÓDULO 05: MANIPULAÇÃO DE ARRAYS (ES6+) 🌟\n');
console.log('⭐ ESTE É UM DOS MÓDULOS MAIS IMPORTANTES! ⭐\n');

// ===========================================
// PARTE 1: PROGRAMAÇÃO IMPERATIVA VS FUNCIONAL
// ===========================================

console.log('═══════════════════════════════════════════════');
console.log('PARTE 1: IMPERATIVO VS FUNCIONAL');
console.log('═══════════════════════════════════════════════\n');

const numeros = [1, 2, 3, 4, 5];

// ❌ FORMA IMPERATIVA (procedural, com loops)
console.log('❌ FORMA IMPERATIVA (antiga):');
console.log('   Dobrar todos os números:\n');

const numerosDobradasImperativo = [];
for (let i = 0; i < numeros.length; i++) {
    numerosDobradasImperativo.push(numeros[i] * 2);
}

console.log('   for (let i = 0; i < numeros.length; i++) {');
console.log('       numerosDobrados.push(numeros[i] * 2);');
console.log('   }');
console.log('   Resultado:', numerosDobradasImperativo);
console.log('   ⚠️ Verboso, com variável mutável, propenso a erros\n');

// ✅ FORMA FUNCIONAL (declarativa, com métodos)
console.log('✅ FORMA FUNCIONAL (moderna):');
console.log('   Dobrar todos os números:\n');

const numerosDobradasFuncional = numeros.map(n => n * 2);

console.log('   const numerosDobrados = numeros.map(n => n * 2);');
console.log('   Resultado:', numerosDobradasFuncional);
console.log('   ✅ Conciso, declarativo, imutável\n');

console.log('💡 VANTAGENS DA ABORDAGEM FUNCIONAL:');
console.log('   ✓ Código mais limpo e legível');
console.log('   ✓ Menos propenso a bugs');
console.log('   ✓ Imutável (não modifica o array original)');
console.log('   ✓ Encadeável (composição de operações)');
console.log('   ✓ Mais fácil de testar\n');

// ===========================================
// PARTE 2: MAP() - TRANSFORMAR ARRAYS
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 2: MAP() - TRANSFORMAR ARRAYS');
console.log('═══════════════════════════════════════════════\n');

console.log('💡 map() = Transforma cada elemento e retorna NOVO array\n');

// Exemplo 1: Transformações simples
const nums = [1, 2, 3, 4, 5];

console.log('📝 Exemplo 1: Transformações Simples');
console.log('   Original:', nums, '\n');

const dobrados = nums.map(n => n * 2);
const quadrados = nums.map(n => n ** 2);
const strings = nums.map(n => `Número ${n}`);

console.log('   Dobrados:', dobrados);
console.log('   Quadrados:', quadrados);
console.log('   Strings:', strings, '\n');

// Exemplo 2: Transformando objetos
const usuarios = [
    { id: 1, nome: 'João', idade: 25 },
    { id: 2, nome: 'Maria', idade: 30 },
    { id: 3, nome: 'Pedro', idade: 28 }
];

console.log('📝 Exemplo 2: Transformando Objetos');
console.log('   Usuários:', usuarios, '\n');

// Extrair apenas nomes
const nomes = usuarios.map(u => u.nome);
console.log('   Apenas nomes:', nomes);

// Extrair apenas idades
const idades = usuarios.map(u => u.idade);
console.log('   Apenas idades:', idades);

// Criar objetos simplificados
const resumos = usuarios.map(u => ({
    id: u.id,
    descricao: `${u.nome} tem ${u.idade} anos`
}));
console.log('   Resumos:', resumos, '\n');

// Exemplo 3: Trabalhando com índice
console.log('📝 Exemplo 3: Usando Índice\n');

const letras = ['a', 'b', 'c'];
const comIndice = letras.map((letra, indice) => `${indice}: ${letra}`);

console.log('   Original:', letras);
console.log('   Com índice:', comIndice, '\n');

// Exemplo 4: Caso de uso real - API
console.log('📝 Exemplo 4: Caso Real - Formatando Dados de API\n');

const produtosAPI = [
    { id: 1, name: 'Notebook', price: 3000, inStock: true },
    { id: 2, name: 'Mouse', price: 50, inStock: false },
    { id: 3, name: 'Teclado', price: 200, inStock: true }
];

// Formatar para o frontend
const produtosFormatados = produtosAPI.map(p => ({
    id: p.id,
    nome: p.name,
    preco: `R$ ${p.price.toFixed(2)}`,
    disponivel: p.inStock ? 'Em estoque' : 'Indisponível'
}));

console.log('   Produtos da API:', produtosAPI[0]);
console.log('   Formatado:', produtosFormatados[0], '\n');

// ⚠️ CUIDADO: map() sempre retorna array do MESMO tamanho
console.log('⚠️ IMPORTANTE: map() SEMPRE retorna array do mesmo tamanho!');
console.log('   [1, 2, 3].map(n => n * 2)  →  [2, 4, 6]  (3 elementos → 3 elementos)\n');

// ===========================================
// PARTE 3: FILTER() - FILTRAR ARRAYS
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 3: FILTER() - FILTRAR ARRAYS');
console.log('═══════════════════════════════════════════════\n');

console.log('💡 filter() = Retorna NOVO array apenas com elementos que passam no teste\n');

// Exemplo 1: Filtros simples
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('📝 Exemplo 1: Filtros Numéricos');
console.log('   Original:', numeros2, '\n');

const pares = numeros2.filter(n => n % 2 === 0);
const impares = numeros2.filter(n => n % 2 !== 0);
const maioresQue5 = numeros2.filter(n => n > 5);

console.log('   Apenas pares:', pares);
console.log('   Apenas ímpares:', impares);
console.log('   Maiores que 5:', maioresQue5, '\n');

// Exemplo 2: Filtrando objetos
const pessoas = [
    { nome: 'João', idade: 17, ativo: true },
    { nome: 'Maria', idade: 25, ativo: true },
    { nome: 'Pedro', idade: 16, ativo: false },
    { nome: 'Ana', idade: 30, ativo: true },
    { nome: 'Carlos', idade: 19, ativo: false }
];

console.log('📝 Exemplo 2: Filtrando Objetos\n');

const maioresDeIdade = pessoas.filter(p => p.idade >= 18);
console.log('   Maiores de idade:', maioresDeIdade);

const usuariosAtivos = pessoas.filter(p => p.ativo);
console.log('   Usuários ativos:', usuariosAtivos);

const adultoAtivos = pessoas.filter(p => p.idade >= 18 && p.ativo);
console.log('   Adultos E ativos:', adultoAtivos, '\n');

// Exemplo 3: Removendo valores falsy
console.log('📝 Exemplo 3: Removendo Valores Falsy\n');

const valores = [0, 1, false, 2, '', 3, null, undefined, 4, NaN];
const apenasValidos = valores.filter(Boolean); // Remove todos os falsy!

console.log('   Com falsy:', valores);
console.log('   Apenas válidos:', apenasValidos, '\n');

// Exemplo 4: Busca em texto
console.log('📝 Exemplo 4: Busca em Texto\n');

const produtos = [
    { nome: 'Notebook Dell', categoria: 'Eletrônicos' },
    { nome: 'Mouse Logitech', categoria: 'Periféricos' },
    { nome: 'Teclado Mecânico', categoria: 'Periféricos' },
    { nome: 'Monitor Samsung', categoria: 'Eletrônicos' }
];

const termoBusca = 'note';
const resultadoBusca = produtos.filter(p => 
    p.nome.toLowerCase().includes(termoBusca.toLowerCase())
);

console.log(`   Busca por "${termoBusca}":`, resultadoBusca, '\n');

// ⚠️ CUIDADO: filter() pode retornar array MENOR (ou vazio!)
console.log('⚠️ IMPORTANTE: filter() pode retornar array de tamanho diferente!');
console.log('   [1, 2, 3, 4].filter(n => n > 2)  →  [3, 4]  (4 elementos → 2 elementos)');
console.log('   [1, 2].filter(n => n > 10)  →  []  (array vazio!)\n');

// ===========================================
// PARTE 4: REDUCE() - AGREGAÇÕES
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 4: REDUCE() - AGREGAÇÕES (PODEROSO!)');
console.log('═══════════════════════════════════════════════\n');

console.log('💡 reduce() = Reduz array a UM único valor');
console.log('   É o método mais PODEROSO e COMPLEXO!\n');

// Exemplo 1: Soma
const nums2 = [1, 2, 3, 4, 5];

console.log('📝 Exemplo 1: Soma de Números');
console.log('   Array:', nums2, '\n');

const soma = nums2.reduce((acumulador, numero) => {
    console.log(`   acc: ${acumulador}, num: ${numero}, resultado: ${acumulador + numero}`);
    return acumulador + numero;
}, 0);

console.log('   Soma total:', soma, '\n');

// Exemplo 2: Produto
const produto = nums2.reduce((acc, n) => acc * n, 1);
console.log('📝 Exemplo 2: Produto:', produto, '\n');

// Exemplo 3: Encontrar o maior
const maiorNumero = nums2.reduce((maior, atual) => atual > maior ? atual : maior);
console.log('📝 Exemplo 3: Maior número:', maiorNumero, '\n');

// Exemplo 4: Contar ocorrências
console.log('📝 Exemplo 4: Contar Ocorrências\n');

const frutas = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã'];

const contagem = frutas.reduce((acc, fruta) => {
    acc[fruta] = (acc[fruta] || 0) + 1;
    return acc;
}, {});

console.log('   Frutas:', frutas);
console.log('   Contagem:', contagem, '\n');

// Exemplo 5: Agrupar por propriedade
console.log('📝 Exemplo 5: Agrupar por Categoria\n');

const itens = [
    { nome: 'Notebook', categoria: 'Eletrônicos', preco: 3000 },
    { nome: 'Mouse', categoria: 'Periféricos', preco: 50 },
    { nome: 'Teclado', categoria: 'Periféricos', preco: 200 },
    { nome: 'Monitor', categoria: 'Eletrônicos', preco: 800 }
];

const porCategoria = itens.reduce((acc, item) => {
    if (!acc[item.categoria]) {
        acc[item.categoria] = [];
    }
    acc[item.categoria].push(item);
    return acc;
}, {});

console.log('   Agrupado:', porCategoria, '\n');

// Exemplo 6: Calcular total do carrinho
console.log('📝 Exemplo 6: Total do Carrinho\n');

const carrinho = [
    { produto: 'Camiseta', preco: 50, quantidade: 2 },
    { produto: 'Calça', preco: 100, quantidade: 1 },
    { produto: 'Tênis', preco: 200, quantidade: 1 }
];

const totalCarrinho = carrinho.reduce((total, item) => {
    return total + (item.preco * item.quantidade);
}, 0);

console.log('   Carrinho:', carrinho);
console.log('   Total: R$', totalCarrinho, '\n');

// Exemplo 7: Flatten (achatar) array
console.log('📝 Exemplo 7: Achatar Array Aninhado\n');

const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);

console.log('   Aninhado:', nested);
console.log('   Achatado:', flat, '\n');

// ===========================================
// PARTE 5: FIND() E FINDINDEX()
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 5: FIND() E FINDINDEX() - BUSCAR');
console.log('═══════════════════════════════════════════════\n');

const users = [
    { id: 1, nome: 'João', email: 'joao@email.com' },
    { id: 2, nome: 'Maria', email: 'maria@email.com' },
    { id: 3, nome: 'Pedro', email: 'pedro@email.com' }
];

// find() - Retorna o PRIMEIRO elemento que passa no teste
console.log('💡 find() - Retorna o elemento ou undefined\n');

const usuario = users.find(u => u.id === 2);
console.log('   find(u => u.id === 2):', usuario);

const naoExiste = users.find(u => u.id === 999);
console.log('   find(u => u.id === 999):', naoExiste, '\n');

// findIndex() - Retorna o ÍNDICE ou -1
console.log('💡 findIndex() - Retorna o índice ou -1\n');

const indice = users.findIndex(u => u.nome === 'Maria');
console.log('   findIndex(u => u.nome === "Maria"):', indice);

const indiceNaoExiste = users.findIndex(u => u.nome === 'Carlos');
console.log('   findIndex(u => u.nome === "Carlos"):', indiceNaoExiste, '\n');

// Caso de uso: Atualizar item em lista
console.log('📝 Caso de Uso: Atualizar Item\n');

const listaOriginal = [...users];
const idParaAtualizar = 2;
const indiceAtualizar = listaOriginal.findIndex(u => u.id === idParaAtualizar);

if (indiceAtualizar !== -1) {
    const listaAtualizada = [
        ...listaOriginal.slice(0, indiceAtualizar),
        { ...listaOriginal[indiceAtualizar], nome: 'Maria Silva' },
        ...listaOriginal.slice(indiceAtualizar + 1)
    ];
    console.log('   Lista atualizada:', listaAtualizada);
}
console.log('');

// ===========================================
// PARTE 6: EVERY() E SOME()
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 6: EVERY() E SOME() - VALIDAÇÕES');
console.log('═══════════════════════════════════════════════\n');

const idades = [20, 25, 30, 18, 22];

// every() - TODOS devem passar no teste
console.log('💡 every() - Retorna true se TODOS passam no teste\n');

const todosMaiores18 = idades.every(idade => idade >= 18);
const todosMaiores25 = idades.every(idade => idade >= 25);

console.log('   Idades:', idades);
console.log('   Todos >= 18?', todosMaiores18);
console.log('   Todos >= 25?', todosMaiores25, '\n');

// some() - PELO MENOS UM deve passar no teste
console.log('💡 some() - Retorna true se PELO MENOS UM passa no teste\n');

const algumMaior30 = idades.some(idade => idade > 30);
const algumMaior25 = idades.some(idade => idade > 25);

console.log('   Algum > 30?', algumMaior30);
console.log('   Algum > 25?', algumMaior25, '\n');

// Caso de uso: Validação de formulário
console.log('📝 Caso de Uso: Validação de Formulário\n');

const campos = [
    { nome: 'email', valor: 'joao@email.com', valido: true },
    { nome: 'senha', valor: '12345678', valido: true },
    { nome: 'nome', valor: '', valido: false }
];

const formularioValido = campos.every(campo => campo.valido);
const temCampoInvalido = campos.some(campo => !campo.valido);

console.log('   Formulário válido?', formularioValido);
console.log('   Tem campo inválido?', temCampoInvalido, '\n');

// ===========================================
// PARTE 7: SORT() - ORDENAÇÃO
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 7: SORT() - ORDENAÇÃO ⚠️');
console.log('═══════════════════════════════════════════════\n');

console.log('⚠️ ATENÇÃO: sort() MODIFICA o array original!\n');

// Ordenando números
console.log('📝 Ordenando Números:\n');

const numerosDesordenados = [5, 2, 8, 1, 9, 3];

// ❌ ERRADO: sort() sem função de comparação
const errado = [...numerosDesordenados].sort();
console.log('   ❌ [5,2,8,1,9,3].sort():', errado);
console.log('      Ordena como STRING! [1,2,3,5,8,9] mas 10 vira antes de 2!\n');

// ✅ CORRETO: Com função de comparação
const crescente = [...numerosDesordenados].sort((a, b) => a - b);
const decrescente = [...numerosDesordenados].sort((a, b) => b - a);

console.log('   ✅ Crescente (a - b):', crescente);
console.log('   ✅ Decrescente (b - a):', decrescente, '\n');

// Ordenando strings
console.log('📝 Ordenando Strings:\n');

const nomes2 = ['João', 'ana', 'Pedro', 'Maria'];

const nomesOrdenados = [...nomes2].sort((a, b) => 
    a.toLowerCase().localeCompare(b.toLowerCase())
);

console.log('   Original:', nomes2);
console.log('   Ordenado:', nomesOrdenados, '\n');

// Ordenando objetos
console.log('📝 Ordenando Objetos:\n');

const alunos = [
    { nome: 'João', nota: 7.5 },
    { nome: 'Maria', nota: 9.0 },
    { nome: 'Pedro', nota: 6.5 },
    { nome: 'Ana', nota: 8.5 }
];

const porNota = [...alunos].sort((a, b) => b.nota - a.nota);
const porNome = [...alunos].sort((a, b) => a.nome.localeCompare(b.nome));

console.log('   Por nota (decrescente):', porNota);
console.log('   Por nome (alfabética):', porNome, '\n');

// ===========================================
// PARTE 8: CHAINING (ENCADEAMENTO) 🔗
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 8: CHAINING (ENCADEAMENTO) 🔗');
console.log('═══════════════════════════════════════════════\n');

console.log('💡 Você pode ENCADEAR vários métodos!\n');

// Exemplo complexo: Pipeline de dados
const vendas = [
    { produto: 'Notebook', preco: 3000, quantidade: 2, categoria: 'Eletrônicos' },
    { produto: 'Mouse', preco: 50, quantidade: 5, categoria: 'Periféricos' },
    { produto: 'Teclado', preco: 200, quantidade: 3, categoria: 'Periféricos' },
    { produto: 'Monitor', preco: 800, quantidade: 1, categoria: 'Eletrônicos' },
    { produto: 'Webcam', preco: 150, quantidade: 0, categoria: 'Periféricos' }
];

console.log('📝 Exemplo: Pipeline Complexo\n');
console.log('   Dados originais:', vendas, '\n');

// Pipeline: Filtrar → Transformar → Ordenar → Reduzir
const resultado = vendas
    .filter(v => v.quantidade > 0)                    // Apenas em estoque
    .map(v => ({                                      // Calcular total
        ...v,
        total: v.preco * v.quantidade
    }))
    .sort((a, b) => b.total - a.total)               // Ordenar por total
    .slice(0, 3)                                      // Top 3
    .reduce((acc, v) => acc + v.total, 0);           // Soma total

console.log('   Pipeline:');
console.log('   1. filter: Apenas em estoque');
console.log('   2. map: Calcular total de cada venda');
console.log('   3. sort: Ordenar por total (maior primeiro)');
console.log('   4. slice: Pegar top 3');
console.log('   5. reduce: Somar tudo');
console.log('   ');
console.log('   💰 Total das 3 maiores vendas: R$', resultado, '\n');

// Exemplo 2: Processando dados de API
console.log('📝 Exemplo: Processando Dados de API\n');

const apiResponse = [
    { id: 1, name: 'John Doe', age: 25, active: true, city: 'SP' },
    { id: 2, name: 'Jane Smith', age: 17, active: false, city: 'RJ' },
    { id: 3, name: 'Bob Johnson', age: 30, active: true, city: 'SP' },
    { id: 4, name: 'Alice Brown', age: 22, active: true, city: 'MG' }
];

const usuariosProcessados = apiResponse
    .filter(u => u.age >= 18)                        // Apenas maiores de idade
    .filter(u => u.active)                            // Apenas ativos
    .filter(u => u.city === 'SP')                     // Apenas de SP
    .map(u => ({                                      // Transformar formato
        id: u.id,
        nome: u.name,
        idade: u.age
    }))
    .sort((a, b) => a.nome.localeCompare(b.nome));   // Ordenar por nome

console.log('   Usuários ativos, maiores de idade, de SP, ordenados:');
console.log('  ', usuariosProcessados, '\n');

// ===========================================
// PARTE 9: OUTROS MÉTODOS ÚTEIS
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 9: OUTROS MÉTODOS ÚTEIS');
console.log('═══════════════════════════════════════════════\n');

// includes()
const numeros3 = [1, 2, 3, 4, 5];
console.log('includes(3):', numeros3.includes(3));
console.log('includes(10):', numeros3.includes(10), '\n');

// indexOf() e lastIndexOf()
const letras2 = ['a', 'b', 'c', 'b', 'd'];
console.log('indexOf("b"):', letras2.indexOf('b'));      // Primeira ocorrência
console.log('lastIndexOf("b"):', letras2.lastIndexOf('b'), '\n'); // Última ocorrência

// join()
const palavras = ['JavaScript', 'é', 'incrível'];
console.log('join(" "):', palavras.join(' '));
console.log('join("-"):', palavras.join('-'), '\n');

// concat()
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log('concat():', arr1.concat(arr2), '\n');

// slice()
const nums3 = [1, 2, 3, 4, 5];
console.log('slice(1, 4):', nums3.slice(1, 4), '\n');

// flat() - Achatar arrays aninhados
const aninhado = [1, [2, 3], [4, [5, 6]]];
console.log('flat():', aninhado.flat());
console.log('flat(2):', aninhado.flat(2), '\n');

// flatMap() - map + flat
const frases = ['olá mundo', 'javascript', 'typescript'];
const palavras2 = frases.flatMap(f => f.split(' '));
console.log('flatMap(f => f.split(" ")):', palavras2, '\n');

// ===========================================
// PARTE 10: CONEXÃO COM TYPESCRIPT
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 10: CONEXÃO COM TYPESCRIPT');
console.log('═══════════════════════════════════════════════\n');

console.log(`
🎯 COMO TYPESCRIPT MELHORA ARRAYS:

1️⃣ TIPOS DE ARRAYS:
   
   const numeros: number[] = [1, 2, 3];
   const nomes: string[] = ["João", "Maria"];
   const usuarios: User[] = [...];

2️⃣ AUTOCOMPLETE PERFEITO:
   
   usuarios.map(u => u.|) // IDE mostra todas propriedades!
   
3️⃣ INFERÊNCIA DE TIPOS:
   
   const numeros = [1, 2, 3];           // number[]
   const dobrados = numeros.map(n => n * 2); // number[]
   const strings = numeros.map(n => \`\${n}\`); // string[]

4️⃣ GENERICS:
   
   function primeiro<T>(arr: T[]): T | undefined {
       return arr[0];
   }
   
   primeiro([1, 2, 3]);    // tipo: number | undefined
   primeiro(["a", "b"]);   // tipo: string | undefined

5️⃣ READONLY ARRAYS:
   
   const numeros: readonly number[] = [1, 2, 3];
   numeros.push(4); // ❌ ERRO! Array é readonly

6️⃣ TUPLE TYPES:
   
   const coordenada: [number, number] = [10, 20];
   const pessoa: [string, number] = ["João", 30];

💡 CONCLUSÃO:
   TypeScript torna arrays MUITO mais seguros e produtivos!
   O autocomplete salva MUITO tempo de desenvolvimento.
`);

// ===========================================
// PARTE 11: EXERCÍCIOS
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('EXERCÍCIOS - MÓDULO 05');
console.log('═══════════════════════════════════════════════\n');

console.log(`
🎯 DESAFIOS:

1. Dado o array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
   - Filtre apenas os pares
   - Multiplique cada um por 3
   - Some todos os resultados
   (Use chaining!)

2. Dado um array de produtos com {nome, preco, emEstoque}:
   - Filtre apenas os em estoque
   - Ordene por preço (do menor para o maior)
   - Retorne apenas os nomes
   
3. Implemente groupBy(): agrupa array de objetos por uma chave
   
   groupBy([{tipo: 'A', val: 1}, {tipo: 'B', val: 2}, {tipo: 'A', val: 3}], 'tipo')
   // { A: [{tipo: 'A', val: 1}, {tipo: 'A', val: 3}], B: [{tipo: 'B', val: 2}] }

4. Implemente unique(): remove duplicatas de um array
   
   unique([1, 2, 2, 3, 3, 3, 4]) // [1, 2, 3, 4]

5. Dado array de vendas [{produto, preco, quantidade}]:
   - Calcule o total de cada venda
   - Agrupe por produto
   - Calcule o faturamento total por produto
   
6. Implemente chunk(): divide array em pedaços
   
   chunk([1, 2, 3, 4, 5, 6, 7], 3)
   // [[1, 2, 3], [4, 5, 6], [7]]

7. Dado array de palavras, retorne objeto com:
   - Palavra mais longa
   - Palavra mais curta
   - Tamanho médio das palavras

💡 DICA: Use map, filter, reduce e chaining!
`);

console.log('\n✅ Módulo 05 concluído!');
console.log('📚 Próximo: Módulo 06 - Assincronicidade (Promises e Async/Await)\n');
