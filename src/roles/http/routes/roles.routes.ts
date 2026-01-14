import { RolesRepository } from '@roles/repositories/rolesRepository'
import { createRolesController } from '@roles/useCases/createRole'
import { Router } from 'express'

const rolesRoutes = Router()
const rolesRepository = new RolesRepository()

// Defina suas rotas relacionadas a "roles" aqui

rolesRoutes.post('/', (req, res) => {
  return createRolesController.handle(req, res)
})

rolesRoutes.get('/', (req, res) => {
  const roles = rolesRepository.findAll()
  return res.json(roles)
})

export { rolesRoutes }
