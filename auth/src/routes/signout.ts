import { Router } from 'express'

const router = Router()

router.post('/api/users/signout', (_, res) => {
  res.send('Signout')
})

export { router as signOutRouter }
