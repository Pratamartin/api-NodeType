import express from 'express'
import Clients from '../models/clients'
const clientsRouter = express.Router()

clientsRouter.post('/clients', (req, res) => {
    const clients: Clients = req.body
    //TODO: Criar e salvar um novo item
    const id = 123
    res.status(201).location(`/clients/${id}`).send()
})
clientsRouter.get('/clients', (req, res) => {
    const clients: Clients[] = [
        {
            id: 1,
            nome: 'Martinho',
            phone: 92995028355,
            email: 'martinhoprata95@gmail.com',
            address: 'rua manila, 19'
        },
        {
            id: 2,
            nome: 'Prata',
            phone: 92995028366,
            email: 'prata95martin@gmail.com',
            address: 'rua manila, 20'
        }
    ]
    res.json(clients)
})
clientsRouter.get('/clients/:id', (req, res) => {
    const id: number = +req.params.id
    const clients: Clients = {
        id: id,
        nome: `Client ${id}`,
        phone: id,
        email: `email ${id}`,
        address: `adress ${id}`
    }
    res.json(clients)
})
clientsRouter.put('/clients/:id', (req, res) => {
    const id: number = +req.params.id
    res.status(204).send()
})
clientsRouter.delete('/clients/:id', (req, res) => {
    const id: number = +req.params.id
    res.status(204).send()
})


export default clientsRouter