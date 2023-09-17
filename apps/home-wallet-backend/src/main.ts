import express from 'express'

const app = express()

app.use(express.json())

app.get('/users', async (req, res) => {
  res.json("Hello World")
})

app.get('/test', async (req, res) => {
  res.json("Hello test")
})



app.listen(10000, () =>
  console.log('REST API server ready at: http://localhost:10000'),
)