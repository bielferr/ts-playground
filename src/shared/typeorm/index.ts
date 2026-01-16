import { DataSource } from 'typeorm'
import { CreateRolesTable1768563328523 } from './migrations/1768563328523-CreateRolesTable'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [],
  migrations: [CreateRolesTable1768563328523],
})
