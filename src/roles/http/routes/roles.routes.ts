import { Role } from '@roles/entities/roles'
import { Router } from 'express'

const rolesRoutes = Router()

const roles: Role[] = []
// Defina suas rotas relacionadas a "roles" aqui

rolesRoutes.post('/', (req, res) => {
  const { name } = req.body

  const role = new Role()

  Object.assign(role, {
    name,
    created_at: new Date(),
  })

  roles.push(role)
  return res.status(201).json(role)
})

export { rolesRoutes }
