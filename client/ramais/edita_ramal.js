document.addEventListener('DOMContentLoaded', function(){
    const params = location.search.substring(1).split("|")
    let Numero = params[0]
    //console.log(Numero)

    fetch('http://localhost:5000/getDadosCadastro')
    .then(response => response.json())
    .then(data => loadForm(data['data'])) 
    
    fetch('http://localhost:5000/getRamalByNumero/' + Numero)
    .then(response => response.json())
    .then(data => loadEditForm(data['data'])) 
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

function loadEditForm(data) {
    data = data[0]

    const numeroInput = document.querySelector('#numero')
    const tipoRamalInput = document.querySelector('#tipo')
    const centralInput = document.querySelector('#central-input')
    const filtroInput0 = document.getElementById('nao-possui')
    const filtroInput1 = document.getElementById('possui')
    const categoriaInput = document.querySelector('#categoria')
    const usuarioInput = document.querySelector('#usuario-input')
    const tipoAparelholInput = document.querySelector('#tipo-aparelho')

    numeroInput.value = data.Numero
    tipoRamalInput.value = data.TipoRamal_ID
    centralInput.value = data.Central_IP
    if(data.Filtro == 0) {
        filtroInput0.checked = true
        filtroInput1.checked = false
    } else {
        filtroInput0.checked = false
        filtroInput1.checked = true
    }
    categoriaInput.value = data.Categoria_ID
    usuarioInput.value = data.Servidor_PR
    tipoAparelholInput.value = data.TipoAparelho_id
}

const updateBtn = document.querySelector('#submit')
updateBtn.onclick = function(){
    
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
    
    fetch('http://localhost:5000/updateRamal', {
        method: 'PATCH',
        headers:{
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({ Numero : numero,  Filtro : filtro, Servidor_PR : usuario, Central_IP : central, Categoria_ID: categoria, TipoRamal_ID: tipoRamal, TipoAparelho_id: tipoAparelho})
    })
    .then(response => response.json())
    
}