let nome = document.getElementById("nome");
let cargo = document.getElementById("cargo");
let erro = document.getElementById("error");
let titulo = document.getElementById('titulo')
let email = document.getElementById('email')
async function carregarUsuarios() {

 const response = await fetch("https://dentsys-backend.onrender.com/detalhes", {
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
