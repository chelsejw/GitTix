import { Router } from 'express'

const router = Router()

router.post('/api/users/signin', (_, res) => {
  res.send('Sign in')
})

export { router as signInRouter }
