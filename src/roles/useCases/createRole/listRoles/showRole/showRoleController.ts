import { Request, Response } from 'express'
import { showRoleUseCase } from './showRoleUseCase'

type Params = {
  id: string
}

export class ShowRoleController {
  constructor(private showRoleUseCase: showRoleUseCase) {}

  async handle(req: Request<Params>, res: Response): Promise<Response> {
    const { id } = req.params

    const role = await this.showRoleUseCase.execute({ id })
    return res.status(200).json(role)
  }
}
