import express from 'express'
import {place, move, rotate} from '../controllers/indexController'

const router = express.Router()

// TODO: Validation
router.get("/", (req, res) => {
    res.json({msg: 'ok'})
})


router.put("/place", place)
router.post('/move', move)
router.post('/rotate', rotate)

export default router
