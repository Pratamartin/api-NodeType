import Clients from '../models/clients'
import database from './database'

const clientsRepository = {
    criar: (clients: Clients, callback: (id?: number) => void) => {
        const sql = 'INSERT INTO clients (nome, phone, email, address) VALUES (?, ?,?,?)'
        const params = [clients.nome, clients.phone,clients.email,clients.address]
        database.run(sql, params, function(_err) {
            callback(this?.lastID)
        })
    },
    lerTodos: (callback: (clients: Clients[]) => void) => {
    const sql = 'SELECT * FROM clients'
    const params: any[] = []
    database.all(sql, params, (_err, rows: Clients[]) => callback(rows));
    },
    ler: (id: number, callback: (clients?: Clients) => void) => {
        const sql = 'SELECT * FROM clients WHERE id = ?'
        const params = [id]
        database.get(sql, params, (_err, row: Clients) => callback(row))
    },
    atualizar: (id: number, clients: Clients, callback: (notFound: boolean) => void) => {
        const sql = 'UPDATE clients SET nome = ?, phone = ?,email =?,address =? WHERE id = ?'
        const params = [clients.nome, clients.phone,clients.email,clients.address, id]
        database.run(sql, params, function(_err) {
            callback(this.changes === 0)
        })
    },
    apagar: (id: number, callback: (notFound: boolean) => void) => {
        const sql = 'DELETE FROM clients WHERE id = ?'
        const params = [id]
        database.run(sql, params, function(_err) {
            callback(this.changes === 0)
        })
    },
}
export default clientsRepository