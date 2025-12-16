//  Validações
//     1. Nome deverá ser nome e sobrenome
//     2. Email deverá conter @ e .com
//     3. Sexo deverá ser "M" || "F" || "Masculino" || "MASCULINO" || "masculino" || "Feminino" || "FEMININO" || "feminino"
//     4. Data nascimento Formato pt-br "DD/MM/AAAA"

const formCadastro = document.querySelector("#form-cadastro");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const sexo = document.querySelector("#sexo");
const dataNascimento = document.querySelector("#data-nascimento");

formCadastro.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(
    "infos",
    nome.value,
    email.value,
    sexo.value,
    dataNascimento.value
  );

  const possuiNomeESobrenome =
    nome.value
      .trim()
      .split(" ")
      .filter((item) => item.length > 0).length > 1;
  console.log("possuiNomeESobrenome", possuiNomeESobrenome);

  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
  console.log("regex", emailRegex.test(email.value));
});
