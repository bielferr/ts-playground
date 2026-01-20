import { Request, Response } from 'express'
import { updateRoleUseCase } from './updateRoleUseCase'

type Params = {
  id: string
}

export class UpdateRoleController {
  constructor(private updateRoleUseCase: updateRoleUseCase) {}

  async handle(req: Request<Params>, res: Response): Promise<Response> {
    const { id } = req.params
    const { name } = req.body
    const role = await this.updateRoleUseCase.execute({ id, name })
    return res.status(200).json(role)
  }
}
