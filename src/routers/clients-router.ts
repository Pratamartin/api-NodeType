import express from 'express'
import Clients from '../models/clients'
import clientsRepository from '../repositories/clients-repository'
const clientsRouter = express.Router()

clientsRouter.post('/clients', (req, res) => {
    const clients: Clients = req.body
    clientsRepository.criar(clients, (id) => {
        if (id) {
            res.status(201).location(`/clients/${id}`).send()
        } else {
            res.status(400).send()
        }
    })
})
clientsRouter.get('/clients', (req, res) => {
    clientsRepository.lerTodos((clients) => res.json(clients))
})
clientsRouter.get('/clients/:id', (req, res) => {
    const id: number = +req.params.id
    clientsRepository.ler(id, (clients) => {
        if (clients) {
            res.json(clients)
        } else {
            res.status(404).send()
        }
    })
})

clientsRouter.put('/clients/:id', (req, res) => {
    const id: number = +req.params.id
    clientsRepository.atualizar(id, req.body, (notFound) => {
        if (notFound) {
            res.status(404).send()
        } else {
            res.status(204).send()
        }
    })
})
clientsRouter.delete('/clients/:id', (req, res) => {
    const id: number = +req.params.id
    res.status(204).send()
})
clientsRouter.delete('/clients/:id', (req, res) => {
    const id: number = +req.params.id
    clientsRepository.apagar(id, (notFound) => {
        if (notFound) {
            res.status(404).send()
        } else {
            res.status(204).send()
        }
    })
})

export default clientsRouter