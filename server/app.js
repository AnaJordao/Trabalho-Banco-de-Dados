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
    const { Numero } = request.body
    console.log(Numero)
    
    const db = dbService.getDbServiceInstance()
    
    const result = db.getRamalByNumero(Numero)
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err))
})

// UPDATE RAMAL


// DELETE RAMAL






// CREATE


// READ


// UPDATE


// DELETE


// npx nodemon app.js --> npm run dev
app.listen(process.env.PORT, () => console.log('App is running!'))