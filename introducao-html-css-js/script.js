const tituloDaHome = document.getElementById("title-home")

tituloDaHome.innerHTML = "Daniel"
tituloDaHome.style.color = "#c2c2c2"
tituloDaHome.setAttribute("style", "color: #101010; font-size: 80px")

const idHome = document.getElementById("home")
// console.log('innerText', idHome.innerText)
// console.log('innerHTML', idHome.innerHTML)

const buttonHome = document.getElementById("btn-home")

// const classBg2 = document.querySelector(".bg2")
const classBg2 = document.getElementsByClassName("bg2")
// console.log('elemento', classBg2)

buttonHome.innerHTML = "Clique aqui"

const temAClasseCard = document.querySelectorAll('.card')
console.log('classe card', temAClasseCard)

buttonHome.addEventListener('click', () => {
    tituloDaHome.innerHTML = "Daniel Ventura"
    temAClasseCard[2].setAttribute('style', 'background-color: red')
    // classBg2.classList.toggle('red')
    // for (let index = 0; index < temAClasseCard.length; index++) {
    //     temAClasseCard[index].classList.toggle('red') 
    // }

   

})

// Ao clicar no botão 
// O h1 da página deverá receber o seguinte texto: Seu Futuro começa hoje!!!
const secondTitleId = document.getElementById("second-title")
const secondTitleQuery = document.querySelector("#second-title")
// console.log('bg2', classBg2)
// console.log('secondTitleId', secondTitleId)

// mude a cor do background-color de bg2 para red ao clicar no botão

