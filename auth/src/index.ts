import express from 'express'
import { currentUserRouter } from './routes/current-user'
import { signInRouter } from './routes/signin'
import { signOutRouter } from './routes/signout'
import { signUpRouter } from './routes/signup'

const app = express()
app.use(express.json())

app.get('/api/users/hello', (_, res) => {
  res.send('Hellooo!!')
})

app.use(signUpRouter)
app.use(currentUserRouter)
app.use(signInRouter)
app.use(signOutRouter)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Auth service is listening on port ${port}!`))