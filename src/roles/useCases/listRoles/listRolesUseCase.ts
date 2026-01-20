import {
  RolesPaginetePropetys,
  RolesRepository,
} from '@roles/repositories/rolesRepository'

type ListRolesUseCaseParams = {
  page: number
  limit: number
}
export class ListRolesUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  async execute({
    page,
    limit,
  }: ListRolesUseCaseParams): Promise<RolesPaginetePropetys> {
    const take = limit
    const skip = (page - 1) * limit
    const roles = await this.rolesRepository.findAll({ page, skip, take })
    return roles
  }
}
