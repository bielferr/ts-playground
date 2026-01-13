import { Router } from 'express'
import { v4 as uuidv4 } from 'uuid'

const rolesRoutes = Router()

const roles = []
// Defina suas rotas relacionadas a "roles" aqui

rolesRoutes.post('/', (req, res) => {
  const { name } = req.body
  const role = {
    id: uuidv4(),
    name,
    created_at: new Date(),
  }
  roles.push(role)
  return res.status(201).json(role)
})

export { rolesRoutes }
