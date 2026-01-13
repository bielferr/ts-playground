import { Router } from 'express'
import { AppError } from '@shared/errors/appError'

const routes = Router()

routes.get('/', (_req, res) => {
  throw new AppError('acess denied')
  return res.json({ message: 'hello Shadow!!!' })
})

export default routes
