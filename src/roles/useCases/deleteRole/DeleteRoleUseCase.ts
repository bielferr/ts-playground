import { RolesRepository } from '@roles/repositories/rolesRepository'
import { AppError } from '@shared/errors/AppError'

type DeleteRoleParams = {
  id: string
}

export class DeleteRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  async execute(dto: DeleteRoleParams): Promise<void> {
    const role = await this.rolesRepository.findById(dto.id)
    if (!role) {
      throw new AppError('Role not found.', 404)
    }

    await this.rolesRepository.delete(role)
  }
}
