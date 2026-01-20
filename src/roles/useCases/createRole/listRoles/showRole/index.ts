import { RolesRepository } from '@roles/repositories/rolesRepository'
import { ShowRoleController } from './showRoleController'
import { showRoleUseCase } from './showRoleUseCase'

const rolesRepository = RolesRepository.getInstance()
const showRoleCase = new showRoleUseCase(rolesRepository)

export const showRoleController = new ShowRoleController(showRoleCase)
