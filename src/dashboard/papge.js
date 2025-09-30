let nome = document.getElementById("nome");
let cargo = document.getElementById("cargo");
let erro = document.getElementById("error");
async function carregarUsuarios() {
    const token = localStorage.getItem('token')

    if(!token){
        console.log('Token nao existe')
    }else{
        console.log(token)
    }
 const response = await fetch("http://localhost:8080/detalhes", {
  headers: {
    'Authorization':  `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
 console.log(token)

  if (response.ok) {
    
    const dados = await response.json();
    nome.innerHTML = `Seja bem vindo ${dados.name}`;
    cargo.innerHTML = dados.role
  }else{
    erro.innerHTML = "Não Autorizado Bobao"
  }
}
carregarUsuarios();
