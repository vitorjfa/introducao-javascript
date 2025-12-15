const tituloDaHome = document.getElementById("title-home");

tituloDaHome.innerHTML = "Vitor";
tituloDaHome.style.color = "#c2c2c2";
tituloDaHome.setAttribute('style", "color: #101010; font-size: 48px');

const buttonHome = document.getElementById("btn-home");

buttonHome.innerHTML = "Clique aqui";
buttonHome.addEventListener("Click", () => {
  tituloDaHome.innerText = "seu futuro começa aqui";
});

const secondTitleID = document.getElementById("second-title");
const secondTitleQuery = document.querySelector("#second-title");
console.log("secondTitleQuery", secondTitleQuery);
console.log("secondTitleID", secondTitleID);

const valor = document.getElementsByClassName("");
