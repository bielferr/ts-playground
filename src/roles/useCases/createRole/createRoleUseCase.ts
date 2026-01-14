import { Role } from '@roles/entities/roles'
import { RolesRepository } from '@roles/repositories/rolesRepository'
import { AppError } from '@shared/errors/AppError'

type createRoleDTO = {
  name: string
}

export class CreateRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  execute(dto: createRoleDTO): Role {
    const roleAlreadyExists = this.rolesRepository.findByName(dto.name)
    if (roleAlreadyExists) {
      throw new AppError('Role already exists.', 400)
    }

    return this.rolesRepository.create({ name: dto.name })
  }
}
