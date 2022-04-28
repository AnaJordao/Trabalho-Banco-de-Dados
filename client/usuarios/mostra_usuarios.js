document.addEventListener('DOMContentLoaded', function(){
    const params = location.search.substring(1).split("|")
    let Numero = params[0]
    //console.log(Numero)

    fetch('http://localhost:5000/getUsuarioByName/' + usuarioNome)
    .then(response => response.json())
    .then(data => loadRamal(data['data']))  
})



function mostraUsuario(usuarioNome){
    //console.log(usuarioNome)
    fetch('http://localhost:5000/getUsuarioByName/' + usuarioNome)
    .then(response => response.json())
    .then(data => loadRamal(data['data']))
}

function loadUsuario(data){
    data = data[0]
    //console.log(data)
    const usuarioInfo = document.querySelector('#formulario')

    let pr = data.pr == 0 ? "Não tem" : "Tem"
    let usuario = data.usuario == null ? "Não há usuário cadastrada" : data.usuario

    let infoHtml = ''
    
    infoHtml += `<h2>${data.pr}</h2>`
    infoHtml += `<h4>Tipo: ${data.usuarioNome} (${data.DataContratacao})</h4>`
    infoHtml += `<h4>Central: ${data.Observacao_ID} (${data.Lotacao_ID})</h4>`
    infoHtml += `<h4>Categoria: ${data.categoriaDescricao} (${data.Categoria_ID})</h4>`
    infoHtml += `<h4>Servidor: ${data.usuarioNome} (${data.Servidor_PR})</h4>`
    infoHtml += `<h4>Marca: ${data.Funcao_ID}</h4>`

    infoHtml += `<div class="div-btn-mostra">`
    infoHtml += `<a onclick="deleteRamalByNumero(${data.usuarioNome})" href="ramais.html" class="btn btn-danger mt-3 btn-mostra">Deletar</a>`
    infoHtml += `<a href="edita_ramal.html?${data.usuarioNome}" class="btn btn-primary mt-3 btn-mostra">Editar</a>`
    infoHtml += `</div>`

    
}

function deleteUsuarioByName(usuarioNome){   
    
    fetch('http://localhost:5000/deleteUsuario/' + usuarioNome, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.href('usuarios.html')
        }
    })
}