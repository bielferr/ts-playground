import { Request, Response } from 'express'
import { ListRolesUseCase } from './createRole/listRoles/listRolesUseCase'

export class ListRolesController {
  constructor(private listRolesUseCase: ListRolesUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const roles = await this.listRolesUseCase.execute()
    return response.json(roles)
  }
}
