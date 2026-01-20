import { Role } from '@roles/entities/roles'
import { RolesRepository } from '@roles/repositories/rolesRepository'
import { AppError } from '@shared/errors/AppError'

type updateRoleParams = {
  id: string
  name: string
}

export class updateRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  async execute(dto: updateRoleParams): Promise<Role> {
    const role = await this.rolesRepository.findById(dto.id)
    if (!role) {
      throw new AppError('Role not found.', 404)
    }
    const roleWithSameName = await this.rolesRepository.findByName(dto.name)
    if (roleWithSameName && role.name === roleWithSameName.name) {
      throw new AppError('Role name already in use.', 400)
    }
    role.name = dto.name
    return this.rolesRepository.save(role)
  }
}
