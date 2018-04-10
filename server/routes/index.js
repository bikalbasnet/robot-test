import express from 'express'
import {place, move, rotate, report, remove} from '../controllers/indexController'

const router = express.Router()

router.get("/", (req, res) => {
    res.json({msg: 'ok'})
})


router.put("/place", place)
router.post('/move', move)
router.post('/rotate', rotate)
router.get('/report', report)
router.post('/remove', remove)

export default router
