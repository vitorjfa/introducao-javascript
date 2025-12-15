// ===========================================
// MÓDULO 04: FUNÇÕES MODERNAS (ES6+)
// ===========================================

/*
    🎯 OBJETIVO DESTE MÓDULO:
    
    Dominar as funções modernas do JavaScript, incluindo:
    - Arrow Functions vs Functions Tradicionais
    - Comportamento do this
    - Parâmetros avançados (default, rest, destructuring)
    - Higher Order Functions (HOF)
    - Callbacks e Closures
    
    Funções são os blocos de construção fundamentais do JavaScript!
    TypeScript adiciona tipos a tudo isso, tornando ainda mais poderoso.
*/

console.log('🚀 MÓDULO 04: FUNÇÕES MODERNAS (ES6+)\n');

// ===========================================
// PARTE 1: ARROW FUNCTIONS VS FUNCTIONS TRADICIONAIS
// ===========================================

console.log('═══════════════════════════════════════════════');
console.log('PARTE 1: ARROW FUNCTIONS VS FUNCTIONS');
console.log('═══════════════════════════════════════════════\n');

// 1️⃣ Function Declaration (declaração tradicional)
function somar(a, b) {
    return a + b;
}

console.log('1️⃣ Function Declaration:');
console.log('   function somar(a, b) { return a + b; }');
console.log('   somar(5, 3) =', somar(5, 3), '\n');

// 2️⃣ Function Expression (expressão)
const subtrair = function(a, b) {
    return a - b;
};

console.log('2️⃣ Function Expression:');
console.log('   const subtrair = function(a, b) { return a - b; };');
console.log('   subtrair(10, 4) =', subtrair(10, 4), '\n');

// 3️⃣ Arrow Function (ES6+) - Sintaxe completa
const multiplicar = (a, b) => {
    return a * b;
};

console.log('3️⃣ Arrow Function (sintaxe completa):');
console.log('   const multiplicar = (a, b) => { return a * b; };');
console.log('   multiplicar(5, 3) =', multiplicar(5, 3), '\n');

// 4️⃣ Arrow Function - Retorno implícito
const dividir = (a, b) => a / b;

console.log('4️⃣ Arrow Function (retorno implícito):');
console.log('   const dividir = (a, b) => a / b;');
console.log('   dividir(20, 4) =', dividir(20, 4));
console.log('   💡 Sem chaves { }, o retorno é automático!\n');

// Comparação de sintaxes
console.log('📊 COMPARAÇÃO DE SINTAXES:\n');

// Um parâmetro
const dobrar1 = function(n) { return n * 2; }; // Function expression
const dobrar2 = (n) => { return n * 2; };       // Arrow com chaves
const dobrar3 = (n) => n * 2;                   // Arrow retorno implícito
const dobrar4 = n => n * 2;                     // Arrow sem parênteses

console.log('   Um parâmetro:');
console.log('   n => n * 2  (forma mais curta!)');
console.log('   Todos retornam:', dobrar1(5), dobrar2(5), dobrar3(5), dobrar4(5), '\n');

// Nenhum parâmetro
const saudacao1 = function() { return 'Olá!'; };
const saudacao2 = () => 'Olá!';

console.log('   Nenhum parâmetro:');
console.log('   () => "Olá!"  (parênteses obrigatórios)');
console.log('   saudacao2() =', saudacao2(), '\n');

// Retornando objeto literal
// ⚠️ CUIDADO: precisa de parênteses!
const criarPessoa1 = (nome, idade) => ({ nome: nome, idade: idade });
const criarPessoa2 = (nome, idade) => ({ nome, idade }); // Shorthand

console.log('   Retornando objeto literal:');
console.log('   (nome, idade) => ({ nome, idade })');
console.log('   ⚠️ Precisa de parênteses () ao redor do objeto!');
console.log('   criarPessoa2("João", 30):', criarPessoa2('João', 30), '\n');

// ===========================================
// PARTE 2: COMPORTAMENTO DO THIS ⚠️ CRUCIAL!
// ===========================================

console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 2: COMPORTAMENTO DO THIS ⚠️ CRUCIAL!');
console.log('═══════════════════════════════════════════════\n');

console.log('💡 REGRA FUNDAMENTAL:');
console.log('   - Function tradicional: this depende de COMO é chamada');
console.log('   - Arrow function: this vem do ESCOPO EXTERNO (léxico)\n');

// Exemplo 1: Métodos de objeto
const pessoa = {
    nome: 'João Silva',
    idade: 30,
    
    // ✅ Function tradicional - this funciona
    apresentar: function() {
        return `Olá, sou ${this.nome} e tenho ${this.idade} anos`;
    },
    
    // ❌ Arrow function - this NÃO funciona como esperado
    apresentarArrow: () => {
        return `Olá, sou ${this.nome} e tenho ${this.idade} anos`;
    },
    
    // ✅ Shorthand method (ES6)
    apresentarShorthand() {
        return `Olá, sou ${this.nome} e tenho ${this.idade} anos`;
    }
};

console.log('📝 Exemplo 1: Métodos de objeto');
console.log('   ✅ Function tradicional:', pessoa.apresentar());
console.log('   ❌ Arrow function:', pessoa.apresentarArrow()); // undefined
console.log('   ✅ Shorthand method:', pessoa.apresentarShorthand(), '\n');

// Exemplo 2: Callbacks - Onde arrow brilha!
const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    
    ligarMotor() {
        console.log(`\n📝 Exemplo 2: Callbacks com setTimeout`);
        console.log(`   Ligando ${this.marca} ${this.modelo}...`);
        
        // ❌ Function tradicional perde o contexto
        setTimeout(function() {
            console.log(`   ❌ [Function] Motor ligado: ${this.marca} ${this.modelo}`);
            // undefined - this não é mais o objeto carro!
        }, 100);
        
        // ✅ Arrow function mantém o contexto
        setTimeout(() => {
            console.log(`   ✅ [Arrow] Motor ligado: ${this.marca} ${this.modelo}`);
            // Funciona! - this ainda é o objeto carro
        }, 200);
        
        // ✅ Alternativa antiga: bind
        setTimeout(function() {
            console.log(`   ✅ [Bind] Motor ligado: ${this.marca} ${this.modelo}`);
        }.bind(this), 300);
    }
};

carro.ligarMotor();

// Exemplo 3: Event Handlers (importante para DOM)
setTimeout(() => {
    console.log('\n📝 Exemplo 3: Event Handlers');
    console.log('   Em eventos do DOM, prefira arrow functions:');
    console.log('   ');
    console.log('   ❌ button.addEventListener("click", function() {');
    console.log('       console.log(this); // this é o botão!');
    console.log('   });');
    console.log('   ');
    console.log('   ✅ button.addEventListener("click", () => {');
    console.log('       console.log(this); // this é o escopo externo!');
    console.log('   });\n');
}, 400);

// ===========================================
// PARTE 3: PARÂMETROS AVANÇADOS
// ===========================================

setTimeout(() => {
    console.log('\n═══════════════════════════════════════════════');
    console.log('PARTE 3: PARÂMETROS AVANÇADOS');
    console.log('═══════════════════════════════════════════════\n');

    // 1️⃣ Parâmetros Default (ES6+)
    console.log('1️⃣ PARÂMETROS DEFAULT:\n');

    function criarUsuario(nome, idade = 18, ativo = true, cidade = 'São Paulo') {
        return { nome, idade, ativo, cidade };
    }

    console.log('   function criarUsuario(nome, idade = 18, ativo = true, cidade = "SP")');
    console.log('   ');
    console.log('   criarUsuario("João"):');
    console.log('  ', criarUsuario('João'));
    console.log('   ');
    console.log('   criarUsuario("Maria", 25):');
    console.log('  ', criarUsuario('Maria', 25));
    console.log('   ');
    console.log('   criarUsuario("Pedro", 30, false):');
    console.log('  ', criarUsuario('Pedro', 30, false), '\n');

    // ⚠️ Cuidado com valores falsy!
    function definirQuantidade(qtd = 10) {
        return qtd;
    }

    console.log('   ⚠️ CUIDADO com valores falsy:');
    console.log('   definirQuantidade(0):', definirQuantidade(0)); // 0, não 10
    console.log('   definirQuantidade():', definirQuantidade()); // 10
    console.log('   definirQuantidade(null):', definirQuantidade(null)); // null, não 10
    console.log('   definirQuantidade(undefined):', definirQuantidade(undefined), '\n'); // 10

    // 2️⃣ Rest Parameters (...)
    console.log('2️⃣ REST PARAMETERS (...):\n');

    function somar(...numeros) {
        console.log('   Parâmetro "numeros" é um array:', Array.isArray(numeros));
        console.log('   Valores:', numeros);
        return numeros.reduce((total, num) => total + num, 0);
    }

    console.log('   function somar(...numeros) { ... }');
    console.log('   ');
    console.log('   somar(1, 2, 3):', somar(1, 2, 3));
    console.log('   somar(10, 20, 30, 40, 50):', somar(10, 20, 30, 40, 50), '\n');

    // Rest com outros parâmetros
    function registrarAtividade(usuario, acao, ...detalhes) {
        return {
            usuario,
            acao,
            detalhes,
            timestamp: new Date().toISOString()
        };
    }

    console.log('   Rest com outros parâmetros:');
    console.log('   function registrarAtividade(usuario, acao, ...detalhes)');
    console.log('   ');
    const log = registrarAtividade('João', 'login', 'IP: 192.168.1.1', 'Browser: Chrome');
    console.log('   Resultado:', log, '\n');

    // 3️⃣ Destructuring em Parâmetros
    console.log('3️⃣ DESTRUCTURING EM PARÂMETROS:\n');

    // Destructuring de objeto
    function exibirUsuario({ nome, idade, email = 'Não informado', ativo = true }) {
        return `${nome} (${idade} anos) - ${email} - ${ativo ? 'Ativo' : 'Inativo'}`;
    }

    console.log('   function exibirUsuario({ nome, idade, email = "Não informado" })');
    console.log('   ');
    const user1 = { nome: 'João', idade: 30, email: 'joao@email.com' };
    const user2 = { nome: 'Maria', idade: 25 };
    
    console.log('   exibirUsuario(user1):', exibirUsuario(user1));
    console.log('   exibirUsuario(user2):', exibirUsuario(user2), '\n');

    // Destructuring de array
    function pegarPrimeiros([primeiro, segundo, ...resto]) {
        return { primeiro, segundo, resto };
    }

    console.log('   Destructuring de array:');
    const resultado = pegarPrimeiros([1, 2, 3, 4, 5]);
    console.log('   pegarPrimeiros([1,2,3,4,5]):', resultado, '\n');

    // 4️⃣ Combinando tudo!
    console.log('4️⃣ COMBINANDO TUDO:\n');

    function criarProduto(
        { nome, preco, categoria = 'Geral' },
        ...tags
    ) {
        return {
            nome,
            preco,
            categoria,
            tags,
            id: Date.now(),
            ativo: true
        };
    }

    const produto = criarProduto(
        { nome: 'Notebook', preco: 3000 },
        'eletrônicos',
        'informática',
        'portátil'
    );

    console.log('   Função com destructuring + rest:');
    console.log('   ', produto, '\n');

}, 500);

// ===========================================
// PARTE 4: HIGHER ORDER FUNCTIONS (HOF)
// ===========================================

setTimeout(() => {
    console.log('\n═══════════════════════════════════════════════');
    console.log('PARTE 4: HIGHER ORDER FUNCTIONS (HOF)');
    console.log('═══════════════════════════════════════════════\n');

    console.log('💡 HOF = Função que:');
    console.log('   - Recebe função como parâmetro, OU');
    console.log('   - Retorna função como resultado\n');

    // Tipo 1: Função que RECEBE função
    console.log('1️⃣ Função que RECEBE função:\n');

    function executarOperacao(a, b, operacao) {
        return operacao(a, b);
    }

    console.log('   function executarOperacao(a, b, operacao) {');
    console.log('       return operacao(a, b);');
    console.log('   }');
    console.log('   ');
    console.log('   executarOperacao(10, 5, (a,b) => a + b):', executarOperacao(10, 5, (a, b) => a + b));
    console.log('   executarOperacao(10, 5, (a,b) => a * b):', executarOperacao(10, 5, (a, b) => a * b));
    console.log('   executarOperacao(10, 5, (a,b) => a ** b):', executarOperacao(10, 5, (a, b) => a ** b), '\n');

    // Tipo 2: Função que RETORNA função
    console.log('2️⃣ Função que RETORNA função (Factory):\n');

    function criarMultiplicador(fator) {
        return function(numero) {
            return numero * fator;
        };
    }

    const duplicar = criarMultiplicador(2);
    const triplicar = criarMultiplicador(3);
    const quintuplicar = criarMultiplicador(5);

    console.log('   function criarMultiplicador(fator) {');
    console.log('       return function(numero) { return numero * fator; };');
    console.log('   }');
    console.log('   ');
    console.log('   const duplicar = criarMultiplicador(2);');
    console.log('   duplicar(10):', duplicar(10));
    console.log('   triplicar(10):', triplicar(10));
    console.log('   quintuplicar(10):', quintuplicar(10), '\n');

    // Exemplo prático: Middleware pattern
    console.log('3️⃣ Exemplo Prático: Middleware Pattern\n');

    function comLog(fn) {
        return function(...args) {
            console.log(`   📝 Chamando função com args:`, args);
            const resultado = fn(...args);
            console.log(`   ✅ Resultado:`, resultado);
            return resultado;
        };
    }

    const somarComLog = comLog((a, b) => a + b);
    const resultado1 = somarComLog(5, 3);
    console.log('   Retornou:', resultado1, '\n');

    // Exemplo: Composição de funções
    console.log('4️⃣ Composição de Funções:\n');

    const compose = (...fns) => (valor) => fns.reduceRight((acc, fn) => fn(acc), valor);

    const adicionar10 = x => x + 10;
    const multiplicarPor2 = x => x * 2;
    const subtrair5 = x => x - 5;

    const transformar = compose(subtrair5, multiplicarPor2, adicionar10);

    console.log('   Composição: subtrair5(multiplicarPor2(adicionar10(x)))');
    console.log('   transformar(5):', transformar(5)); // (5 + 10) * 2 - 5 = 25
    console.log('   Ordem: 5 → +10 = 15 → ×2 = 30 → -5 = 25\n');

}, 1000);

// ===========================================
// PARTE 5: CALLBACKS
// ===========================================

setTimeout(() => {
    console.log('\n═══════════════════════════════════════════════');
    console.log('PARTE 5: CALLBACKS');
    console.log('═══════════════════════════════════════════════\n');

    console.log('💡 Callback = Função passada como argumento para ser executada depois\n');

    // Exemplo 1: Array methods usam callbacks
    console.log('1️⃣ Callbacks em Array Methods:\n');

    const numeros = [1, 2, 3, 4, 5];

    console.log('   Original:', numeros);
    console.log('   ');
    console.log('   map(n => n * 2):', numeros.map(n => n * 2));
    console.log('   filter(n => n > 2):', numeros.filter(n => n > 2));
    console.log('   find(n => n === 3):', numeros.find(n => n === 3), '\n');

    // Exemplo 2: Callbacks customizados
    console.log('2️⃣ Callback Customizado:\n');

    function processar(array, transformar, filtrar) {
        return array
            .filter(filtrar)
            .map(transformar);
    }

    const resultado = processar(
        [1, 2, 3, 4, 5, 6],
        n => n ** 2,           // transformar
        n => n % 2 === 0       // filtrar (apenas pares)
    );

    console.log('   processar([1,2,3,4,5,6], n => n**2, n => n%2===0)');
    console.log('   Resultado:', resultado, '\n');

    // Exemplo 3: Callbacks assíncronos (preview para módulo 06)
    console.log('3️⃣ Callbacks Assíncronos (preview):\n');

    function buscarUsuario(id, callback) {
        console.log(`   🔍 Buscando usuário ${id}...`);
        setTimeout(() => {
            const usuario = { id, nome: 'João Silva', email: 'joao@email.com' };
            callback(usuario);
        }, 1000);
    }

    buscarUsuario(1, (usuario) => {
        console.log('   ✅ Usuário encontrado:', usuario);
        console.log('   💡 Callback executado após operação assíncrona!\n');
    });

}, 1500);

// ===========================================
// PARTE 6: CLOSURES 🔒
// ===========================================

setTimeout(() => {
    console.log('\n═══════════════════════════════════════════════');
    console.log('PARTE 6: CLOSURES 🔒 (CONCEITO AVANÇADO)');
    console.log('═══════════════════════════════════════════════\n');

    console.log('💡 Closure = Função que "lembra" do escopo onde foi criada');
    console.log('   Mesmo depois que o escopo externo já terminou!\n');

    // Exemplo 1: Contador privado
    console.log('1️⃣ Contador Privado:\n');

    function criarContador(inicial = 0) {
        let contagem = inicial; // Variável "privada"
        
        return {
            incrementar() {
                return ++contagem;
            },
            decrementar() {
                return --contagem;
            },
            resetar() {
                contagem = inicial;
                return contagem;
            },
            ver() {
                return contagem;
            }
        };
    }

    const contador = criarContador(10);

    console.log('   const contador = criarContador(10);');
    console.log('   ');
    console.log('   contador.ver():', contador.ver());
    console.log('   contador.incrementar():', contador.incrementar());
    console.log('   contador.incrementar():', contador.incrementar());
    console.log('   contador.ver():', contador.ver());
    console.log('   contador.decrementar():', contador.decrementar());
    console.log('   contador.resetar():', contador.resetar());
    console.log('   ');
    console.log('   🔒 "contagem" é privada - só acessível via métodos!\n');

    // Exemplo 2: Função com "memória"
    console.log('2️⃣ Função com Memória:\n');

    function criarSomador() {
        let total = 0;
        
        return function(valor) {
            total += valor;
            return total;
        };
    }

    const somador = criarSomador();

    console.log('   const somador = criarSomador();');
    console.log('   ');
    console.log('   somador(5):', somador(5));   // 5
    console.log('   somador(10):', somador(10)); // 15
    console.log('   somador(3):', somador(3));   // 18
    console.log('   ');
    console.log('   💾 A função "lembra" do total anterior!\n');

    // Exemplo 3: Factory de funções
    console.log('3️⃣ Factory de Saudações:\n');

    function criarSaudacao(saudacao) {
        return function(nome) {
            return `${saudacao}, ${nome}!`;
        };
    }

    const bomDia = criarSaudacao('Bom dia');
    const boaNoite = criarSaudacao('Boa noite');
    const ola = criarSaudacao('Olá');

    console.log('   bomDia("João"):', bomDia('João'));
    console.log('   boaNoite("Maria"):', boaNoite('Maria'));
    console.log('   ola("Pedro"):', ola('Pedro'));
    console.log('   ');
    console.log('   💡 Cada função "capturou" sua própria saudação!\n');

    // Exemplo 4: Closure em loops (bug clássico)
    console.log('4️⃣ Closure em Loops (Bug Clássico):\n');

    console.log('   ❌ ERRADO (bug comum):');
    console.log('   for (var i = 0; i < 3; i++) {');
    console.log('       setTimeout(() => console.log(i), 100);');
    console.log('   }');
    console.log('   // Imprime: 3, 3, 3 (todas capturam o mesmo i!)');
    console.log('   ');
    console.log('   ✅ CORRETO (usando let):');
    console.log('   for (let i = 0; i < 3; i++) {');
    console.log('       setTimeout(() => console.log(i), 100);');
    console.log('   }');
    console.log('   // Imprime: 0, 1, 2 (cada iteração tem seu próprio i)\n');

}, 2500);

// ===========================================
// PARTE 7: APLICAÇÕES PRÁTICAS
// ===========================================

setTimeout(() => {
    console.log('\n═══════════════════════════════════════════════');
    console.log('PARTE 7: APLICAÇÕES PRÁTICAS');
    console.log('═══════════════════════════════════════════════\n');

    // 1️⃣ Debounce (otimização de eventos)
    console.log('1️⃣ Debounce (otimização de buscas):\n');

    function debounce(funcao, delay) {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => funcao(...args), delay);
        };
    }

    const buscar = (termo) => console.log(`   🔍 Buscando: ${termo}`);
    const buscarComDebounce = debounce(buscar, 500);

    console.log('   Simulando digitação rápida:');
    buscarComDebounce('j');
    buscarComDebounce('jo');
    buscarComDebounce('joa');
    buscarComDebounce('joao'); // Só essa executa!
    console.log('   💡 Só a última busca é executada (economia de requisições!)\n');

    // 2️⃣ Currying
    console.log('2️⃣ Currying (transformar f(a,b,c) em f(a)(b)(c)):\n');

    const soma = a => b => c => a + b + c;

    console.log('   const soma = a => b => c => a + b + c;');
    console.log('   ');
    console.log('   soma(1)(2)(3):', soma(1)(2)(3));
    console.log('   ');
    console.log('   Ou parcialmente:');
    const soma1 = soma(1);
    const soma1e2 = soma1(2);
    console.log('   soma1e2(3):', soma1e2(3), '\n');

    // 3️⃣ Memoization (cache de resultados)
    console.log('3️⃣ Memoization (cache):\n');

    function memoize(fn) {
        const cache = {};
        return function(...args) {
            const key = JSON.stringify(args);
            if (key in cache) {
                console.log(`   💾 Retornando do cache para: ${key}`);
                return cache[key];
            }
            console.log(`   🔄 Calculando para: ${key}`);
            const resultado = fn(...args);
            cache[key] = resultado;
            return resultado;
        };
    }

    const fibonacci = memoize((n) => {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    });

    console.log('   fibonacci(10):', fibonacci(10));
    console.log('   fibonacci(10):', fibonacci(10)); // Do cache!
    console.log('');

}, 3500);

// ===========================================
// PARTE 8: CONEXÃO COM TYPESCRIPT
// ===========================================

setTimeout(() => {
    console.log('\n═══════════════════════════════════════════════');
    console.log('PARTE 8: CONEXÃO COM TYPESCRIPT');
    console.log('═══════════════════════════════════════════════\n');

    console.log(`
🎯 COMO TYPESCRIPT MELHORA FUNÇÕES:

1️⃣ TIPOS DE PARÂMETROS E RETORNO:
   
   // JavaScript
   function somar(a, b) {
       return a + b;
   }
   
   // TypeScript
   function somar(a: number, b: number): number {
       return a + b;
   }
   
   somar(5, "10"); // ❌ ERRO! TypeScript detecta!

2️⃣ TIPOS DE FUNÇÕES:
   
   type Operacao = (a: number, b: number) => number;
   
   const somar: Operacao = (a, b) => a + b;
   const multiplicar: Operacao = (a, b) => a * b;

3️⃣ PARÂMETROS OPCIONAIS:
   
   function criar(nome: string, idade?: number) {
       // idade é opcional
   }

4️⃣ GENERICS EM FUNÇÕES:
   
   function primeiro<T>(array: T[]): T {
       return array[0];
   }
   
   primeiro([1, 2, 3]);    // tipo: number
   primeiro(["a", "b"]);   // tipo: string

5️⃣ OVERLOADING:
   
   function processar(x: number): number;
   function processar(x: string): string;
   function processar(x: any): any {
       // implementação
   }

💡 CONCLUSÃO:
   TypeScript adiciona SEGURANÇA e AUTOCOMPLETE às funções,
   mas o comportamento do JavaScript permanece o mesmo!
`);

}, 4000);

// ===========================================
// PARTE 9: EXERCÍCIOS
// ===========================================

setTimeout(() => {
    console.log('\n═══════════════════════════════════════════════');
    console.log('EXERCÍCIOS - MÓDULO 04');
    console.log('═══════════════════════════════════════════════\n');

    console.log(`
🎯 DESAFIOS:

1. Crie uma arrow function que recebe um objeto {nome, idade}
   e retorna uma string: "Nome tem Idade anos"
   (use destructuring nos parâmetros)

2. Crie uma HOF chamada "aplicar" que recebe um número e
   uma função, e aplica a função 3 vezes no número:
   
   aplicar(2, n => n * 2) → 16  (2 × 2 × 2 × 2)

3. Implemente uma função "retry" que tenta executar uma
   função até 3 vezes antes de desistir:
   
   retry(() => Math.random() > 0.5 ? "OK" : throw Error())

4. Crie um closure que implementa uma "conta bancária":
   - depositar(valor)
   - sacar(valor)
   - verSaldo()
   - O saldo deve ser privado!

5. Implemente uma função "pipe" (oposto de compose):
   
   const pipe = (...fns) => ...
   const transformar = pipe(adicionar10, multiplicarPor2, subtrair5);
   transformar(5) → 25

6. Crie uma função "once" que permite que outra função
   seja executada apenas UMA vez:
   
   const iniciar = once(() => console.log("Iniciado!"));
   iniciar(); // "Iniciado!"
   iniciar(); // (nada acontece)

💡 DICA: Use closures, HOF e arrow functions!
`);

    console.log('\n✅ Módulo 04 concluído!');
    console.log('📚 Próximo: Módulo 05 - Métodos de Arrays (ES6+)\n');

}, 4500);
