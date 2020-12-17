import { Router } from 'express'

const router = Router()

router.post('/api/users/signup', (_, res) => {
  res.send('Signup user!')
})

export { router as signUpRouter }
