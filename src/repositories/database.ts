import sqlite3 from 'sqlite3'
const DBSOURCE = 'db.sqlite'

const SQL_CLIENTS_CREATE = `
    CREATE TABLE clients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        phone INTEGER,
        email TEXT,
        address TEXT
    )`
const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Base de dados conectada com sucesso.')
        database.run(SQL_CLIENTS_CREATE, (err) => {
            if (err) {
                // Possivelmente a tabela já foi criada
            } else {
                console.log('Tabela clients criada com sucesso.')
            }
        })
    }
})
export default database