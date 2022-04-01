document.addEventListener('DOMContentLoaded', function(){
    const params = location.search.substring(1).split("|")
    let Numero = params[0]
    console.log(Numero)

    fetch('http://localhost:5000/getRamalByNumero/' + Numero)
    .then(response => response.json())
    .then(data => loadRamal(data['data']))  
})

/* const ramalRow = document.querySelectorAll('.ramal-row')
console.log(ramalRow)
ramalRow.onclick = function (){
    const ramalRowNumero = document.querySelector('.ramal-row').value
    
    fetch('http://localhost:5000/getRamalByNumero/' + ramalRowNumero)
    .then(response => response.json())
    .then(data => console.log(ramalRowNumero))
} */

function mostraRamal(Numero){
    console.log(Numero)
    fetch('http://localhost:5000/getRamalByNumero/' + Numero)
    .then(response => response.json())
    .then(data => loadRamal(data['data']))
}

function loadRamal(data){
    data = data[0]
    //console.log(data)
    const ramalInfo = document.querySelector('#formulario')

    let filtro = data.Filtro == 0 ? "Não tem" : "Tem"
    let imagem = data.FotoAparelho == null ? "Não há foto cadastrada" : data.FotoAparelho

    let infoHtml = ''
    
    infoHtml += `<h2>${data.Numero}</h2>`
    infoHtml += `<h4>Tipo: ${data.ramalDescricao} (${data.TipoRamal_ID})</h4>`
    infoHtml += `<h4>Central: ${data.centralNome} (${data.Central_IP})</h4>`
    infoHtml += `<h4>Categoria: ${data.categoriaDescricao} (${data.Categoria_ID})</h4>`
    infoHtml += `<h4>Servidor: ${data.usuarioNome} (${data.Servidor_PR})</h4>`
    infoHtml += `<h4>Filtro: ${filtro}</h4>`
    infoHtml += `<h4>Marca: ${data.Marca}</h4>`
    infoHtml += `<h4>Descrição do Aparelho: ${data.tipoAparelhoDescricao} (${data.TipoAparelho_id})</h4>`
    infoHtml += `<h4>Imagem: ${imagem}</h4>`

    infoHtml += `<div class="div-btn-mostra">`
    infoHtml += `<button class="btn btn-danger mt-3 btn-mostra">Deletar</button>`
    infoHtml += `<button class="btn btn-primary mt-3 btn-mostra">Editar</button>`
    infoHtml += `</div>`

    ramalInfo.innerHTML += infoHtml
    
}