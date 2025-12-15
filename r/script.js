const mainElement = document.createElement('main')
const h1Element = document.createElement('h1')
const pElement = document.createElement('p')
const spanElement = document.createElement('span')

const bodyElement = document.querySelector('body')

h1Element.innerHTML = "Daniel Ventura de Almeida"
pElement.innerHTML = "Desenvolvedor"
spanElement.innerHTML = "Cataguases - MG"

mainElement.classList.add('flex', 'flex-col', 'gap-4')

h1Element.style.fontSize = '2.4rem'
pElement.style.fontSize = '1.8rem'
spanElement.style.fontSize = '1.4rem'

bodyElement.appendChild(mainElement)
mainElement.appendChild(h1Element)
mainElement.appendChild(pElement)
mainElement.appendChild(spanElement)

function digaOla() {
    alert('Olá, seja bem-vindo !')
}

function selecaoFiat() {
    alert('Olá, você selecionou o Fiat.')
}

function resetarCoresDeFundoPadrao(){
    cardFiat.classList.add('padrao')
    cardFerrari.classList.add('padrao')
    cardJeep.classList.add('padrao')
    cardRam.classList.add('padrao')
}

function alteraCardAtivo(botaoClicado){
    const cardClicado = document.getElementById(botaoClicado)
    cardClicado.classList.remove('padrao')
    cardClicado.classList.toggle('ativo')
    
    // if(estaAtivo){
    //     return cardClicado.classList.remove('ativo')
    // }
    
    // // console.log('cardClicado', cardClicado.classList['value'])
    // // console.log('cardClicado', cardClicado)
    // cardClicado.classList.add('ativo')

}

const cardFiat = document.getElementById("fiat")
const cardFerrari = document.getElementById("ferrari")
const cardJeep = document.getElementById("jeep")
const cardRam = document.getElementById("ram")

cardFiat.addEventListener('click', () => {
    resetarCoresDeFundoPadrao()
    alteraCardAtivo('fiat')
    // cardFiat.style.backgroundColor = 'red'
})

cardFerrari.addEventListener('click', () => {
    resetarCoresDeFundoPadrao()
    alteraCardAtivo('ferrari')
    // cardFerrari.style.backgroundColor = 'red'
})

cardJeep.addEventListener('click', () => {
    resetarCoresDeFundoPadrao()
    alteraCardAtivo('jeep')
    // cardJeep.style.backgroundColor = 'red'
})

cardRam.addEventListener('click', () => {
    resetarCoresDeFundoPadrao()
    alteraCardAtivo('ram')
    // cardRam.style.backgroundColor = 'red'
})

