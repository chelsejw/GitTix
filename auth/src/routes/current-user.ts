import express from 'express'

const router = express.Router()

router.get('/api/users/current', (req, res) => {
  res.send('Hi there! This is current....')
})

export { router as currentUserRouter }
