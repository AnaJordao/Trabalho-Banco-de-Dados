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
    
    const numero = numeroInput.value
    const tipoRamal = tipoRamalInput.value
    const central = centralInput.value
    const filtro = filtroInput.value
    const categoria = categoriaInput.value
    const usuario = usuarioInput.value
    const tipoAparelho = tipoAparelholInput.value
    
    fetch('http://localhost:5000/insert', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ Numero : numero,  Filtro : filtro, Servidor_PR : usuario, Central_IP : central, Categoria_ID: categoria, TipoRamal_ID: tipoRamal, TipoAparelho_id: tipoAparelho})
    })
    .then(response => response.json())
    //.then(data => insertRowIntoTable(data['data']))
    //.then(window.location.href = "ramais.html")
    
    window.location.href = "ramais.html"
}



// ir pra pag de ramais
