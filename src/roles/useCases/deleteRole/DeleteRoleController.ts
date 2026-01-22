import { Request, Response } from 'express'
import { DeleteRoleUseCase } from './deleteRoleUseCase'

type Params = {
  id: string
}

export class DeleteRoleController {
  constructor(private deleteRoleUseCase: DeleteRoleUseCase) {}

  async handle(req: Request<Params>, res: Response): Promise<Response> {
    const { id } = req.params

    await this.deleteRoleUseCase.execute({ id })
    return res.status(204).send()
  }
}
