const texto = document.getElementById('servico');
const dataDoAgendamento = document.getElementById('data');
const form = document.getElementById('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const servico = texto.value.trim();
  const date = dataDoAgendamento.value.trim();

  if (!servico || !date) {
    alert("Preencha todos os campos antes de enviar!");
    return;
  }

  try {
    const response = await fetch('https://dentsys-backend.onrender.com/agendar', {
      method: "POST",
      credentials: "include",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date, servico }),
    });

    const dados = await response.json();
    console.log(dados);

    if (response.ok) {
      const toastEl = document.getElementById('toastSucesso');
      const toast = new bootstrap.Toast(toastEl);
      toast.show();

      // REDIRECIONA APÓS 2,5 SEGUNDOS
      setTimeout(() => {
        window.location.href = "../dashboard/page.html";
      }, 2500);
    } else {
      alert(dados.error || "Erro ao cadastrar");
    }
  } catch (erro) {
    console.error("Erro na requisição:", erro);
    alert("Ocorreu um erro ao conectar com o servidor.");
  }
});
