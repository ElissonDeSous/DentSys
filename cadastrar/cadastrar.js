const Nome = document.getElementById("nome");
const Email = document.getElementById("email");
const Senha = document.getElementById("password");


const form = document.getElementById("form");
const menssagem = document.getElementById("menssagem");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = String(Nome.value);
  const email = String(Email.value);
  const senha = String(Senha.value);

  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email, senha }),
  });
  console.log(response)

  const usuario = await response.json();

  if (response.ok) {
    menssagem.innerHTML = usuario.mensagem;
    menssagem.style.color = 'green'
  }
    else {
    menssagem.innerHTML = usuario.mensagem;
    menssagem.style.color = 'red'
   
  }
});
