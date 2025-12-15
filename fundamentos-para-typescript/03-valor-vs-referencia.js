// ===========================================
// MÓDULO 03: VALOR VS REFERÊNCIA ⚠️ CRÍTICO
// ===========================================

/*
    🎯 OBJETIVO DESTE MÓDULO:
    
    Este é O CONCEITO MAIS IMPORTANTE que você precisa entender!
    
    A diferença entre VALOR e REFERÊNCIA causa mais bugs em JavaScript
    do que qualquer outra coisa. Se você entender este módulo,
    você evitará 90% dos bugs relacionados a mutabilidade.
    
    ⚠️ ATENÇÃO MÁXIMA AQUI! Este conceito é VITAL para TypeScript também!
*/

console.log('🚀 MÓDULO 03: VALOR VS REFERÊNCIA ⚠️\n');
console.log('⚠️⚠️⚠️ ESTE É O MÓDULO MAIS IMPORTANTE! ⚠️⚠️⚠️\n');

// ===========================================
// PARTE 1: TIPOS POR VALOR (PRIMITIVOS)
// ===========================================

console.log('═══════════════════════════════════════════════');
console.log('PARTE 1: TIPOS POR VALOR (PRIMITIVOS)');
console.log('═══════════════════════════════════════════════\n');

/*
    TIPOS PRIMITIVOS (por valor):
    - string
    - number
    - boolean
    - null
    - undefined
    - symbol
    
    Quando você atribui ou passa um primitivo, uma CÓPIA é criada.
*/

// Exemplo 1: Números
let a = 10;
let b = a; // CÓPIA do valor

console.log('📝 Exemplo com números:');
console.log('   a = 10');
console.log('   b = a');
console.log('   a:', a, '| b:', b);

b = 20; // Modificar b NÃO afeta a

console.log('\n   Depois de fazer b = 20:');
console.log('   a:', a, '(não mudou!)');
console.log('   b:', b, '(mudou)');
console.log('\n   💡 "a" e "b" são variáveis INDEPENDENTES!\n');

// Exemplo 2: Strings
let nome1 = 'João';
let nome2 = nome1; // CÓPIA do valor

nome2 = 'Maria';

console.log('📝 Exemplo com strings:');
console.log('   nome1:', nome1, '(não mudou)');
console.log('   nome2:', nome2, '(mudou)');
console.log('   💡 Cada variável tem sua própria cópia!\n');

// ===========================================
// PARTE 2: TIPOS POR REFERÊNCIA (OBJETOS E ARRAYS)
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 2: TIPOS POR REFERÊNCIA ⚠️ CUIDADO!');
console.log('═══════════════════════════════════════════════\n');

/*
    TIPOS POR REFERÊNCIA:
    - Objects (objetos literais)
    - Arrays
    - Functions
    - Dates
    - RegExp
    - ... qualquer coisa que não seja primitivo
    
    Quando você atribui ou passa uma referência, você está passando
    o "ENDEREÇO DE MEMÓRIA", não uma cópia!
    
    ⚠️ Isso significa que múltiplas variáveis podem apontar para
    o MESMO objeto na memória!
*/

// Exemplo 1: Objetos - O PROBLEMA!
const pessoa1 = { nome: 'João', idade: 25 };
const pessoa2 = pessoa1; // NÃO É CÓPIA! É a mesma referência!

console.log('⚠️ Exemplo com objetos:');
console.log('   pessoa1:', pessoa1);
console.log('   pessoa2:', pessoa2);

pessoa2.nome = 'Maria'; // Modificar pessoa2 AFETA pessoa1! 😱

console.log('\n   Depois de fazer pessoa2.nome = "Maria":');
console.log('   pessoa1:', pessoa1, '← MUDOU TAMBÉM! 😱');
console.log('   pessoa2:', pessoa2);
console.log('\n   ⚠️ AMBAS apontam para o MESMO objeto na memória!');
console.log('   pessoa1 === pessoa2?', pessoa1 === pessoa2); // true
console.log('');

// Exemplo 2: Arrays - MESMO PROBLEMA!
const lista1 = [1, 2, 3];
const lista2 = lista1; // Mesma referência!

lista2.push(4); // Modificar lista2 afeta lista1!

console.log('⚠️ Exemplo com arrays:');
console.log('   lista1:', lista1, '← Foi modificada! 😱');
console.log('   lista2:', lista2);
console.log('   lista1 === lista2?', lista1 === lista2); // true
console.log('');

// ===========================================
// PARTE 3: BUGS COMUNS EM PRODUÇÃO
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 3: BUGS REAIS EM PRODUÇÃO 🐛');
console.log('═══════════════════════════════════════════════\n');

// BUG 1: Modificação acidental
console.log('🐛 BUG 1: Modificação Acidental');

const configOriginal = {
    tema: 'claro',
    idioma: 'pt-BR',
    notificacoes: true
};

function alterarConfig(config) {
    config.tema = 'escuro'; // MODIFICA O ORIGINAL! 😱
    return config;
}

const novaConfig = alterarConfig(configOriginal);

console.log('   configOriginal:', configOriginal);
console.log('   ❌ O original foi modificado pela função!');
console.log('   Queríamos criar uma nova config, mas modificamos a original!\n');

// BUG 2: Arrays em loops
console.log('🐛 BUG 2: Arrays Compartilhados');

const usuarios = [
    { nome: 'João', ativo: true },
    { nome: 'Maria', ativo: true }
];

const usuariosInativos = usuarios; // REFERÊNCIA, não cópia!

// Tentando desativar todos
usuariosInativos.forEach(user => {
    user.ativo = false;
});

console.log('   usuarios:', usuarios);
console.log('   ❌ Queríamos criar lista de inativos, mas modificamos a original!\n');

// BUG 3: Estado em aplicações
console.log('🐛 BUG 3: Estado Compartilhado (Bug clássico em React/Vue)');

let estadoApp = {
    usuario: { nome: 'João', logado: false },
    carrinho: []
};

function fazerLogin(estado) {
    estado.usuario.logado = true; // MODIFICA O ESTADO GLOBAL! 😱
    return estado;
}

const novoEstado = fazerLogin(estadoApp);

console.log('   estadoApp:', estadoApp);
console.log('   ❌ O estado global foi modificado!');
console.log('   Em React/Vue, isso causa re-renders inesperados!\n');

// BUG 4: Comparação de objetos
console.log('🐛 BUG 4: Comparação de Objetos');

const obj1 = { valor: 10 };
const obj2 = { valor: 10 }; // MESMO conteúdo, mas REFERÊNCIAS diferentes

console.log('   obj1:', obj1);
console.log('   obj2:', obj2);
console.log('   obj1 === obj2?', obj1 === obj2); // false! 😱
console.log('   ⚠️ Objetos com mesmo conteúdo SÃO DIFERENTES!');
console.log('   Comparação compara REFERÊNCIAS, não conteúdo!\n');

// BUG 5: Arrays aninhados
console.log('🐛 BUG 5: Arrays Aninhados');

const matriz = [[1, 2], [3, 4]];
const linha = matriz[0]; // Referência!

linha.push(99); // Modifica a matriz original!

console.log('   matriz:', matriz); // [[1, 2, 99], [3, 4]]
console.log('   ❌ Modificar "linha" modificou a "matriz"!\n');

// ===========================================
// PARTE 4: COMO COPIAR CORRETAMENTE
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 4: COMO FAZER CÓPIAS CORRETAS ✅');
console.log('═══════════════════════════════════════════════\n');

// SOLUÇÃO 1: Spread Operator (...) - Cópia SUPERFICIAL
console.log('✅ SOLUÇÃO 1: Spread Operator (Cópia Superficial)');

const original1 = { nome: 'João', idade: 25 };
const copia1 = { ...original1 }; // CÓPIA!

copia1.nome = 'Maria';

console.log('   original1:', original1, '(não mudou!)');
console.log('   copia1:', copia1);
console.log('   São diferentes?', original1 !== copia1); // true ✅
console.log('');

// Com Arrays
const arrayOriginal = [1, 2, 3];
const arrayCopia = [...arrayOriginal]; // CÓPIA!

arrayCopia.push(4);

console.log('   arrayOriginal:', arrayOriginal, '(não mudou!)');
console.log('   arrayCopia:', arrayCopia, '');

// PROBLEMA: Spread é SUPERFICIAL!
console.log('⚠️ PROBLEMA: Spread é SUPERFICIAL (apenas 1 nível)');

const usuario = {
    nome: 'João',
    endereco: {
        rua: 'Rua A',
        numero: 100
    }
};

const copiaSuperficial = { ...usuario };
copiaSuperficial.endereco.rua = 'Rua B'; // MODIFICA O ORIGINAL! 😱

console.log('   usuario.endereco.rua:', usuario.endereco.rua); // "Rua B" (mudou!)
console.log('   ❌ Spread não copiou o objeto aninhado!\n');

// SOLUÇÃO 2: JSON.parse + JSON.stringify - Cópia PROFUNDA
console.log('✅ SOLUÇÃO 2: JSON (Cópia Profunda)');

const usuarioOriginal = {
    nome: 'João',
    endereco: {
        rua: 'Rua A',
        numero: 100
    },
    hobbies: ['ler', 'correr']
};

const copiaProfunda = JSON.parse(JSON.stringify(usuarioOriginal));

copiaProfunda.endereco.rua = 'Rua B';
copiaProfunda.hobbies.push('nadar');

console.log('   original.endereco.rua:', usuarioOriginal.endereco.rua); // "Rua A" (não mudou!)
console.log('   copia.endereco.rua:', copiaProfunda.endereco.rua); // "Rua B"
console.log('   original.hobbies:', usuarioOriginal.hobbies); // ["ler", "correr"]
console.log('   copia.hobbies:', copiaProfunda.hobbies); // ["ler", "correr", "nadar"]
console.log('   ✅ Cópia profunda funcionou!\n');

// LIMITAÇÕES DO JSON
console.log('⚠️ LIMITAÇÕES DO JSON.parse/stringify:');
console.log('   ❌ Não funciona com funções');
console.log('   ❌ Não funciona com undefined');
console.log('   ❌ Não funciona com Date (vira string)');
console.log('   ❌ Não funciona com referências circulares\n');

// SOLUÇÃO 3: structuredClone() - MODERNO (ES2021)
console.log('✅ SOLUÇÃO 3: structuredClone() - MELHOR OPÇÃO!');

const objetoComplexo = {
    nome: 'João',
    data: new Date(),
    endereco: {
        rua: 'Rua A',
        cidade: { nome: 'SP', estado: 'SP' }
    }
};

const copiaStructured = structuredClone(objetoComplexo);

copiaStructured.endereco.cidade.nome = 'RJ';

console.log('   original.endereco.cidade:', objetoComplexo.endereco.cidade);
console.log('   copia.endereco.cidade:', copiaStructured.endereco.cidade);
console.log('   ✅ structuredClone é a melhor opção moderna!\n');

// SOLUÇÃO 4: Array.from() e Array.slice() para arrays
console.log('✅ SOLUÇÃO 4: Array.from() e slice() para Arrays');

const arr1 = [1, 2, 3];
const arr2 = Array.from(arr1); // Cópia
const arr3 = arr1.slice(); // Cópia

arr2.push(4);
arr3.push(5);

console.log('   arr1:', arr1); // [1, 2, 3] (não mudou)
console.log('   arr2:', arr2); // [1, 2, 3, 4]
console.log('   arr3:', arr3, '\n'); // [1, 2, 3, 5]

// ===========================================
// PARTE 5: IMUTABILIDADE - BOA PRÁTICA
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 5: PROGRAMAÇÃO IMUTÁVEL ✨');
console.log('═══════════════════════════════════════════════\n');

/*
    IMUTABILIDADE = Não modificar dados existentes, sempre criar novos.
    
    Isso é fundamental em:
    - React (state management)
    - Redux
    - Programação funcional
    - TypeScript (tipos readonly)
*/

// ❌ FORMA MUTÁVEL (perigosa)
console.log('❌ Forma MUTÁVEL (ruim):');

const carrinho1 = [{ nome: 'Livro', preco: 50 }];

function adicionarItem(carrinho, item) {
    carrinho.push(item); // MODIFICA O ORIGINAL!
    return carrinho;
}

adicionarItem(carrinho1, { nome: 'Caneta', preco: 5 });
console.log('   carrinho1:', carrinho1); // Foi modificado!
console.log('');

// ✅ FORMA IMUTÁVEL (segura)
console.log('✅ Forma IMUTÁVEL (boa):');

const carrinho2 = [{ nome: 'Livro', preco: 50 }];

function adicionarItemImutavel(carrinho, item) {
    return [...carrinho, item]; // NOVO array!
}

const novoCarrinho = adicionarItemImutavel(carrinho2, { nome: 'Caneta', preco: 5 });

console.log('   carrinho2 (original):', carrinho2); // Não mudou!
console.log('   novoCarrinho:', novoCarrinho); // Novo array com item adicionado
console.log('');

// Exemplo com objetos
console.log('✅ Atualizando objetos imutavelmente:');

const produto1 = {
    id: 1,
    nome: 'Notebook',
    preco: 3000
};

// ❌ Forma mutável
// produto1.preco = 2500; // RUIM!

// ✅ Forma imutável
const produto2 = {
    ...produto1,
    preco: 2500 // Novo objeto com preço atualizado
};

console.log('   produto1:', produto1); // Original intacto
console.log('   produto2:', produto2, '\n'); // Novo objeto

// ===========================================
// PARTE 6: POR QUE ISSO É VITAL NO TYPESCRIPT
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 6: CONEXÃO COM TYPESCRIPT');
console.log('═══════════════════════════════════════════════\n');

console.log(`
🎯 POR QUE ISSO IMPORTA NO TYPESCRIPT:

1️⃣ TIPOS READONLY:
   TypeScript permite criar tipos imutáveis:
   
   type Usuario = {
       readonly id: number;
       readonly nome: string;
   };
   
   const user: Usuario = { id: 1, nome: "João" };
   user.nome = "Maria"; // ❌ ERRO no TypeScript!

2️⃣ TIPOS CONST:
   
   const config = {
       apiUrl: "https://api.com",
       timeout: 5000
   } as const; // Tudo fica readonly!

3️⃣ IMUTABILIDADE POR PADRÃO:
   TypeScript força você a pensar em imutabilidade,
   prevenindo bugs de mutação acidental.

4️⃣ TIPOS DE REFERÊNCIA:
   TypeScript entende a diferença entre:
   
   const arr1: number[] = [1, 2, 3];
   const arr2 = arr1; // MESMA referência
   
   E te ajuda a evitar bugs relacionados!

💡 CONCLUSÃO:
   Entender valor vs referência em JavaScript é FUNDAMENTAL
   para aproveitar os recursos de imutabilidade do TypeScript!
`);

// ===========================================
// PARTE 7: EXERCÍCIOS
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('EXERCÍCIOS - MÓDULO 03');
console.log('═══════════════════════════════════════════════\n');

console.log(`
🎯 DESAFIOS:

1. Crie uma função que recebe um array e retorna uma CÓPIA
   com todos os números duplicados (mas sem modificar o original)
   
   Exemplo: duplicarNumeros([1, 2, 3]) → [2, 4, 6]

2. Crie uma função que recebe um objeto usuario e retorna
   uma CÓPIA com a propriedade "ativo" alterada para true
   
   Exemplo: ativarUsuario({ nome: "João", ativo: false })

3. Dado um array de objetos, crie uma função que retorna
   uma CÓPIA do array com um objeto modificado (deep copy)
   
   const users = [{ id: 1, nome: "João" }, { id: 2, nome: "Maria" }];
   atualizarNome(users, 1, "Pedro") → nova lista com id:1 modificado

4. Explique por que este código tem um bug:
   
   const original = { lista: [1, 2, 3] };
   const copia = { ...original };
   copia.lista.push(4);
   console.log(original.lista); // [1, 2, 3, 4] ← Por quê?

5. Crie uma função "congelar" que torna um objeto completamente
   imutável (incluindo propriedades aninhadas)

💡 DICA: Pense sempre em criar NOVOS valores, não modificar existentes!
`);

console.log('\n✅ Módulo 03 concluído!');
console.log('📚 Próximo: Módulo 04 - Funções Modernas\n');
