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
    const { pr } = request.body
    const { usuarioNome } = request.body
    const { DataContratacao } = request.body
    const { Observacao_ID } = request.body
    const { Lotacao_ID } = request.body
    const { Funcao_ID } = request.body
    const { TipoAparelho_id } = request.body
    const db = dbService.getDbServiceInstance()

    const result = db.cadastraRamal(pr, usuarioNome, DataContratacao, Observacao_ID, Lotacao_ID, Funcao_ID, TipoAparelho_id)

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
app.get('/getRamalBypr/:pr', (request, response) => {
    
    const { pr } = request.params
    
    
    const db = dbService.getDbServiceInstance()
    
    const result = db.getRamalBypr(pr)
    
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
    
    const { pr } = request.body
    const { usuarioNome } = request.body
    const { DataContratacao } = request.body
    const { Observacao_ID } = request.body
    const { Lotacao_ID } = request.body
    const { Funcao_ID } = request.body
    const { TipoAparelho_id } = request.body
    
    const db = dbService.getDbServiceInstance()

    const result = db.updateRamalBypr(pr, usuarioNome, DataContratacao, Observacao_ID, Lotacao_ID, Funcao_ID, TipoAparelho_id)
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err))
})


// DELETE RAMAL
app.delete('/deleteRamal/:pr', (request, response) => {
    const { pr } = request.params
    const db = dbService.getDbServiceInstance()

    const result = db.deleteRamalBypr(pr)
    
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

// READ SOMENTE UMA CENTRAL
app.get('/getCentralByIp/:ip', (request, response) => {
    
    const { ip } = request.params
    const db = dbService.getDbServiceInstance()
    
    const result = db.getCentralByIp(ip)
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err))

})

// CREATE CENTRAL
app.post('/insertCentral', (request, response) => {
    //console.log(request.body)
    const { ip } = request.body
    const { centralNome } = request.body
    const { centralFuncao } = request.body
    const db = dbService.getDbServiceInstance()

    const result = db.cadastraCentral(ip, centralNome, centralFuncao)

    result
    .then(data => response.json({ data : data }))
    .catch(err => console.log(err))
})

// UPDATE CENTRAL
app.patch('/updateCentral', (request, response) => {
    
    const { ip } = request.body
    const { centralNome } = request.body
    const { centralFuncao } = request.body
    
    const db = dbService.getDbServiceInstance()

    const result = db.updateCentralByIp(ip, centralNome, centralFuncao)
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err))
})

// DELETE CENTRAL
app.delete('/deleteCentral/:ip', (request, response) => {
    const { ip } = request.params
    const db = dbService.getDbServiceInstance()

    const result = db.deleteCentralByIp(ip)
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err))
})




// CREATE USUARIOS

app.post('/insertUsuarios', (request, response) => {
    //console.log(request.body)
    const { pr } = request.body
    const { usuarioNome } = request.body
    const { DataContratacao } = request.body
    const { Observacao_ID } = request.body
    const { Lotacao_ID } = request.body
    const { Funcao_ID } = request.body
    const db = dbService.getDbServiceInstance()

    const result = db.cadastraUsuario(pr, usuarioNome, DataContratacao, Observacao_ID, Lotacao_ID, Funcao_ID)

    result
    .then(data => response.json({ data : data }))
    .catch(err => console.log(err))
})

// READ TODOS USUÁRIOS
app.get('/getAllUsuarios', (request, response) => {
    
    const db = dbService.getDbServiceInstance()
    
    const result = db.getAllUsuarios()
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err))
})

// READ SOMENTE UM USUARIO
app.get('/getUsuarioByPr/:pr', (request, response) => {
    
    const { pr } = request.params
    const db = dbService.getDbServiceInstance()
    
    const result = db.getCentralByPr(pr)
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err))

})

// UPDATE


// DELETE


// npx nodemon app.js --> npm run dev
app.listen(process.env.PORT, () => console.log('App is running! On PORT: ', process.env.PORT))