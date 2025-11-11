const texto = document.getElementById('servico')
const dataDoAgendamento = document.getElementById('data')
const form = document.getElementById('form')

form.addEventListener('submit', async (e)=>{
    const servico = texto.value 
    const date = dataDoAgendamento.value
    
    e.preventDefault()
      const response = await fetch('https://dentsys-backend.onrender.com/agendar', {
        method: "POST",
        credentials:"include",
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({date,servico}),
        
      })

        
      const dados = await response.json()

      console.log(dados)

      if(response.ok){
             alert(dados.mensagem)
      }else{
        alert(dados.error)
      }

      
})