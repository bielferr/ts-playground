import { Role } from '@roles/entities/roles'
import { RolesRepository } from '@roles/repositories/rolesRepository'
import { AppError } from '@shared/errors/AppError'

type showRoleParams = {
  id: string
}

export class showRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  async execute(dto: showRoleParams): Promise<Role> {
    const role = await this.rolesRepository.findById(dto.id)
    if (!role) {
      throw new AppError('Role not found.', 404)
    }

    return role
  }
}
