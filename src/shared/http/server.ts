import 'dotenv/config'
import 'reflect-metadata'
import { app } from './app'
import { AppDataSource } from '../typeorm'

AppDataSource.initialize().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`message: Server is running on port ${process.env.PORT}!!!✅`)
  })
})
