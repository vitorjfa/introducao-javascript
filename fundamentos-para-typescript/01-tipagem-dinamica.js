// ===========================================
// MÓDULO 01: TIPAGEM DINÂMICA E TIPOS PRIMITIVOS
// ===========================================

/*
    🎯 OBJETIVO DESTE MÓDULO:
    
    Entender os tipos básicos do JavaScript e, principalmente,
    compreender POR QUE a tipagem dinâmica pode ser perigosa.
    
    Este módulo planta a SEMENTE da necessidade do TypeScript!
    
    Ao final, você vai entender por que desenvolvedores do mundo
    inteiro adotaram o TypeScript para evitar bugs relacionados a tipos.
*/

console.log('🚀 MÓDULO 01: TIPAGEM DINÂMICA E TIPOS PRIMITIVOS\n');

// ===========================================
// PARTE 1: OS TIPOS PRIMITIVOS DO JAVASCRIPT
// ===========================================

console.log('═══════════════════════════════════════════════');
console.log('PARTE 1: OS 6 TIPOS PRIMITIVOS');
console.log('═══════════════════════════════════════════════\n');

/*
    JavaScript tem 6 tipos primitivos (valores simples, não objetos):
    
    1. string   - Texto
    2. number   - Números (inteiros e decimais)
    3. boolean  - Verdadeiro ou falso
    4. null     - Ausência intencional de valor
    5. undefined - Variável declarada mas não inicializada
    6. symbol   - (ES6+) Identificadores únicos (menos comum)
    
    + BigInt (ES2020) - Números muito grandes (também menos comum)
*/

// 1️⃣ STRING - Texto
const nome = 'João';
const sobrenome = "Silva";
const nomeCompleto = `${nome} ${sobrenome}`; // Template literal (ES6+)

console.log('1️⃣ STRING:');
console.log('  - nome:', nome, '(tipo:', typeof nome, ')');
console.log('  - nomeCompleto:', nomeCompleto);
console.log('  - Aspas simples, duplas ou crases - todos são strings\n');

// 2️⃣ NUMBER - Números (inteiros e decimais)
const idade = 25;
const altura = 1.75;
const temperatura = -5;
const infinito = Infinity;
const naoEhNumero = NaN; // "Not a Number" - mas typeof retorna 'number' 🤔

console.log('2️⃣ NUMBER:');
console.log('  - idade:', idade, '(tipo:', typeof idade, ')');
console.log('  - altura:', altura, '(tipo:', typeof altura, ')');
console.log('  - temperatura:', temperatura);
console.log('  - infinito:', infinito);
console.log('  - NaN (Not a Number):', naoEhNumero, '(tipo:', typeof naoEhNumero, ')');
console.log('  ⚠️ BIZARRO: NaN é do tipo "number"! Isso é JavaScript! 😅\n');

// 3️⃣ BOOLEAN - Verdadeiro ou Falso
const maiorDeIdade = true;
const possuiCarro = false;

console.log('3️⃣ BOOLEAN:');
console.log('  - maiorDeIdade:', maiorDeIdade, '(tipo:', typeof maiorDeIdade, ')');
console.log('  - possuiCarro:', possuiCarro, '(tipo:', typeof possuiCarro, ')');
console.log('  - Apenas dois valores possíveis: true ou false\n');

// 4️⃣ NULL - Ausência intencional de valor
const endereco = null; // Intencionalmente vazio

console.log('4️⃣ NULL:');
console.log('  - endereco:', endereco, '(tipo:', typeof endereco, ')');
console.log('  ⚠️ BUG HISTÓRICO: typeof null retorna "object" - isso é um BUG do JavaScript desde 1995!');
console.log('  - null significa "intencionalmente vazio"\n');

// 5️⃣ UNDEFINED - Variável não inicializada
let telefone; // Declarada mas não atribuída

console.log('5️⃣ UNDEFINED:');
console.log('  - telefone:', telefone, '(tipo:', typeof telefone, ')');
console.log('  - undefined significa "não foi atribuído valor ainda"\n');

// 6️⃣ SYMBOL - Identificadores únicos (ES6+)
const id1 = Symbol('id');
const id2 = Symbol('id');

console.log('6️⃣ SYMBOL:');
console.log('  - Cada Symbol é ÚNICO, mesmo com mesma descrição');
console.log('  - id1 === id2?', id1 === id2); // false - são diferentes!
console.log('  - Usado para criar propriedades únicas em objetos\n');

// ===========================================
// PARTE 2: TIPAGEM DINÂMICA - O GRANDE PROBLEMA
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 2: TIPAGEM DINÂMICA - O PROBLEMA!');
console.log('═══════════════════════════════════════════════\n');

/*
    ⚠️ ATENÇÃO: Esta é a característica que mais causa bugs em JavaScript!
    
    Em JavaScript, uma variável pode MUDAR DE TIPO durante a execução.
    Isso é chamado de TIPAGEM DINÂMICA.
    
    Exemplo:
*/

let valor = 42; // Começa como number
console.log('🔹 valor inicial:', valor, '(tipo:', typeof valor, ')');

valor = 'quarenta e dois'; // Agora é string!
console.log('🔹 valor agora:', valor, '(tipo:', typeof valor, ')');

valor = true; // Agora é boolean!
console.log('🔹 valor agora:', valor, '(tipo:', typeof valor, ')');

valor = null; // Agora é null!
console.log('🔹 valor agora:', valor, '(tipo:', typeof valor, ')');

console.log('\n💡 Viu o problema? A MESMA variável pode ser qualquer coisa!');
console.log('   Isso parece flexível, mas é PERIGOSO em projetos grandes.\n');

// ===========================================
// PARTE 3: BUGS CAUSADOS POR TIPAGEM DINÂMICA
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 3: BUGS REAIS CAUSADOS POR TIPOS');
console.log('═══════════════════════════════════════════════\n');

// BUG 1: Concatenação inesperada
console.log('🐛 BUG 1: Concatenação vs Soma');
const numero1 = 10;
const numero2 = '20'; // String, não number!

const resultado1 = numero1 + numero2;
console.log('  10 + "20" =', resultado1); // "1020" - concatenou!
console.log('  ❌ Esperávamos 30, mas obtivemos "1020"');
console.log('  Tipo do resultado:', typeof resultado1, '\n');

// BUG 2: Operações matemáticas com strings
console.log('🐛 BUG 2: Subtração com String');
const numero3 = '100';
const numero4 = '50';

const resultado2 = numero3 - numero4; // JavaScript CONVERTE para number
console.log('  "100" - "50" =', resultado2);
console.log('  ✅ Funcionou! Tipo:', typeof resultado2);
console.log('  ⚠️ Mas por que funcionou a subtração e não a soma?');
console.log('  Resposta: JavaScript tem regras de conversão CONFUSAS!\n');

// BUG 3: Comparações estranhas
console.log('🐛 BUG 3: Comparações Bizarras');
console.log('  5 == "5" ?', 5 == '5'); // true (conversão automática)
console.log('  5 === "5" ?', 5 === '5'); // false (sem conversão)
console.log('  null == undefined ?', null == undefined); // true (!?)
console.log('  null === undefined ?', null === undefined); // false
console.log('\n  💡 REGRA DE OURO: SEMPRE use === (comparação estrita)!\n');

// BUG 4: Array + Número = ?
console.log('🐛 BUG 4: Operações Malucas');
console.log('  [] + [] =', [] + []); // "" (string vazia)
console.log('  [] + {} =', [] + {}); // "[object Object]"
console.log('  {} + [] =', {} + []); // "[object Object]" ou 0 (depende do contexto!)
console.log('  true + true =', true + true); // 2 (true vira 1)
console.log('  true + "true" =', true + 'true'); // "truetrue"
console.log('\n  😵 JavaScript pode ser MUITO confuso!\n');

// BUG 5: Funções que retornam tipos diferentes
console.log('🐛 BUG 5: Função com Retornos Inconsistentes');

function dividir(a, b) {
    if (b === 0) {
        return 'Erro: divisão por zero'; // Retorna string
    }
    return a / b; // Retorna number
}

const resultado3 = dividir(10, 2);
const resultado4 = dividir(10, 0);

console.log('  dividir(10, 2) =', resultado3, '(tipo:', typeof resultado3, ')');
console.log('  dividir(10, 0) =', resultado4, '(tipo:', typeof resultado4, ')');
console.log('\n  ⚠️ A MESMA função retorna tipos DIFERENTES!');
console.log('  Isso dificulta saber o que esperar e pode causar bugs.\n');

// BUG 6: Propriedades inexistentes retornam undefined
console.log('🐛 BUG 6: Acessar Propriedade que Não Existe');

const usuario = {
    nome: 'Maria',
    idade: 30
};

console.log('  usuario.nome:', usuario.nome);
console.log('  usuario.email:', usuario.email); // undefined
console.log('  usuario.endereco.rua:', usuario.endereco?.rua); // undefined (usando optional chaining)

// Tentando sem optional chaining (vai dar erro!)
try {
    console.log('  Tentando acessar usuario.endereco.rua sem ?.:');
    console.log(usuario.endereco.rua); // ERRO!
} catch (erro) {
    console.log('  ❌ ERRO:', erro.message);
}

console.log('\n  ⚠️ Acessar propriedades de undefined causa ERRO!\n');

// BUG 7: Conversão automática (Coerção de Tipos)
console.log('🐛 BUG 7: Coerção de Tipos Automática');

console.log('  "10" * 2 =', '10' * 2); // 20 (string vira number)
console.log('  "10" / 2 =', '10' / 2); // 5 (string vira number)
console.log('  "10" + 2 =', '10' + 2); // "102" (number vira string)
console.log('  "10" - 2 =', '10' - 2); // 8 (string vira number)

console.log('\n  😵 Regras inconsistentes de conversão!\n');

// BUG 8: typeof retorna coisas estranhas
console.log('🐛 BUG 8: typeof Mentiroso');

console.log('  typeof null =', typeof null); // "object" (BUG!)
console.log('  typeof NaN =', typeof NaN); // "number" (estranho!)
console.log('  typeof [1,2,3] =', typeof [1, 2, 3]); // "object" (não "array")
console.log('  typeof function() {} =', typeof function () { }); // "function" (ok)

console.log('\n  ⚠️ typeof não é 100% confiável!\n');

// BUG 9: Truthy e Falsy values
console.log('🐛 BUG 9: Valores Truthy e Falsy');

console.log('  Valores FALSY (considerados false):');
console.log('    - false:', Boolean(false));
console.log('    - 0:', Boolean(0));
console.log('    - "" (string vazia):', Boolean(''));
console.log('    - null:', Boolean(null));
console.log('    - undefined:', Boolean(undefined));
console.log('    - NaN:', Boolean(NaN));

console.log('\n  ⚠️ CUIDADO: "0" e [] são TRUTHY!');
console.log('    - Boolean("0") =', Boolean('0')); // true
console.log('    - Boolean([]) =', Boolean([])); // true
console.log('    - Boolean({}) =', Boolean({})); // true

console.log('\n  Isso pode causar bugs em condições if:\n');

const quantidade = '0';
if (quantidade) {
    console.log('  ✅ quantidade existe! (mas é "0" como string, não 0 como number)');
}

// BUG 10: Parseamento de strings
console.log('\n🐛 BUG 10: parseInt e parseFloat');

console.log('  parseInt("42") =', parseInt('42')); // 42
console.log('  parseInt("42px") =', parseInt('42px')); // 42 (ignora px!)
console.log('  parseInt("abc42") =', parseInt('abc42')); // NaN
console.log('  parseFloat("3.14") =', parseFloat('3.14')); // 3.14
console.log('  parseFloat("3.14abc") =', parseFloat('3.14abc')); // 3.14 (ignora abc!)

console.log('\n  ⚠️ parseInt/parseFloat ignoram caracteres inválidos no final!\n');

// ===========================================
// PARTE 4: POR QUE TYPESCRIPT EXISTE
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 4: POR QUE TYPESCRIPT FOI CRIADO');
console.log('═══════════════════════════════════════════════\n');

console.log(`
🎯 AGORA VOCÊ ENTENDE O PROBLEMA!

Todos os bugs acima acontecem porque JavaScript:
  ✗ Não verifica tipos em tempo de desenvolvimento
  ✗ Permite que variáveis mudem de tipo
  ✗ Faz conversões automáticas confusas
  ✗ Não avisa quando você comete erros de tipo

💡 TYPESCRIPT RESOLVE ISSO:
  ✓ Define tipos para variáveis e funções
  ✓ Detecta erros ANTES de executar o código
  ✓ Fornece autocomplete e documentação
  ✓ Torna o código mais seguro e previsível

Exemplo em TypeScript:

  let idade: number = 25;
  idade = "vinte e cinco"; // ❌ ERRO! TypeScript não permite!

  function somar(a: number, b: number): number {
      return a + b;
  }

  somar(10, "20"); // ❌ ERRO! TypeScript detecta que "20" não é number!

📚 Conclusão:
  JavaScript é flexível, mas PERIGOSO.
  TypeScript adiciona SEGURANÇA sem perder a flexibilidade.
`);

// ===========================================
// PARTE 5: BOAS PRÁTICAS
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 5: BOAS PRÁTICAS ENQUANTO USA JS');
console.log('═══════════════════════════════════════════════\n');

console.log(`
✅ BOAS PRÁTICAS EM JAVASCRIPT:

1. Use const por padrão, let quando necessário, NUNCA var
   
   const nome = "João";  // ✓ Não pode mudar
   let contador = 0;     // ✓ Pode mudar
   var x = 10;          // ✗ Evite var!

2. Sempre use === (comparação estrita) em vez de ==
   
   if (valor === 5) { ... }  // ✓ Correto
   if (valor == "5") { ... }  // ✗ Evite!

3. Seja explícito com conversões de tipo
   
   const numero = Number("42");     // ✓ Explícito
   const texto = String(42);        // ✓ Explícito
   const booleano = Boolean(1);     // ✓ Explícito

4. Valide tipos de entrada em funções
   
   function calcular(valor) {
       if (typeof valor !== 'number') {
           throw new Error('valor deve ser number');
       }
       // ... resto do código
   }

5. Use TypeScript! 🎯
   
   Depois de dominar JavaScript, migre para TypeScript!
`);

// ===========================================
// PARTE 6: EXERCÍCIOS PRÁTICOS
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('EXERCÍCIOS - MÓDULO 01');
console.log('═══════════════════════════════════════════════\n');

console.log(`
🎯 DESAFIOS:

1. Crie uma função que recebe um valor e retorna seu tipo exato
   (use typeof, mas trate os casos especiais: null, array, NaN)

2. Corrija esta função para que sempre retorne number:
   
   function somar(a, b) {
       return a + b;
   }
   
   // Deve funcionar mesmo se receber strings

3. Crie uma função que valida se um CPF (string) tem exatamente 11 dígitos
   (sem contar pontos e traços)

4. Escreva uma função que converte temperatura de Celsius para Fahrenheit,
   mas que retorna uma mensagem de erro se receber string ou null

5. Crie uma função que recebe um array e retorna true se TODOS os elementos
   são do mesmo tipo, false caso contrário

💡 DICA: Teste suas funções com vários tipos diferentes de entrada!
`);

console.log('\n✅ Módulo 01 concluído!');
console.log('📚 Próximo: Módulo 02 - Objetos e Arrays\n');
