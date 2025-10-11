let nome = document.getElementById("nome");
let cargo = document.getElementById("cargo");
let erro = document.getElementById("error");
let titulo = document.getElementById('titulo')
let email = document.getElementById('email')
async function carregarUsuarios() {

 const response = await fetch("http://127.0.0.1:3000/detalhes", {
     method:"GET",
     credentials:"include"
});
const dados = await response.json();
  if (response.ok) {
    
    
    console.log(dados)
    nome.innerHTML = `Seja bem vindo ${dados.name}`;
    email.innerHTML = dados.email
    
  }else{
    titulo.style.display = "none"
    erro.innerHTML = dados.error
    console.log(dados)
  }
}
carregarUsuarios();
