import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

app.post(`/user`, async (req, res) => {
  try {
    const result = await prisma.user.create({
      data: { ...req.body },
    })
    res.json(result)
  } catch (e) {
    console.error(e)
  }
 
})

app.listen(30414, () =>
  console.log('Server is running on port 30414!'),
)