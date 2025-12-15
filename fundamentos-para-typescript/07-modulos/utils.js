// ===========================================
// UTILS.JS - Funções Utilitárias
// ===========================================

/*
    🛠️ FUNÇÕES UTILITÁRIAS
    
    Arquivo com funções "helper" que podem ser usadas
    em qualquer lugar da aplicação.
    
    Boa prática: Ter um arquivo utils.js em todo projeto!
*/

// Formatar valor para moeda brasileira
export function formatarPreco(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}

// Formatar data
export function formatarData(data) {
    return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(data);
}

// Validar email
export function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Gerar ID único
export function gerarId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Debounce (evita executar função muitas vezes)
export function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Calcular desconto percentual
export function calcularDesconto(preco, percentual) {
    return preco * (1 - percentual / 100);
}

// Calcular parcelas
export function calcularParcelas(valorTotal, numeroParcelas) {
    const valorParcela = valorTotal / numeroParcelas;
    return Array.from({ length: numeroParcelas }, (_, i) => ({
        numero: i + 1,
        valor: valorParcela,
        valorFormatado: formatarPreco(valorParcela)
    }));
}

// Salvar no localStorage
export function salvarLocalStorage(chave, valor) {
    try {
        localStorage.setItem(chave, JSON.stringify(valor));
        return true;
    } catch (erro) {
        console.error('Erro ao salvar:', erro);
        return false;
    }
}

// Carregar do localStorage
export function carregarLocalStorage(chave) {
    try {
        const item = localStorage.getItem(chave);
        return item ? JSON.parse(item) : null;
    } catch (erro) {
        console.error('Erro ao carregar:', erro);
        return null;
    }
}

// Limpar localStorage
export function limparLocalStorage(chave) {
    localStorage.removeItem(chave);
}

/*
    💡 PADRÃO COMUM:
    
    Criar arquivo utils.js com funções genéricas que
    podem ser usadas em qualquer parte da aplicação.
    
    Em TypeScript:
    export function formatarPreco(valor: number): string {...}
*/
