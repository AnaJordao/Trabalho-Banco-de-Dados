const params = location.search.substring(1).split("|")
var ipParam = params[0]

document.addEventListener('DOMContentLoaded', function(){
    
    //console.log(ip)

    fetch('http://localhost:5000/getCentralByIp/' + ipParam)
    .then(response => response.json())
    .then(data => loadCentral(data['data']))  
})

function loadCentral(data){
    //console.log(data)
    let ramais = ''
    let flag = false
    data.forEach(function({ip, Numero}) {
        if(flag == false && ip == ipParam){
            ramais += Numero
            flag  = true
        }
        else if(ip == ipParam){
            ramais += ', ' + Numero
        } 
    })
    ramais = ramais == 'null' ? 'Ainda não há ramais cadastrados' : ramais 
    
    for(const [index, ip] of data.entries()){    
        
        if(ip.ip == ipParam){
            data = data[index]
            break
        }
    }
    
    const centralInfo = document.querySelector('#formulario')

    let infoHtml = ''
    
    infoHtml += `<h2>${data.centralNome}</h2>`
    infoHtml += `<h4>IP: ${data.ip}</h4>`
    infoHtml += `<h4>Função: ${data.centralFuncao}</h4>`
    infoHtml += `<h4>Ramais cadastrados: ${ramais}</h4>`
    

    infoHtml += `<div class="div-btn-mostra">`
    infoHtml += `<a onclick="deleteCentralByIp(${data.ip})" href="centrais.html" class="btn btn-danger mt-3 btn-mostra">Deletar</a>`
    infoHtml += `<a href="edita_central.html?${data.ip}" class="btn btn-primary mt-3 btn-mostra">Editar</a>`
    infoHtml += `</div>`

    centralInfo.innerHTML += infoHtml
    
}