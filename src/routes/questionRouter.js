import express from 'express';
import questionCRUDController from '../controller/questionController.js';
import jwt from 'jsonwebtoken'
const router=express.Router()

function verifyToken(req,res,next){
    const token=req.headers.authentication
    jwt.verify(token,process.env.PASSWORD,(err)=>{
        if(err) return  res.status(401).json({
                autorized:false,
                message: "User not authorized"
                })
        else
         next()
        })       
}



router
 .route("/question")
 .post(verifyToken,questionCRUDController.create)

 router
 .route("/question")
 .get(questionCRUDController.readAll)

 router
 .route("/question/:id")
 .get(questionCRUDController.readOne)

 router
 .route("/question/:id")
 .patch(verifyToken,questionCRUDController.updateOne)

 router
 .route("/question/:id")
 .delete(verifyToken,questionCRUDController.deleteOne)

 
 export default router;