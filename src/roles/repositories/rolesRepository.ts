import { Role } from '@roles/entities/roles'
import { AppDataSource } from '@shared/typeorm'
import { Repository } from 'typeorm'

type createRoleDTO = {
  name: string
}

export type PagineteParams = {
  page: number
  skip: number
  take: number
}

export type RolesPaginetePropetys = {
  por_page: number
  total: number
  total_pages: number
  current_page: number
  data: Role[]
}
export class RolesRepository {
  private repository: Repository<Role>
  private static INSTANCE: RolesRepository

  private constructor() {
    this.repository = AppDataSource.getRepository(Role)
  }

  public static getInstance(): RolesRepository {
    if (!RolesRepository.INSTANCE) {
      RolesRepository.INSTANCE = new RolesRepository()
    }
    return RolesRepository.INSTANCE
  }

  async create({ name }: createRoleDTO): Promise<Role> {
    const role = this.repository.create({ name })
    await this.repository.save(role)
    return role
  }
  async save(role: Role): Promise<Role> {
    return this.repository.save(role)
  }

  async delete(role: Role): Promise<void> {
    await this.repository.remove(role)
  }

  async findAll({
    page,
    skip,
    take,
  }: PagineteParams): Promise<RolesPaginetePropetys> {
    const [roles, count] = await this.repository
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount()
    const result = {
      por_page: take,
      total: count,
      total_pages: Math.ceil(count / take),
      current_page: page,
      data: roles,
    }
    return result
  }
  async findByName(name: string): Promise<Role | null> {
    return this.repository.findOneBy({ name })
  }
  async findById(id: string): Promise<Role | null> {
    return this.repository.findOneBy({ id })
  }
}
