import express from 'express'; 
import 'dotenv/config'
import questionRouter from "./src/routes/questionRouter.js"
import defaultRouter from "./src/routes/defaultRouter.js"
const app=express()
app.use(express.json());

app.use(questionRouter)
app.use(defaultRouter)


export default app;