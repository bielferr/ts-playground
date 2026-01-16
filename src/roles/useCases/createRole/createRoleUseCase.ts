import { Role } from '@roles/entities/roles'
import { RolesRepository } from '@roles/repositories/rolesRepository'
import { AppError } from '@shared/errors/AppError'

type createRoleDTO = {
  name: string
}

export class CreateRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  async execute(dto: createRoleDTO): Promise<Role> {
    const roleAlreadyExists = await this.rolesRepository.findByName(dto.name)
    if (roleAlreadyExists) {
      throw new AppError('Role already exists.', 400)
    }

    return this.rolesRepository.create({ name: dto.name })
  }
}
