// ===========================================
// PRODUTOS.JS - Dados dos Produtos
// ===========================================

/*
    📦 EXPORT NAMED (Exportação Nomeada)
    
    Você pode exportar múltiplas coisas do mesmo arquivo.
    Ao importar, DEVE usar o mesmo nome (ou renomear com 'as').
    
    Exemplo:
    export const produtos = [...];
    export const categorias = [...];
    
    Importar:
    import { produtos, categorias } from './produtos.js';
*/

// Exportando array de produtos
export const produtos = [
    {
        id: 1,
        nome: 'Notebook Gamer',
        preco: 4500.00,
        categoria: 'Eletrônicos',
        descricao: 'Notebook potente para jogos',
        estoque: 5
    },
    {
        id: 2,
        nome: 'Mouse Gamer RGB',
        preco: 150.00,
        categoria: 'Periféricos',
        descricao: 'Mouse com iluminação RGB',
        estoque: 15
    },
    {
        id: 3,
        nome: 'Teclado Mecânico',
        preco: 350.00,
        categoria: 'Periféricos',
        descricao: 'Teclado mecânico switch blue',
        estoque: 8
    },
    {
        id: 4,
        nome: 'Monitor 27" 144Hz',
        preco: 1200.00,
        categoria: 'Eletrônicos',
        descricao: 'Monitor para gaming',
        estoque: 3
    },
    {
        id: 5,
        nome: 'Headset Gamer',
        preco: 280.00,
        categoria: 'Periféricos',
        descricao: 'Headset com som surround',
        estoque: 12
    },
    {
        id: 6,
        nome: 'Webcam Full HD',
        preco: 420.00,
        categoria: 'Periféricos',
        descricao: 'Webcam para streaming',
        estoque: 7
    }
];

// Exportando categorias disponíveis
export const categorias = [
    'Eletrônicos',
    'Periféricos',
    'Acessórios'
];

// Exportando função para buscar produto por ID
export function buscarProdutoPorId(id) {
    return produtos.find(p => p.id === id);
}

// Exportando função para filtrar por categoria
export function filtrarPorCategoria(categoria) {
    return produtos.filter(p => p.categoria === categoria);
}

// Exportando função para buscar por nome
export function buscarPorNome(termo) {
    return produtos.filter(p => 
        p.nome.toLowerCase().includes(termo.toLowerCase())
    );
}

/*
    💡 VANTAGENS DE NAMED EXPORTS:
    
    ✅ Pode exportar múltiplas coisas
    ✅ Nome explícito (sabe o que está importando)
    ✅ Tree-shaking (bundlers removem código não usado)
    ✅ Facilita refatoração
*/
