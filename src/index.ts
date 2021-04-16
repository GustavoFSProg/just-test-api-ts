import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes'
import mongoose from 'mongoose'

dotenv.config()

const api = express()

mongoose.connect(String(process.env.DATABASE_KEY), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})

const { PORT } = process.env

api.use(express.json())
api.use(cors())
api.use(routes)

api.listen(PORT, () => {
  console.log(`Entrou na api na PORTA: ${PORT}`)
})

export default api
