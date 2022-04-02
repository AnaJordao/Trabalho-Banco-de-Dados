document.addEventListener('DOMContentLoaded', function(){
    console.log("teste")
    fetch('http://localhost:5000/getAllRamais')
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
    //|${Filtro}|${Servidor_PR}|${Central_IP}|${Categoria_ID}|${TipoRamal_ID}|${TipoAparelho_id}'"
    data.forEach(function({Numero, Filtro, Servidor_PR, Central_IP, Categoria_ID, TipoRamal_ID, TipoAparelho_id}) {
        tableHtml += `<tr class="ramal-row" onclick="location.href='mostra_ramal.html?${Numero}'" data-id=${Numero}>`
        tableHtml += `<td>${Numero}</td>`
        tableHtml += `<td>${Filtro}</td>`
        tableHtml += `<td>${Servidor_PR}</td>`
        tableHtml += `<td>${Central_IP}</td>`
        tableHtml += `<td>${Categoria_ID}</td>`
        tableHtml += `<td>${TipoRamal_ID}</td>`
        tableHtml += `<td>${TipoAparelho_id}</td>`
        tableHtml += "</tr>"
    });

    table.innerHTML = tableHtml
}

