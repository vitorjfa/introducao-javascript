// ===========================================
// MÓDULO 06: ASSINCRONICIDADE (ASYNC/AWAIT) ⚡
// ===========================================

/*
    🎯 OBJETIVO DESTE MÓDULO:
    
    Este é o módulo mais DESAFIADOR para iniciantes!
    
    JavaScript é ASSÍNCRONO por natureza.
    Você PRECISA entender isso para:
    - Fazer chamadas HTTP (APIs)
    - Trabalhar com bancos de dados
    - Manipular arquivos
    - Criar temporizadores
    
    Você vai aprender:
    - Como JavaScript executa código (Event Loop)
    - Callbacks e "Callback Hell"
    - Promises (then/catch/finally)
    - Async/Await (a forma moderna)
    - Tratamento de erros
    - Promise.all, Promise.race
    - Fetch API (requisições HTTP)
    
    ⚠️ ATENÇÃO: Este módulo é FUNDAMENTAL!
*/

console.log('🚀 MÓDULO 06: ASSINCRONICIDADE (ASYNC/AWAIT) ⚡\n');
console.log('⭐ ESTE É O MÓDULO MAIS IMPORTANTE PARA TRABALHAR COM APIs! ⭐\n');

// ===========================================
// PARTE 1: O PROBLEMA - CÓDIGO SÍNCRONO
// ===========================================

setTimeout(() => {
console.log('═══════════════════════════════════════════════');
console.log('PARTE 1: O PROBLEMA - CÓDIGO SÍNCRONO');
console.log('═══════════════════════════════════════════════\n');

console.log(`
💡 CONCEITOS BÁSICOS:

📌 SÍNCRONO = Uma coisa de cada vez, em ordem
   console.log('1');
   console.log('2');
   console.log('3');
   // Sempre imprime: 1, 2, 3

📌 ASSÍNCRONO = Várias coisas ao mesmo tempo
   console.log('1');
   setTimeout(() => console.log('2'), 1000);
   console.log('3');
   // Imprime: 1, 3, 2 (depois de 1 segundo!)

⚠️ POR QUE ISSO É IMPORTANTE?

Imagine que você faz uma requisição HTTP para buscar usuários:
`);

console.log('❌ SE FOSSE SÍNCRONO (bloqueante):');
console.log('   const usuarios = buscarUsuarios(); // TRAVA 2 segundos!');
console.log('   console.log(usuarios); // Só executa depois');
console.log('   ⚠️ O navegador CONGELA esperando!\n');

console.log('✅ SENDO ASSÍNCRONO (não-bloqueante):');
console.log('   buscarUsuarios().then(usuarios => {');
console.log('       console.log(usuarios);');
console.log('   });');
console.log('   console.log("Isso executa IMEDIATAMENTE!");');
console.log('   ✅ O navegador continua responsivo!\n');

}, 100);

// ===========================================
// PARTE 2: EVENT LOOP - COMO FUNCIONA
// ===========================================

setTimeout(() => {
console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 2: EVENT LOOP - A MÁGICA DO JAVASCRIPT');
console.log('═══════════════════════════════════════════════\n');

console.log(`
💡 COMO JAVASCRIPT EXECUTA CÓDIGO:

JavaScript é SINGLE-THREADED (uma thread só!), mas simula
paralelismo usando o EVENT LOOP.

📋 COMPONENTES:

1️⃣ CALL STACK (Pilha de Execução):
   - Onde o código está sendo executado AGORA
   - Executa função por função (LIFO - Last In, First Out)

2️⃣ WEB APIs:
   - setTimeout, fetch, DOM events
   - Executam FORA da Call Stack

3️⃣ CALLBACK QUEUE (Fila de Callbacks):
   - Callbacks prontos para executar
   - Esperam a Call Stack esvaziar

4️⃣ EVENT LOOP:
   - Verifica se Call Stack está vazia
   - Se sim, pega callback da fila e executa

📝 EXEMPLO:
`);

console.log('🔄 Acompanhe a ordem de execução:\n');

console.log('1️⃣ Início (síncrono)');

setTimeout(() => {
    console.log('3️⃣ Timeout de 0ms (assíncrono!)');
}, 0);

Promise.resolve().then(() => {
    console.log('2️⃣ Promise (microtask - prioridade!)');
});

console.log('1️⃣ Fim (síncrono)');

console.log('\n💡 Ordem: 1 → 1 → 2 → 3');
console.log('   Mesmo com 0ms, setTimeout só executa depois!\n');

}, 200);

// ===========================================
// PARTE 3: CALLBACKS - A FORMA ANTIGA
// ===========================================

setTimeout(() => {
console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 3: CALLBACKS - A FORMA ANTIGA');
console.log('═══════════════════════════════════════════════\n');

console.log('💡 CALLBACK = Função passada como argumento\n');

// Exemplo simples
function processarDados(dados, callback) {
    console.log('   Processando:', dados);
    callback(dados.toUpperCase());
}

processarDados('javascript', (resultado) => {
    console.log('   Resultado:', resultado);
});

console.log('\n⚠️ O PROBLEMA: CALLBACK HELL (Pirâmide da Perdição)\n');

console.log(`
Imagine buscar usuário, depois posts, depois comentários:

buscarUsuario(1, (usuario) => {
    buscarPosts(usuario.id, (posts) => {
        buscarComentarios(posts[0].id, (comentarios) => {
            buscarAutor(comentarios[0].autorId, (autor) => {
                // FINALMENTE usar os dados...
                // Já estamos no nível 4 de indentação! 😱
            });
        });
    });
});

❌ PROBLEMAS:
   - Difícil de ler
   - Difícil de dar manutenção
   - Tratamento de erro complicado
   - Não dá para usar async/await
`);

}, 400);

// ===========================================
// PARTE 4: PROMISES - A SOLUÇÃO
// ===========================================

setTimeout(() => {
console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 4: PROMISES - A SOLUÇÃO! 🎯');
console.log('═══════════════════════════════════════════════\n');

console.log(`
💡 PROMISE = Promessa de um valor futuro

Uma Promise pode estar em 3 estados:
1️⃣ PENDING (pendente) - ainda processando
2️⃣ FULFILLED (resolvida) - sucesso!
3️⃣ REJECTED (rejeitada) - erro!

📝 CRIANDO UMA PROMISE:
`);

const minhaPromise = new Promise((resolve, reject) => {
    const sucesso = true;
    
    if (sucesso) {
        resolve('Deu certo! 🎉');
    } else {
        reject('Deu erro! ❌');
    }
});

console.log('   Promise criada:', minhaPromise);

// Exemplo prático: Simular requisição HTTP
function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        console.log(`\n   🔄 Buscando usuário ${id}...`);
        
        setTimeout(() => {
            if (id > 0) {
                resolve({
                    id: id,
                    nome: 'João Silva',
                    email: 'joao@email.com'
                });
            } else {
                reject('ID inválido!');
            }
        }, 1000);
    });
}

console.log('\n📝 Usando .then() e .catch():');

buscarUsuario(1)
    .then(usuario => {
        console.log('   ✅ Usuário encontrado:', usuario);
        return usuario.id; // Pode retornar para o próximo .then()
    })
    .then(id => {
        console.log('   ID:', id);
    })
    .catch(erro => {
        console.log('   ❌ Erro:', erro);
    })
    .finally(() => {
        console.log('   🏁 Finally sempre executa!');
    });

}, 600);

// ===========================================
// PARTE 5: ASYNC/AWAIT - A FORMA MODERNA ⭐
// ===========================================

setTimeout(() => {
console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 5: ASYNC/AWAIT - A FORMA MODERNA ⭐');
console.log('═══════════════════════════════════════════════\n');

console.log(`
💡 ASYNC/AWAIT = Syntax sugar para Promises

Faz código assíncrono PARECER síncrono!

📝 COMPARAÇÃO:
`);

// Simulação de funções assíncronas
function buscarUsuarioAsync(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id, nome: 'Maria' });
        }, 500);
    });
}

function buscarPostsAsync(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, titulo: 'Post 1', userId }
            ]);
        }, 500);
    });
}

// ❌ COM .then() (antigo)
console.log('❌ COM .then() (mais verboso):\n');

buscarUsuarioAsync(1)
    .then(usuario => {
        console.log('   Usuário:', usuario);
        return buscarPostsAsync(usuario.id);
    })
    .then(posts => {
        console.log('   Posts:', posts);
    })
    .catch(erro => {
        console.log('   Erro:', erro);
    });

// ✅ COM ASYNC/AWAIT (moderno)
setTimeout(async () => {
    console.log('\n✅ COM ASYNC/AWAIT (mais limpo):\n');
    
    try {
        const usuario = await buscarUsuarioAsync(1);
        console.log('   Usuário:', usuario);
        
        const posts = await buscarPostsAsync(usuario.id);
        console.log('   Posts:', posts);
    } catch (erro) {
        console.log('   Erro:', erro);
    }
}, 1200);

}, 2800);

// ===========================================
// PARTE 6: TRATAMENTO DE ERROS
// ===========================================

setTimeout(async () => {
console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 6: TRATAMENTO DE ERROS');
console.log('═══════════════════════════════════════════════\n');

console.log('💡 Sempre use try/catch com async/await!\n');

function buscarDadosComErro() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Falha na conexão!'));
        }, 500);
    });
}

console.log('📝 Exemplo de Tratamento:\n');

try {
    const dados = await buscarDadosComErro();
    console.log('   Dados:', dados);
} catch (erro) {
    console.log('   ❌ Erro capturado:', erro.message);
}

console.log('\n💡 Boas práticas:\n');
console.log(`
✅ SEMPRE use try/catch:
   
   async function buscar() {
       try {
           const dados = await fetch('/api/users');
           return dados;
       } catch (erro) {
           console.error('Erro:', erro);
           // Logar, mostrar mensagem ao usuário, etc.
       }
   }

✅ Retorne erros específicos:
   
   if (!response.ok) {
       throw new Error(\`HTTP \${response.status}\`);
   }

✅ Use finally para cleanup:
   
   try {
       setLoading(true);
       await buscar();
   } catch (erro) {
       setError(erro);
   } finally {
       setLoading(false); // Sempre executa!
   }
`);

}, 4500);

// ===========================================
// PARTE 7: PROMISE.ALL E PROMISE.RACE
// ===========================================

setTimeout(async () => {
console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 7: PROMISE.ALL E PROMISE.RACE');
console.log('═══════════════════════════════════════════════\n');

// Simular requisições
const req1 = () => new Promise(resolve => setTimeout(() => resolve('Req 1'), 1000));
const req2 = () => new Promise(resolve => setTimeout(() => resolve('Req 2'), 500));
const req3 = () => new Promise(resolve => setTimeout(() => resolve('Req 3'), 1500));

console.log('💡 Promise.all() - Espera TODAS terminarem:\n');
console.log('   Executando 3 requisições em paralelo...\n');

const inicio = Date.now();

try {
    const resultados = await Promise.all([req1(), req2(), req3()]);
    const tempo = Date.now() - inicio;
    
    console.log('   ✅ Todos os resultados:', resultados);
    console.log(`   ⏱️ Tempo total: ${tempo}ms`);
    console.log('   (Levou o tempo da mais lenta: ~1500ms)\n');
} catch (erro) {
    console.log('   ❌ Se UMA falhar, TODAS falham!');
}

console.log('💡 Promise.race() - Retorna a PRIMEIRA que terminar:\n');
console.log('   Executando 3 requisições em paralelo...\n');

const inicioRace = Date.now();

try {
    const resultado = await Promise.race([req1(), req2(), req3()]);
    const tempoRace = Date.now() - inicioRace;
    
    console.log('   ✅ Primeira a terminar:', resultado);
    console.log(`   ⏱️ Tempo: ${tempoRace}ms`);
    console.log('   (A mais rápida: ~500ms)\n');
} catch (erro) {
    console.log('   Erro:', erro);
}

console.log(`
📝 CASOS DE USO:

Promise.all():
   - Buscar múltiplos recursos ao mesmo tempo
   - Carregar dados de várias APIs
   - Executar múltiplas validações
   
Promise.race():
   - Timeout de requisições
   - Usar servidor de backup se principal demorar
   - Cache + API (usa o que responder primeiro)
`);

}, 5000);

// ===========================================
// PARTE 8: FETCH API - REQUISIÇÕES HTTP
// ===========================================

setTimeout(async () => {
console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 8: FETCH API - REQUISIÇÕES HTTP 🌐');
console.log('═══════════════════════════════════════════════\n');

console.log('💡 Fetch() é a forma moderna de fazer requisições HTTP\n');

console.log('📝 Exemplo: Buscar dados de uma API real:\n');

try {
    console.log('   🔄 Buscando dados...\n');
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    
    console.log('   Status:', response.status);
    console.log('   OK?', response.ok);
    
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
    
    const usuario = await response.json();
    
    console.log('   ✅ Usuário recebido:', {
        id: usuario.id,
        nome: usuario.name,
        email: usuario.email
    });
    
} catch (erro) {
    console.log('   ❌ Erro:', erro.message);
}

console.log('\n📝 Padrão completo de requisição:\n');

console.log(`
async function buscarUsuarios() {
    try {
        // 1. Fazer requisição
        const response = await fetch('/api/usuarios');
        
        // 2. Verificar se deu certo
        if (!response.ok) {
            throw new Error(\`HTTP \${response.status}\`);
        }
        
        // 3. Converter resposta
        const dados = await response.json();
        
        // 4. Retornar dados
        return dados;
        
    } catch (erro) {
        // 5. Tratar erro
        console.error('Erro ao buscar:', erro);
        throw erro; // Re-lançar para componente tratar
    }
}
`);

}, 8000);

// ===========================================
// PARTE 9: PADRÕES AVANÇADOS
// ===========================================

setTimeout(async () => {
console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 9: PADRÕES AVANÇADOS');
console.log('═══════════════════════════════════════════════\n');

console.log('📝 Padrão 1: Retry (Tentar novamente)\n');

async function fetchComRetry(url, tentativas = 3) {
    for (let i = 0; i < tentativas; i++) {
        try {
            console.log(`   Tentativa ${i + 1}/${tentativas}...`);
            const response = await fetch(url);
            
            if (!response.ok) throw new Error('Falhou');
            
            console.log('   ✅ Sucesso!\n');
            return await response.json();
            
        } catch (erro) {
            if (i === tentativas - 1) {
                console.log('   ❌ Todas tentativas falharam!\n');
                throw erro;
            }
            console.log(`   ⚠️ Falhou, tentando novamente...\n`);
            await new Promise(r => setTimeout(r, 1000)); // Esperar 1s
        }
    }
}

console.log('📝 Padrão 2: Timeout (Limitar tempo de espera)\n');

function comTimeout(promise, ms) {
    return Promise.race([
        promise,
        new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Timeout!')), ms)
        )
    ]);
}

console.log(`
async function buscar() {
    try {
        const dados = await comTimeout(
            fetch('/api/dados'),
            5000 // 5 segundos
        );
        return dados;
    } catch (erro) {
        console.log('Demorou demais!');
    }
}
`);

console.log('\n📝 Padrão 3: Executar em sequência vs paralelo\n');

const ids = [1, 2, 3];

// ❌ EM SEQUÊNCIA (lento)
console.log('❌ Em sequência (uma por vez):');
console.log('   for (const id of ids) {');
console.log('       await fetch(\`/api/user/\${id}\`); // Espera cada uma!');
console.log('   }');
console.log('   Tempo: 3 × tempo da requisição\n');

// ✅ EM PARALELO (rápido)
console.log('✅ Em paralelo (todas juntas):');
console.log('   const promises = ids.map(id => ');
console.log('       fetch(\`/api/user/\${id}\`)');
console.log('   );');
console.log('   await Promise.all(promises);');
console.log('   Tempo: tempo da requisição mais lenta\n');

}, 9500);

// ===========================================
// PARTE 10: CONEXÃO COM TYPESCRIPT
// ===========================================

setTimeout(() => {
console.log('\n═══════════════════════════════════════════════');
console.log('PARTE 10: CONEXÃO COM TYPESCRIPT');
console.log('═══════════════════════════════════════════════\n');

console.log(`
🎯 COMO TYPESCRIPT MELHORA ASYNC/AWAIT:

1️⃣ TIPOS PARA PROMISES:
   
   async function buscar(): Promise<User[]> {
       const response = await fetch('/api/users');
       return response.json(); // TypeScript sabe que é User[]
   }

2️⃣ INFERÊNCIA AUTOMÁTICA:
   
   const usuario = await buscarUsuario(); // Tipo inferido!
   usuario.nome // Autocomplete funciona!

3️⃣ TIPOS PARA FETCH:
   
   interface ApiResponse<T> {
       data: T;
       status: number;
   }
   
   const response: ApiResponse<User[]> = await fetch(...);

4️⃣ GENÉRICOS EM FUNÇÕES ASSÍNCRONAS:
   
   async function buscar<T>(url: string): Promise<T> {
       const response = await fetch(url);
       return response.json();
   }
   
   const users = await buscar<User[]>('/api/users');
   // TypeScript sabe que users é User[]!

5️⃣ TRATAMENTO DE ERROS TIPADO:
   
   class ApiError extends Error {
       constructor(public status: number, message: string) {
           super(message);
       }
   }
   
   try {
       await buscar();
   } catch (error) {
       if (error instanceof ApiError) {
           console.log(error.status); // TypeScript sabe!
       }
   }

💡 CONCLUSÃO:
   TypeScript torna código assíncrono MUITO mais seguro!
   Você saberá EXATAMENTE que tipo de dados está recebendo.
`);

}, 10000);

// ===========================================
// PARTE 11: EXERCÍCIOS
// ===========================================

setTimeout(() => {
console.log('\n═══════════════════════════════════════════════');
console.log('EXERCÍCIOS - MÓDULO 06');
console.log('═══════════════════════════════════════════════\n');

console.log(`
🎯 DESAFIOS:

1. Crie uma função que busca um usuário por ID usando fetch:
   - Use a API: https://jsonplaceholder.typicode.com/users/{id}
   - Trate erros (ID inválido, rede, etc.)
   - Use async/await

2. Implemente um sistema de cache:
   - Busca dados da API
   - Guarda em memória (objeto)
   - Próximas chamadas retornam do cache
   - Expire cache após 5 minutos

3. Crie fetchComRetry():
   - Tenta 3 vezes se falhar
   - Espera 1s entre tentativas
   - Lança erro se todas falharem

4. Implemente Promise.allSettled() manualmente:
   - Espera todas promises terminarem
   - Retorna array com status de cada uma
   - NÃO falha se uma falhar

5. Crie um "rate limiter":
   - Limita requisições a 5 por segundo
   - Enfileira requisições extras
   - Processa fila automaticamente

6. Implemente busca com cancelamento:
   - Use AbortController
   - Cancele requisição anterior ao fazer nova busca
   - Util para campos de busca

7. Crie sistema de busca paralela:
   - Busca em múltiplas APIs
   - Retorna a primeira que responder
   - Se todas falharem, tenta novamente

💡 DICA: Use JSONPlaceholder para testar!
   https://jsonplaceholder.typicode.com
`);

console.log('\n✅ Módulo 06 concluído!');
console.log('📚 Próximo: Módulo 07 - Sistema de Módulos (Import/Export)\n');

}, 10500);
