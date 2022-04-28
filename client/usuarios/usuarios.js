document.addEventListener('DOMContentLoaded', function(){
    
    fetch('http://localhost:5000/getAllUsuarios')
    .then(response => response.json())
    .then(data => {loadHTMLTable(data['data'])})  
    .catch(e => console.log(e))
})

function loadHTMLTable(data){
    const table = document.querySelector('table tbody')

    //console.log(data) 

    if(data.length === 0){
        table.innerHTML = "<tr><td class='no-data' colspan='8'>No Data</td></tr>"
        return
    }
    
    let tableHtml = ""
    
    data.forEach(function({pr, usuarioNome, DataContratacao, Observacao_ID, Lotacao_ID, Funcao_ID}) {
        tableHtml += `<tr class="ramal-row" onclick="location.href='mostra_usuarios.html?${pr}'" data-id=${pr}>`
        tableHtml += `<td>${pr}</td>`
        tableHtml += `<td>${usuarioNome}</td>`
        tableHtml += `<td>${DataContratacao}</td>`
        tableHtml += `<td>${Observacao_ID}</td>`
        tableHtml += `<td>${Lotacao_ID}</td>`
        tableHtml += `<td>${Funcao_ID}</td>`
        tableHtml += "</tr>"
    });

    table.innerHTML = tableHtml
}

