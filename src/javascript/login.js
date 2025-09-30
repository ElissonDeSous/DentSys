const form = document.getElementById("formLogin");


form.addEventListener("submit", async (e) => {
 
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("senha").value;
  let mensagem = document.getElementById('menssagem')

  try {
    const response = await fetch("http://localhost:8080/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const dados = await response.json();

  

    if (response.ok) {
      localStorage.setItem("token", dados.token);
      mensagem.style.color = 'green'
      mensagem.innerHTML = dados.mensagem
      window.location.href = '/dashboard/page.html'
    } else {
       mensagem.style.color = "red"
       mensagem.innerHTML = dados.mensagem
    }
  } catch (error) {
    console.log(error);
  }
});
