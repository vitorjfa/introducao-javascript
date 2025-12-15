// ===========================================
// CARRINHO.JS - Lógica do Carrinho de Compras
// ===========================================

/*
    🎯 EXPORT DEFAULT (Exportação Padrão)
    
    Cada arquivo pode ter APENAS UM export default.
    É usado para a "coisa principal" do arquivo.
    
    Ao importar, você pode usar QUALQUER nome:
    import Carrinho from './carrinho.js';
    import MeuCarrinho from './carrinho.js';  // Funciona também!
    
    Pode combinar default + named exports no mesmo arquivo.
*/

import { formatarPreco, salvarLocalStorage, carregarLocalStorage } from './utils.js';

// EXPORT DEFAULT - A classe principal
export default class Carrinho {
    constructor() {
        // Carregar carrinho salvo ou criar novo
        const carrinhoSalvo = carregarLocalStorage('carrinho');
        this.itens = carrinhoSalvo || [];
        this.listeners = []; // Para notificar mudanças
    }

    // Adicionar produto ao carrinho
    adicionar(produto, quantidade = 1) {
        // Verificar se produto já está no carrinho
        const itemExistente = this.itens.find(item => item.produto.id === produto.id);

        if (itemExistente) {
            // Incrementar quantidade
            itemExistente.quantidade += quantidade;
        } else {
            // Adicionar novo item
            this.itens.push({
                produto: { ...produto }, // Copiar para evitar referência
                quantidade: quantidade
            });
        }

        this._salvar();
        this._notificarMudanca();
    }

    // Remover produto do carrinho
    remover(produtoId) {
        this.itens = this.itens.filter(item => item.produto.id !== produtoId);
        this._salvar();
        this._notificarMudanca();
    }

    // Atualizar quantidade
    atualizarQuantidade(produtoId, novaQuantidade) {
        const item = this.itens.find(item => item.produto.id === produtoId);
        
        if (item) {
            if (novaQuantidade <= 0) {
                this.remover(produtoId);
            } else {
                item.quantidade = novaQuantidade;
                this._salvar();
                this._notificarMudanca();
            }
        }
    }

    // Limpar carrinho
    limpar() {
        this.itens = [];
        this._salvar();
        this._notificarMudanca();
    }

    // Obter itens do carrinho
    obterItens() {
        return [...this.itens]; // Retornar cópia
    }

    // Calcular subtotal de um item
    calcularSubtotal(item) {
        return item.produto.preco * item.quantidade;
    }

    // Calcular total do carrinho
    calcularTotal() {
        return this.itens.reduce((total, item) => {
            return total + this.calcularSubtotal(item);
        }, 0);
    }

    // Obter quantidade total de itens
    obterQuantidadeTotal() {
        return this.itens.reduce((total, item) => total + item.quantidade, 0);
    }

    // Verificar se carrinho está vazio
    estaVazio() {
        return this.itens.length === 0;
    }

    // Registrar listener para mudanças
    onChange(callback) {
        this.listeners.push(callback);
    }

    // Salvar no localStorage
    _salvar() {
        salvarLocalStorage('carrinho', this.itens);
    }

    // Notificar listeners sobre mudanças
    _notificarMudanca() {
        this.listeners.forEach(callback => callback(this.obterItens()));
    }

    // Obter resumo formatado
    obterResumo() {
        return {
            itens: this.itens,
            quantidadeTotal: this.obterQuantidadeTotal(),
            total: this.calcularTotal(),
            totalFormatado: formatarPreco(this.calcularTotal())
        };
    }
}

// NAMED EXPORTS - Funções auxiliares relacionadas ao carrinho
export function calcularDesconto(total, cupom) {
    const cupons = {
        'PRIMEIRA': 10,    // 10% de desconto
        'BLACKFRIDAY': 25, // 25% de desconto
        'NATAL': 15        // 15% de desconto
    };

    const percentual = cupons[cupom.toUpperCase()] || 0;
    const desconto = total * (percentual / 100);
    const totalComDesconto = total - desconto;

    return {
        percentual,
        desconto,
        totalComDesconto,
        descontoFormatado: formatarPreco(desconto),
        totalFormatado: formatarPreco(totalComDesconto)
    };
}

export function calcularFrete(total, cep) {
    // Simulação simples de cálculo de frete
    if (total > 500) {
        return {
            valor: 0,
            valorFormatado: 'GRÁTIS',
            prazo: '3-5 dias úteis'
        };
    }

    // Frete baseado na região (primeiros dígitos do CEP)
    const regiao = cep.substring(0, 2);
    const fretes = {
        '01-19': 25.00, // Sudeste
        '20-29': 30.00, // Rio
        '30-39': 28.00, // Minas
        '40-49': 35.00, // Nordeste
        '50-59': 35.00, // Nordeste
        '60-69': 40.00, // Norte
        '70-79': 32.00, // Centro-Oeste
        '80-89': 35.00, // Sul
        '90-99': 45.00  // Sul
    };

    const valorFrete = fretes[`${regiao.charAt(0)}0-${regiao.charAt(0)}9`] || 30.00;

    return {
        valor: valorFrete,
        valorFormatado: formatarPreco(valorFrete),
        prazo: '5-10 dias úteis'
    };
}

export function validarEstoque(carrinho, produtos) {
    const erros = [];

    carrinho.obterItens().forEach(item => {
        const produto = produtos.find(p => p.id === item.produto.id);
        
        if (!produto) {
            erros.push(`Produto ${item.produto.nome} não encontrado`);
        } else if (produto.estoque < item.quantidade) {
            erros.push(`${produto.nome}: apenas ${produto.estoque} disponíveis`);
        }
    });

    return {
        valido: erros.length === 0,
        erros
    };
}

/*
    💡 QUANDO USAR DEFAULT VS NAMED:
    
    ✅ DEFAULT:
       - Uma classe principal
       - Uma função principal
       - Um componente React
       
    ✅ NAMED:
       - Múltiplas funções utilitárias
       - Múltiplas constantes
       - Quando quer forçar nome específico
       
    💡 PODE COMBINAR AMBOS NO MESMO ARQUIVO! (como aqui)
*/
