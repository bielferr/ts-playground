import 'dotenv/config'
import 'express-async-errors'
import swaggerUI from 'swagger-ui-express'
import cors from 'cors'
import routes from './routes/index'
import { AppError } from '@shared/errors/AppError'
import express, { NextFunction, Request, Response } from 'express'
import swaggerFile from '../../swagger.json'
const app = express()

app.use(cors())
app.use(express.json())
app.use(
  '/docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerFile, {
    swaggerOptions: { docExpansion: 'none' },
  }),
)
app.use(routes)
// Middleware de tratamento de erros
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      })
    }
    console.error(error)
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    })
  },
)

app.listen(process.env.PORT, () => {
  console.log(`message: Server is running on port ${process.env.PORT}!!!✅`)
})
