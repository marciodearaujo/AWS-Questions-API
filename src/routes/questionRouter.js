import express from 'express';
import questionCRUDController from '../controller/questionController.js';
const router=express.Router()

router
 .route("/question")
 .post(questionCRUDController.create)

 router
 .route("/question")
 .get(questionCRUDController.readAll)

 router
 .route("/question/:id")
 .get(questionCRUDController.readOne)

 router
 .route("/question/:id")
 .patch(questionCRUDController.updateOne)

 router
 .route("/question/:id")
 .delete(questionCRUDController.deleteOne)

 
 export default router;