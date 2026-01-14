import { RolesRepository } from '@roles/repositories/rolesRepository'
import { Router } from 'express'

const rolesRoutes = Router()
const rolesRepository = new RolesRepository()

// Defina suas rotas relacionadas a "roles" aqui

rolesRoutes.post('/', (req, res) => {
  const { name } = req.body
  const roleAlreadyExists = rolesRepository.findByName(name)
  if (roleAlreadyExists) {
    return res.status(400).json({ message: 'Role already exists.' })
  }
  const role = rolesRepository.create({ name })
  return res.status(201).json(role)
})
rolesRoutes.get('/', (req, res) => {
  const roles = rolesRepository.findAll()
  return res.json(roles)
})

export { rolesRoutes }
