const form = document.getElementById("formLogin");


form.addEventListener("submit", async (e) => {
 
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("senha").value;
  let mensagem = document.getElementById('menssagem')
  

  try {
    const response = await fetch("http://localhost:3000/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials:"include",
      body: JSON.stringify({ email, password }),
    
    });
  
    const dados = await response.json();

    console.log(dados)

  

    if (response.ok) {
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
const togglePassword = document.getElementById("togglePassword");
      const passwordInput = document.getElementById("senha");

      togglePassword.addEventListener("click", () => {
        const type =
          passwordInput.getAttribute("type") === "password"
            ? "text"
            : "password";
        passwordInput.setAttribute("type", type);

        togglePassword.innerHTML =
          type === "password"
            ? '<i class="bi bi-eye"></i>'
            : '<i class="bi bi-eye-slash"></i>';
      });
