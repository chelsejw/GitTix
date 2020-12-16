import express from 'express'
const app = express()
app.use(express.json())
const port = process.env.PORT || 3000


app.get('/api/users/current', (req, res) => {
  res.send('Hi there!')
})

app.listen(port, () => console.log(`Auth service is listening on port ${port}! :)`))