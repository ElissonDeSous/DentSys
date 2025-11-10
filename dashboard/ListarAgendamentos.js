async function consultasListar() {
  const tbody = document.getElementById('consultas');
  const totalItens = document.getElementById('totalItens');
  tbody.innerHTML = '';

  try {
    const response = await fetch('https://dentsys-backend.onrender.com/agendar', {
      method: 'GET',
      credentials: 'include'
    });

    const dados = await response.json();
    console.log(dados);

    if (!dados.dados || !Array.isArray(dados.dados)) {
      console.warn('Nenhum dado retornado');
      totalItens.textContent = 0;
      return;
    }

    dados.dados.forEach(item => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${new Date(item.data).toLocaleString("pt-BR")}</td>
        <td>${item.servico}</td>
        <td>${item.paciente.name}</td>
        <td>${item.paciente.email}</td>
      `;
      tbody.appendChild(tr);
    });

    totalItens.textContent = dados.dados.length;

    //CHAMA A FUNÇÃO DE INICIALIZAÇÃO APÓS CARREGAR OS DADOS
    inicializarDataTable();

  } catch (erro) {
    console.error('Erro ao listar consultas:', erro);
    totalItens.textContent = 0;
  }
}

document.addEventListener('DOMContentLoaded', consultasListar);
