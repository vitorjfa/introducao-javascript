const formLogin = document.getElementById("form-login");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

function validaInformacoes(username, password) {
  if (username.length > 6 && password.length > 8)
    return alert("Validado com sucesso !");

  return alert("Ocorreram erros em sua validação !");
}

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  validaInformacoes(usernameInput.value, passwordInput.value);

  // Validações do formulário
  // 1. Username > 6 caracteres
  // 2. Password > 8 caracteres
  // -> capturar as informações pelos IDs dos inputs
  // -> realizar as validações
});
