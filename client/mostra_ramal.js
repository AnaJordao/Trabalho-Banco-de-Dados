document.addEventListener('DOMContentLoaded', function(){
    const params = location.search.substring(1).split("|")
    let Numero = params[0]

    fetch('http://localhost:5000/getRamalByNumero/' + Numero, {
        method: 'GET',
        headers:{
            'Content-type' : 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))  
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
    data = data.split("|")
    
    const ramalInfo = document.querySelector('#formulario')

    let infoHtml = ''

    /* infoHtml += `<div id="formulario">`
    infoHtml += `<h2>${data.Numero}</h2>`
    infoHtml += `<h4>${data.TipoRamal_ID}</h4>`
    infoHtml += `<h4>${data.Central_IP}</h4>`
    infoHtml += `<h4>${data.Categoria_ID}</h4>`
    infoHtml += `<h4>${data.Servidor_PR}</h4>`
    infoHtml += `<h4>${data.Filtro}</h4>`
    infoHtml += `<h4>${data.TipoAparelho_id}</h4>` */

    /* infoHtml += `<div id="formulario">` */
    infoHtml += `<h2>${data[0]}</h2>`
    infoHtml += `<h4>${data[1]}</h4>`
    infoHtml += `<h4>${data[2]}</h4>`
    infoHtml += `<h4>${data[3]}</h4>`
    infoHtml += `<h4>${data[4]}</h4>`
    infoHtml += `<h4>${data[5]}</h4>`
    infoHtml += `<h4>${data[6]}</h4>`

    infoHtml += `<button class="btn btn-danger mt-3">Deletar</button>`
    infoHtml += `<button class="btn btn-primary mt-3">Editar</button>`
    /* infoHtml += `</div>` */

    ramalInfo.innerHTML += infoHtml
    
}