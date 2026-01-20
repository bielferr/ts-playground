import { RolesRepository } from '@roles/repositories/rolesRepository'
import { UpdateRoleController } from './updateRoleController'
import { updateRoleUseCase } from './updateRoleUseCase'

const rolesRepository = RolesRepository.getInstance()
const updateRoleUseCaseInstance = new updateRoleUseCase(rolesRepository)

export const updateRoleController = new UpdateRoleController(
  updateRoleUseCaseInstance,
)
