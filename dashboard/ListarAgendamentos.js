
async function  consultasListar() {
    const consultas = document.getElementById('consultas')
    consultas.innerHTML = ''
    const response = await fetch('https://dentsys-backend.onrender.com/agendar', {
        method:'GET',
        credentials:'include'
    })

    

    const dados = await response.json()
    console.log(dados)
    //const listaDados = dados[{}]
   dados.dados.forEach(item => {
         const tr = document.createElement('tr')

         consultas.style.borderBottom = 'solid black 1px'

         tr.innerHTML  = `<td>${new Date(item.data).toLocaleString("pt-BR")}</td>
                        <td>${item.servico}</td>
                         <td>${item.paciente.name}</td>  
                        <td>${item.paciente.email}</td> 
                        
                        ` 
                          
         
    
         consultas.appendChild(tr);
    });
    

    
}

consultasListar()