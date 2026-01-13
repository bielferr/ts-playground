import 'dotenv/config'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import routes from './routes/index'

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT, () => {
  console.log(`message: Server is running on port ${process.env.PORT}!!!✅`)
})
