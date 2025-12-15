// ===========================================
// SCRIPT.JS - TRABALHANDO COM IMAGENS EM HTML
// ===========================================

// Este arquivo contém exemplos práticos de manipulação
// de imagens usando JavaScript

console.log('🖼️ Script de imagens carregado com sucesso!');

// ===========================================
// PARTE 1: SELECIONANDO ELEMENTOS DO DOM
// ===========================================

// Seleciona a imagem principal da galeria
const imagemPrincipal = document.getElementById('imagemPrincipal');

// Seleciona o parágrafo com a descrição
const descricaoImagem = document.getElementById('descricaoImagem');

// Seleciona todas as miniaturas (retorna um NodeList)
const miniaturas = document.querySelectorAll('.miniatura');

// Log para verificar se os elementos foram selecionados
console.log('Imagem principal:', imagemPrincipal);
console.log('Número de miniaturas:', miniaturas.length);

// ===========================================
// PARTE 2: PROPRIEDADES DE IMAGENS
// ===========================================

// Podemos acessar diversas propriedades de uma imagem via JavaScript

// src: caminho/URL da imagem
console.log('URL da imagem principal:', imagemPrincipal.src);

// alt: texto alternativo
console.log('Texto alternativo:', imagemPrincipal.alt);

// width e height: dimensões naturais da imagem
// (pode ser 0 se a imagem ainda não foi carregada)
console.log('Largura:', imagemPrincipal.width);
console.log('Altura:', imagemPrincipal.height);

// complete: boolean que indica se a imagem foi carregada
console.log('Imagem carregada?', imagemPrincipal.complete);

// ===========================================
// PARTE 3: EVENTO DE CARREGAMENTO
// ===========================================

// O evento 'load' dispara quando a imagem termina de carregar
imagemPrincipal.addEventListener('load', function() {
    console.log('✅ Imagem principal carregada!');
    console.log('Dimensões reais:', this.naturalWidth, 'x', this.naturalHeight);
});

// O evento 'error' dispara se houver erro ao carregar
imagemPrincipal.addEventListener('error', function() {
    console.error('❌ Erro ao carregar imagem!');
    // Podemos definir uma imagem de fallback
    this.src = 'https://via.placeholder.com/600x400/95A5A6/ffffff?text=Erro+ao+Carregar';
    this.alt = 'Imagem não encontrada';
});

// ===========================================
// PARTE 4: GALERIA INTERATIVA
// ===========================================

// Função para trocar a imagem principal
function trocarImagem(miniatura) {
    // Remove a classe 'ativa' de todas as miniaturas
    miniaturas.forEach(function(mini) {
        mini.classList.remove('ativa');
    });
    
    // Adiciona a classe 'ativa' na miniatura clicada
    miniatura.classList.add('ativa');
    
    // Pega os dados armazenados nos atributos data-*
    const novaImagemSrc = miniatura.getAttribute('data-src');
    const novaDescricao = miniatura.getAttribute('data-descricao');
    
    // Atualiza a imagem principal
    imagemPrincipal.src = novaImagemSrc;
    imagemPrincipal.alt = novaDescricao;
    
    // Atualiza o texto de descrição
    descricaoImagem.textContent = novaDescricao;
    
    // Log para acompanhar a troca
    console.log('🔄 Imagem trocada para:', novaDescricao);
}

// Adiciona evento de clique em cada miniatura
miniaturas.forEach(function(miniatura, index) {
    miniatura.addEventListener('click', function() {
        console.log(`👆 Miniatura ${index + 1} clicada`);
        trocarImagem(this);
    });
    
    // Adiciona cursor pointer para indicar que é clicável
    miniatura.style.cursor = 'pointer';
});

// ===========================================
// PARTE 5: MANIPULAÇÃO AVANÇADA DE IMAGENS
// ===========================================

// Vamos criar algumas funções úteis para manipular imagens

// Função para adicionar efeito de zoom ao passar o mouse
miniaturas.forEach(function(miniatura) {
    miniatura.addEventListener('mouseenter', function() {
        // Aumenta levemente o tamanho da miniatura
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    miniatura.addEventListener('mouseleave', function() {
        // Volta ao tamanho normal se não estiver ativa
        if (!this.classList.contains('ativa')) {
            this.style.transform = 'scale(1)';
        }
    });
});

// ===========================================
// PARTE 6: EXEMPLO - TROCAR IMAGEM DINAMICAMENTE
// ===========================================

// Exemplo de como trocar a imagem após um tempo (comentado para não executar)
// setTimeout(function() {
//     imagemPrincipal.src = 'https://via.placeholder.com/600x400/E74C3C/ffffff?text=Nova+Imagem';
//     console.log('⏰ Imagem trocada automaticamente após 5 segundos');
// }, 5000);

// ===========================================
// PARTE 7: EXEMPLO - OBTER INFORMAÇÕES DA IMAGEM
// ===========================================

// Função que mostra informações detalhadas sobre uma imagem
function mostrarInfoImagem(imagem) {
    console.log('📊 Informações da imagem:');
    console.log('- URL:', imagem.src);
    console.log('- Alt:', imagem.alt);
    console.log('- Largura natural:', imagem.naturalWidth, 'px');
    console.log('- Altura natural:', imagem.naturalHeight, 'px');
    console.log('- Carregada:', imagem.complete);
}

// Adiciona um evento de duplo clique na imagem principal
// para mostrar suas informações no console
imagemPrincipal.addEventListener('dblclick', function() {
    mostrarInfoImagem(this);
});

console.log('💡 Dica: Dê um duplo clique na imagem principal para ver suas informações!');

// ===========================================
// PARTE 8: EXEMPLO - NAVEGAÇÃO COM TECLADO
// ===========================================

// Permite navegar pela galeria usando as setas do teclado
let indiceAtual = 0; // Começa na primeira imagem

document.addEventListener('keydown', function(evento) {
    // Seta direita: próxima imagem
    if (evento.key === 'ArrowRight') {
        indiceAtual = (indiceAtual + 1) % miniaturas.length;
        trocarImagem(miniaturas[indiceAtual]);
        console.log('⏩ Próxima imagem (seta direita)');
    }
    
    // Seta esquerda: imagem anterior
    if (evento.key === 'ArrowLeft') {
        indiceAtual = (indiceAtual - 1 + miniaturas.length) % miniaturas.length;
        trocarImagem(miniaturas[indiceAtual]);
        console.log('⏪ Imagem anterior (seta esquerda)');
    }
});

console.log('⌨️ Use as setas do teclado (← →) para navegar pela galeria!');

// ===========================================
// PARTE 9: EXEMPLO - PRELOAD DE IMAGENS
// ===========================================

// Precarregar imagens pode melhorar a performance
// Cria objetos Image em memória antes de exibi-los

function precarregarImagens(arrayDeUrls) {
    const imagensPrecarregadas = [];
    
    arrayDeUrls.forEach(function(url) {
        const img = new Image(); // Cria um elemento de imagem em memória
        img.src = url; // Define a URL (isso inicia o download)
        imagensPrecarregadas.push(img);
        
        img.addEventListener('load', function() {
            console.log('✅ Imagem precarregada:', url);
        });
    });
    
    return imagensPrecarregadas;
}

// Exemplo de uso (comentado)
// const urlsParaPrecarregar = [
//     'https://via.placeholder.com/600x400/1',
//     'https://via.placeholder.com/600x400/2',
//     'https://via.placeholder.com/600x400/3'
// ];
// precarregarImagens(urlsParaPrecarregar);

// ===========================================
// RESUMO DO QUE APRENDEMOS
// ===========================================

console.log(`
📚 RESUMO - MANIPULAÇÃO DE IMAGENS COM JAVASCRIPT:

1️⃣ Seleção: getElementById(), querySelector(), querySelectorAll()
2️⃣ Propriedades: src, alt, width, height, naturalWidth, naturalHeight, complete
3️⃣ Eventos: load, error, click, dblclick, mouseenter, mouseleave
4️⃣ Atributos data-*: Para armazenar dados customizados
5️⃣ ClassList: add(), remove(), toggle() para manipular classes CSS
6️⃣ Navegação: Usando eventos de teclado
7️⃣ Preload: Carregar imagens antecipadamente com new Image()

💡 DICA: Abra o DevTools (F12) e veja os logs no Console!
`);
