import express from 'express'; 
import 'dotenv/config'
import questionRouter from "./src/routes/questionRouter.js"
import defaultRouter from "./src/routes/defaultRouter.js"
import tokenRouter from "./src/routes/tokenRouter.js"

const app=express()
app.use(express.json());


app.use(questionRouter)
app.use(tokenRouter)
/*app.use((error,req,res,next)=>{
    if(error)
        console.log("Aconteceu um erro")
})*/
app.use(defaultRouter)







export default app;