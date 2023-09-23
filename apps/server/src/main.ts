import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/todos', async (req, res) => {
  const users = await prisma.todo.findMany()
  res.json(users)
})

app.post(`/todo`, async (req, res) => {
  try {
    const result = await prisma.todo.create({
      data: { ...req.body },
    })
    res.json(result)
  } catch (e) {
    console.error(e)
  }
})

app.post(`/todo/:id`, async (req, res) => {
  const { id } = req.params
  const result = await prisma.todo.delete({
    where: { id: Number(id) },
  })
  res.json(result)
})

app.post(`/edit/:id`, async (req, res) => {
  const { id } = req.params
  const result = await prisma.todo.update({
    where: { id: Number(id) },
    data: { ...req.body },
  })
  res.json(result)
})

app.listen(30414, () =>
  console.log('Server is running on port 30414!'),
)
