document.addEventListener('DOMContentLoaded', function(){
    fetch('http://localhost:5000/getDadosCadastro')
    .then(response => response.json())
    .then(data => loadForm(data['data']))  
})

function loadForm(data){
    const dataListCentral = document.querySelector('#form-central')
    const dataListAparelho = document.querySelector('#usuarios')
    
    let dtListCentralHtml = ""
    let dtListAparelhoHtml = ""
    
    let ipList = []
    let prList = []

    data.forEach(function({ip, pr}) {
        
        if(!(ipList.includes(ip))){
            ipList.push(ip)
            dtListCentralHtml += `<option value="${ip}">`
        }
        if(!(prList.includes(pr))){
            prList.push(pr)
            dtListAparelhoHtml += `<option value="${pr}">`
        }
        
    })

    dataListCentral.innerHTML = dtListCentralHtml
    dataListAparelho.innerHTML = dtListAparelhoHtml

}

const cadastroBtn = document.querySelector('#submit')
cadastroBtn.onclick = function(){
    
    const numeroInput = document.querySelector('#numero')
    const tipoRamalInput = document.querySelector('#tipo')
    const centralInput = document.querySelector('#central-input')
    let filtroInput = null
    if(document.getElementById('possui').checked){
        filtroInput = document.getElementById('possui')
    } else {
        filtroInput = document.getElementById('nao-possui')
    }
    const categoriaInput = document.querySelector('#categoria')
    const usuarioInput = document.querySelector('#usuario-input')
    const tipoAparelholInput = document.querySelector('#tipo-aparelho')
    
    const pr = prInput.value
    const usuarioNome = usuarioNomeInput.value
    const DataContratacao = DataContratacaoInput.value
    const Observacao_ID = ObservacaoIdInput.value
    const Lotacao_ID = LotacaoIdInput.value
    const Funcao_ID = FuncaoIdInput.value
    
    
    fetch('http://localhost:5000/insertUsuario', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ PR : pr,  Usuario : usuarioNome, Contratação : DataContratacao, Observacao : Observacao_ID, Lotacao_ID: Lotacao_ID, Funcao_ID: Funcao_ID})
    })
    .then(response => response.json())
  

infoHtml += `<h2>${data.pr}</h2>`
infoHtml += `<h4>Tipo: ${data.usuarioNome} (${data.DataContratacao})</h4>`
infoHtml += `<h4>Central: ${data.Observacao_ID} (${data.Lotacao_ID})</h4>`
infoHtml += `<h4>Categoria: ${data.categoriaDescricao} (${data.Categoria_ID})</h4>`
infoHtml += `<h4>Servidor: ${data.usuarioNome} (${data.Servidor_PR})</h4>`
infoHtml += `<h4>Marca: ${data.Funcao_ID}</h4>`

//infoHtml += `<div class="div-btn-mostra">`
//infoHtml += `<a onclick="deleteRamalByNumero(${data.usuarioNome})" href="ramais.html" class="btn btn-danger mt-3 btn-mostra">Deletar</a>`
//infoHtml += `<a href="edita_ramal.html?${data.usuarioNome}" class="btn btn-primary mt-3 btn-mostra">Editar</a>`
//infoHtml += `</div>