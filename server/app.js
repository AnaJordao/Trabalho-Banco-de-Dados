const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const dbService = require('./dbService')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

// CREATE


// READ


// UPDATE


// DELETE


// npx nodemon app.js --> npm run dev
app.listen(process.env.PORT, () => console.log('App is running!'))