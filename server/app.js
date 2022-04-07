const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const dbService = require('./dbService')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

// CREATE RAMAL
app.post('/insertRamal', (request, response) => {
    //console.log(request.body)
    const { Numero } = request.body
    const { Filtro } = request.body
    const { Servidor_PR } = request.body
    const { Central_IP } = request.body
    const { Categoria_ID } = request.body
    const { TipoRamal_ID } = request.body
    const { TipoAparelho_id } = request.body
    const db = dbService.getDbServiceInstance()

    const result = db.cadastraRamal(Numero, Filtro, Servidor_PR, Central_IP, Categoria_ID, TipoRamal_ID, TipoAparelho_id)

    result
    .then(data => response.json({ data : data }))
    .catch(err => console.log(err))
})

// READ TODOS OS RAMAIS
app.get('/getAllRamais', (request, response) => {
    
    const db = dbService.getDbServiceInstance()
    
    const result = db.getAllRamais()
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err))
})

// READ SOMENTE UM RAMAL
app.get('/getRamalByNumero/:Numero', (request, response) => {
    
    const { Numero } = request.params
    
    
    const db = dbService.getDbServiceInstance()
    
    const result = db.getRamalByNumero(Numero)
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err))

})

// GET DADOS PRO CADASTRO
app.get('/getDadosCadastro', (request, response) => {
    const db = dbService.getDbServiceInstance()
    
    const result = db.getDadosCadastro()
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err))
})

// UPDATE RAMAL
app.patch('/updateRamal', (request, response) => {
    
    const { Numero } = request.body
    const { Filtro } = request.body
    const { Servidor_PR } = request.body
    const { Central_IP } = request.body
    const { Categoria_ID } = request.body
    const { TipoRamal_ID } = request.body
    const { TipoAparelho_id } = request.body
    
    const db = dbService.getDbServiceInstance()

    const result = db.updateRamalByNumero(Numero, Filtro, Servidor_PR, Central_IP, Categoria_ID, TipoRamal_ID, TipoAparelho_id)
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err))
})


// DELETE RAMAL
app.delete('/deleteRamal/:Numero', (request, response) => {
    const { Numero } = request.params
    const db = dbService.getDbServiceInstance()

    const result = db.deleteRamalByNumero(Numero)
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err))
})

// READ TODAS AS CENTRAIS
app.get('/getAllCentrais', (request, response) => {
    
    const db = dbService.getDbServiceInstance()
    
    const result = db.getAllCentrais()
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err))
})




// CREATE


// READ


// UPDATE


// DELETE


// npx nodemon app.js --> npm run dev
app.listen(process.env.PORT, () => console.log('App is running! On PORT: ', process.env.PORT))