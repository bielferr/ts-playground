import express from 'express'
import 'express-async-errors'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

// Example route

app.get('/', (req, res) => {
  return res.json({ message: 'Hello, world!' })
})

app.listen(5555, () => {
  console.log('Server is running on port : http://localhost:5555✅')
})
