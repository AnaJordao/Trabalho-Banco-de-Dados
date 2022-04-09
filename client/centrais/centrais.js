document.addEventListener('DOMContentLoaded', function(){
    
    fetch('http://localhost:5000/getAllCentrais')
    .then(response => response.json())
    .then(data => {loadCards(data['data'])})  
    .catch(e => console.log(e))
})

function loadCards(data){
    const areaCards = document.querySelector('#centrais')

    //console.log(data) 
    
    let cardHtml = ''
    
    data.forEach(function({ip, centralNome, centralFuncao}) {
        cardHtml += `<div class="col-4">`
        cardHtml += `<div class="card mt-3" style="width: 18rem; border-radius: 20px;">`
        cardHtml += `<div class="card-body">`
        cardHtml += `<h4 class="card-title">${centralNome}</h4>`
        cardHtml += `<h6 class="card-subtitle mb-2 text-muted">IP: ${ip}</h6>`
        cardHtml += `<p class="card-text text-muted">Função: ${centralFuncao}</p>`
        cardHtml += "</div>"
        cardHtml += "</div>"
        cardHtml += "</div>"
    });

    areaCards.innerHTML = cardHtml
}