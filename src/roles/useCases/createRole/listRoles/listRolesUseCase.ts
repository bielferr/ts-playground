import { Role } from '@roles/entities/roles'
import { RolesRepository } from '@roles/repositories/rolesRepository'

export class ListRolesUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  execute(): Role[] {
    return this.rolesRepository.findAll()
  }
}
