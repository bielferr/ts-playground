import { createRolesController } from '@roles/useCases/createRole'
import { listRoleController } from '@roles/useCases/createRole/listRoles'
import { Router } from 'express'

const rolesRoutes = Router()

// Defina suas rotas relacionadas a "roles" aqui

rolesRoutes.post('/', (req, res) => {
  return createRolesController.handle(req, res)
})

rolesRoutes.get('/', (req, res) => {
  return listRoleController.handle(req, res)
})

export { rolesRoutes }
