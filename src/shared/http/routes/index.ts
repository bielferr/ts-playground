import { Router } from 'express'
import { AppError } from '@shared/errors/AppError'
import { rolesRoutes } from '@roles/http/routes/roles.routes'

const routes = Router()

routes.get('/', (_req, res) => {
  throw new AppError('acess denied')
  return res.json({ message: 'hello Shadow!!!' })
})

routes.use('/roles', rolesRoutes)

export default routes
