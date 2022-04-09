const cadastroBtn = document.querySelector('#submit')
cadastroBtn.onclick = function(){
    
    const ipInput = document.querySelector('#ip').value
    const nomeInput = document.querySelector('#nome').value
    const funcaoInput = document.querySelector('#funcao-central').value
    
    fetch('http://localhost:5000/insertCentral', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ ip : ipInput,  centralNome : nomeInput, centralFuncao : funcaoInput})
    })
    .then(response => response.json())
    //.then(data => insertRowIntoTable(data['data']))
    //.then(window.location.href = "ramais.html")
    
    //window.location.href = "ramais.html"
}