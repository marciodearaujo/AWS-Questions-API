import express from 'express'
import tokenController from '../controller/tokenController.js'
const router=express.Router()


router
    .route("/token")
    .post(tokenController.getToken)

export default router