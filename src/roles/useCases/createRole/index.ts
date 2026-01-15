import { RolesRepository } from '@roles/repositories/rolesRepository'
import { CreateRoleUseCase } from './createRoleUseCase'
import { CreateRoleController } from './createRoleController'

const rolesRepository = RolesRepository.getInstance()
const createRoleUseCase = new CreateRoleUseCase(rolesRepository)

export const createRolesController = new CreateRoleController(createRoleUseCase)
