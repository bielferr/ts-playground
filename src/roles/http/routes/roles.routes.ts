import { createRolesController } from '@roles/useCases/createRole'
import { showRoleController } from '@roles/useCases/createRole/listRoles/showRole'
import { updateRoleController } from '@roles/useCases/createRole/listRoles/updateRole'
import { listRoleController } from '@roles/useCases/listRoles'
import { Router } from 'express'

const rolesRoutes = Router()

// Defina suas rotas relacionadas a "roles" aqui

rolesRoutes.post('/', (req, res) => {
  return createRolesController.handle(req, res)
})

rolesRoutes.get('/', (req, res) => {
  return listRoleController.handle(req, res)
})
rolesRoutes.get('/:id', (req, res) => {
  return showRoleController.handle(req, res)
})
rolesRoutes.put('/:id', (req, res) => {
  return updateRoleController.handle(req, res)
})

export { rolesRoutes }
