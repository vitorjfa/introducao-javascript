// ===========================================
// APP.JS - Arquivo Principal da Aplicação
// ===========================================

/*
    🎯 ESTE É O ARQUIVO PRINCIPAL (ENTRY POINT)
    
    Aqui importamos tudo que precisamos e orquestramos
    a aplicação.
    
    Veja como importamos de diferentes formas:
    - DEFAULT import: Carrinho
    - NAMED imports: { produtos }, { formatarPreco }
*/

// ============================================
// IMPORTS
// ============================================

// Import DEFAULT (sem chaves)
import Carrinho from './carrinho.js';

// Import NAMED (com chaves)
import { produtos, buscarProdutoPorId, filtrarPorCategoria } from './produtos.js';
import { formatarPreco, formatarData } from './utils.js';
import { calcularDesconto } from './carrinho.js';

// ============================================
// APLICAÇÃO
// ============================================

console.log('🚀 Aplicação E-commerce Iniciada!\n');
console.log('📦 Produtos carregados:', produtos.length);

// Criar instância do carrinho
const carrinho = new Carrinho();

console.log('🛒 Carrinho criado');
console.log('   Itens salvos:', carrinho.obterItens().length, '\n');

// ============================================
// RENDERIZAR PRODUTOS
// ============================================

function renderizarProdutos() {
    const grid = document.getElementById('produtos-grid');
    
    if (!grid) return;
    
    grid.innerHTML = '';
    
    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'produto-card';
        
        card.innerHTML = `
            <div class="produto-nome">${produto.nome}</div>
            <div class="produto-categoria">${produto.categoria}</div>
            <div style="color: #666; font-size: 0.9em; margin: 8px 0;">
                ${produto.descricao}
            </div>
            <div style="color: #999; font-size: 0.85em; margin-bottom: 12px;">
                Estoque: ${produto.estoque} unidades
            </div>
            <div class="produto-preco">${formatarPreco(produto.preco)}</div>
            <button onclick="window.adicionarAoCarrinho(${produto.id})">
                Adicionar ao Carrinho
            </button>
        `;
        
        grid.appendChild(card);
    });
    
    console.log('✅ Produtos renderizados:', produtos.length);
}

// ============================================
// RENDERIZAR CARRINHO
// ============================================

function renderizarCarrinho() {
    const container = document.getElementById('carrinho-itens');
    const totalContainer = document.getElementById('carrinho-total');
    
    if (!container || !totalContainer) return;
    
    const itens = carrinho.obterItens();
    
    if (itens.length === 0) {
        container.innerHTML = '<div class="vazio">Seu carrinho está vazio 🛒</div>';
        totalContainer.innerHTML = '';
        return;
    }
    
    container.innerHTML = '';
    
    itens.forEach(item => {
        const div = document.createElement('div');
        div.className = 'carrinho-item';
        
        const subtotal = carrinho.calcularSubtotal(item);
        
        div.innerHTML = `
            <div class="item-info">
                <div style="font-weight: bold; margin-bottom: 4px;">
                    ${item.produto.nome}
                </div>
                <div style="color: #666; font-size: 0.9em;">
                    ${formatarPreco(item.produto.preco)} × ${item.quantidade} = 
                    ${formatarPreco(subtotal)}
                </div>
            </div>
            <div class="item-actions">
                <span class="quantidade">${item.quantidade}x</span>
                <button class="btn-remover" onclick="window.removerDoCarrinho(${item.produto.id})">
                    Remover
                </button>
            </div>
        `;
        
        container.appendChild(div);
    });
    
    const total = carrinho.calcularTotal();
    totalContainer.innerHTML = `
        <div class="total">
            Total: ${formatarPreco(total)}
        </div>
    `;
    
    console.log('🛒 Carrinho atualizado');
    console.log('   Itens:', itens.length);
    console.log('   Total:', formatarPreco(total));
}

// ============================================
// FUNÇÕES PÚBLICAS (expostas ao window)
// ============================================

window.adicionarAoCarrinho = function(produtoId) {
    const produto = buscarProdutoPorId(produtoId);
    
    if (!produto) {
        console.error('Produto não encontrado:', produtoId);
        return;
    }
    
    // Verificar estoque
    const itemNoCarrinho = carrinho.obterItens().find(i => i.produto.id === produtoId);
    const quantidadeAtual = itemNoCarrinho ? itemNoCarrinho.quantidade : 0;
    
    if (quantidadeAtual >= produto.estoque) {
        alert(`Estoque insuficiente! Apenas ${produto.estoque} disponíveis.`);
        return;
    }
    
    carrinho.adicionar(produto, 1);
    
    console.log(`✅ Adicionado ao carrinho: ${produto.nome}`);
    
    renderizarCarrinho();
};

window.removerDoCarrinho = function(produtoId) {
    const produto = buscarProdutoPorId(produtoId);
    
    carrinho.remover(produtoId);
    
    console.log(`❌ Removido do carrinho: ${produto.nome}`);
    
    renderizarCarrinho();
};

// ============================================
// DEMONSTRAÇÕES NO CONSOLE
// ============================================

console.log('\n═══════════════════════════════════════════════');
console.log('DEMONSTRAÇÕES DOS MÓDULOS');
console.log('═══════════════════════════════════════════════\n');

// 1. Buscar produto por ID
console.log('1️⃣ Buscar produto por ID:');
const notebook = buscarProdutoPorId(1);
console.log('   buscarProdutoPorId(1):', notebook.nome, '\n');

// 2. Filtrar por categoria
console.log('2️⃣ Filtrar por categoria:');
const eletronicos = filtrarPorCategoria('Eletrônicos');
console.log('   filtrarPorCategoria("Eletrônicos"):', eletronicos.length, 'produtos\n');

// 3. Formatar preços
console.log('3️⃣ Formatar preço:');
console.log('   formatarPreco(1234.56):', formatarPreco(1234.56), '\n');

// 4. Calcular desconto
console.log('4️⃣ Calcular desconto:');
const resultado = calcularDesconto(1000, 'BLACKFRIDAY');
console.log('   Cupom BLACKFRIDAY em R$ 1000:');
console.log('   Desconto:', resultado.descontoFormatado);
console.log('   Total:', resultado.totalFormatado, '\n');

// 5. Resumo do carrinho
console.log('5️⃣ Resumo do carrinho:');
const resumo = carrinho.obterResumo();
console.log('   Itens:', resumo.quantidadeTotal);
console.log('   Total:', resumo.totalFormatado, '\n');

// ============================================
// LISTENER PARA MUDANÇAS NO CARRINHO
// ============================================

carrinho.onChange((itens) => {
    console.log('🔔 Carrinho modificado! Novos itens:', itens.length);
});

// ============================================
// INICIALIZAR APLICAÇÃO
// ============================================

function iniciar() {
    console.log('\n✅ Inicializando interface...\n');
    renderizarProdutos();
    renderizarCarrinho();
    
    console.log('═══════════════════════════════════════════════');
    console.log('📚 COMO OS MÓDULOS FUNCIONAM AQUI:');
    console.log('═══════════════════════════════════════════════\n');
    
    console.log(`
1️⃣ produtos.js exporta:
   export const produtos = [...];
   export function buscarProdutoPorId(id) {...}

2️⃣ utils.js exporta:
   export function formatarPreco(valor) {...}
   export function formatarData(data) {...}

3️⃣ carrinho.js exporta:
   export default class Carrinho {...}  // DEFAULT
   export function calcularDesconto() {...}  // NAMED

4️⃣ app.js importa TUDO:
   import Carrinho from './carrinho.js';  // DEFAULT
   import { produtos } from './produtos.js';  // NAMED
   import { formatarPreco } from './utils.js';  // NAMED

💡 RESULTADO:
   - Código organizado em arquivos separados
   - Cada arquivo tem sua responsabilidade
   - Fácil de manter e testar
   - Pronto para crescer!

🎯 EM TYPESCRIPT:
   Funciona EXATAMENTE IGUAL, mas com tipos!
   
   // produtos.ts
   export interface Produto {
       id: number;
       nome: string;
       preco: number;
   }
   
   export const produtos: Produto[] = [...];
    `);
    
    console.log('\n✅ Aplicação pronta! Use a interface acima. 👆\n');
}

// Aguardar DOM carregar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
} else {
    iniciar();
}

// ============================================
// EXPORTAR PARA TESTES (OPCIONAL)
// ============================================

/*
    Se você quiser testar este módulo em outro arquivo:
    
    import { iniciar } from './app.js';
*/

export { iniciar, renderizarProdutos, renderizarCarrinho };
