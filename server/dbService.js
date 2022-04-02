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

/* connection.connect((err)=>{
    if(err){
        console.log(err.message)
    }
    console.log(connection)
}) */

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

    async getRamalByNumero(Numero) {
        try {
            Numero = parseInt(Numero, 10)
            console.log(Numero)
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM ramal, central, usuario, categoria, tiporamal, tipoaparelho " +
                                "WHERE Numero = ? AND Servidor_PR = usuario.pr " +
                                "AND Central_IP = central.ip " +
                                "AND Categoria_ID = categoria.id " +
                                "AND TipoRamal_ID = tiporamal.id " +
                                "AND TipoAparelho_id = tipoaparelho.id;"
                //const query = "SELECT * FROM ramal WHERE Numero = ?"
                connection.query(query, [Numero], (err, result) => {
                    if(err) reject(new Error(err.message))
                    resolve(result) 
                })
            })
            console.log(response)
            return response

        } catch (error) {
            console.log(error)
            return false
        }
        
    }

    async getDadosCadastro(){
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM central, usuario;"

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

    async cadastraRamal(Numero, Filtro, Servidor_PR, Central_IP, Categoria_ID, TipoRamal_ID, TipoAparelho_id){
    
        try{
            const cadastraNumero = await new Promise((resolve, reject) => {
                const query = "INSERT INTO ramal (Numero, Filtro, Servidor_PR, Central_IP, Categoria_ID, TipoRamal_ID, TipoAparelho_id) VALUES (?, ?, ?, ?, ?, ?, ?);"

                connection.query(query, [Numero, Filtro, Servidor_PR, Central_IP, Categoria_ID, TipoRamal_ID, TipoAparelho_id], (err, result) => {
                    if(err) reject(new Error(err.message))
                    resolve(result.cadastraNumero) 
                })
            })
            //console.log(cadastraNumero)
            return {
                Numero: Numero,
                Filtro: Filtro,
                Servidor_PR: Servidor_PR,
                Central_IP: Central_IP,
                Categoria_ID: Categoria_ID,
                TipoRamal_ID: TipoRamal_ID,
                TipoAparelho_id: TipoAparelho_id
            }
        }catch(error){
            console.log(error)
        }
    }

    async updateRamalByNumero(Numero, Filtro, Servidor_PR, Central_IP, Categoria_ID, TipoRamal_ID, TipoAparelho_id){
        try {
            Numero = parseInt(Numero, 10)
            console.log(Numero)
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE ramal SET Filtro = ?, Servidor_PR = ?, Central_IP = ?, Categoria_ID = ?, TipoRamal_ID = ?, TipoAparelho_id = ? " + 
                              "WHERE Numero = ?;"

                connection.query(query, [Filtro, Servidor_PR, Central_IP, Categoria_ID, TipoRamal_ID, TipoAparelho_id, Numero], (err, result) => {
                    if(err) reject(new Error(err.message))
                    resolve(result) 
                })
            })

            return response === 1 ? true : false

        } catch (error) {
            console.log(error)
            return false
        }
    }
}

module.exports = DbService