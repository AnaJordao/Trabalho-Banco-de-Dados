const params = location.search.substring(1).split("|")
var ipParam = params[0]
document.addEventListener('DOMContentLoaded', function(){
    
    //console.log(Numero)
    
    fetch('http://localhost:5000/getCentralByIp/' + ip)
    .then(response => response.json())
    .then(data => loadEditForm(data['data'])) 
})

function loadEditForm(data) {
    //console.log(data)
    for(const [index, ip] of data.entries()){    
        
        if(ip.ip == ipParam){
            data = data[index]
            break
        }
    }

    const ipInput = document.querySelector('#ip')
    const nomeInput = document.querySelector('#nome')
    const funcaoInput = document.querySelector('#funcao-central')

    ipInput.value = data.ip
    nomeInput.value = data.centralNome
    funcaoInput.value = data.centralFuncao
}

const updateBtn = document.querySelector('#submit')
updateBtn.onclick = function(){
    
    const ipInput = document.querySelector('#ip').value
    const nomeInput = document.querySelector('#nome').value
    const funcaoInput = document.querySelector('#funcao-central').value  
    
    fetch('http://localhost:5000/updateCentral', {
        method: 'PATCH',
        headers:{
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({ ip : ipInput,  centralNome : nomeInput, centralFuncao : funcaoInput})
    })
    .then(response => response.json())
    
}