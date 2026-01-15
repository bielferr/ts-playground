import { Request, Response } from 'express'
import { RolesRepository } from '@roles/repositories/rolesRepository'
import { AppError } from '@shared/errors/AppError'
import { CreateRoleUseCase } from './createRoleUseCase'

export class CreateRoleController {
  constructor(private createRoleUseCase: CreateRoleUseCase) {}

  handle(req: Request, res: Response): Response {
    const { name } = req.body
    const role = this.createRoleUseCase.execute({ name })

    return res.status(201).json(role)
  }
}
