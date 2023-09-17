import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

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

app.listen(10000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)