import { Router } from 'express'
import * as beersCtrl from '../controllers/beers.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========
router.get('/', beersCtrl.index)

// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/', checkAuth, beersCtrl.create)

export { router }