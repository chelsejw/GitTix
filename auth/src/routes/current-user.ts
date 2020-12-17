import { Router } from 'express'

const router = Router()

router.get('/api/users/current', (_, res) => {
  res.send('Current user!')
})

export { router as currentUserRouter }