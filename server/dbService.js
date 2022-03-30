const mysql = require('mysql2')
const dotenv = require('dotenv')
let instance = null
dotenv.config()

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USUARIO,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,
})

connection.connect((err)=>{
    if(err){
        console.log(err.message)
    }
    console.log(connection)
})

// classe usada para acessar os dados do banco de dados
class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService()
    }

    async getAllRamais(){
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM ramal;"

                connection.query(query, (err, results) => {
                    if(err) reject(new Error(err.message))
                    resolve(results)
                })
            })
            //console.log(response)
            return response

        } catch(error) {
            console.log(error)
        }
    }
}

module.exports = DbService