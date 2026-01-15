import { RolesRepository } from '@roles/repositories/rolesRepository'
import { ListRolesUseCase } from './listRolesUseCase'
import { ListRolesController } from '@roles/useCases/listRoleController'

const rolesRepository = RolesRepository.getInstance()
const listRolesUseCase = new ListRolesUseCase(rolesRepository)

export const listRoleController = new ListRolesController(listRolesUseCase)
