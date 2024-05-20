import mongoose from "mongoose"
import {QuestionMongoRepository} from "../repository/questionRepository.js"
import DocumentIdNotFoundError from "../myErros/DocumentIdNotFoundError.js"

const questionRepository=new QuestionMongoRepository()

const questionCRUDControlller={

    create:async (req,res)=>{
        const data=req.body
        try{
            const createdQuestion=await questionRepository.save(data)
            res.status(200).json(createdQuestion)
        }catch(error){
            res.status(404).json({
                error:error.message
            })
        }
        
    },

    readAll:async (req,res)=>{
        const allquestions=await questionRepository.findAll()
        res.status(200).json(allquestions)
    },

    readOne:async (req,res)=>{
        const id=req.params.id
        try{
            const readedQuestion=await questionRepository.findById(id)
            res.status(200).json(readedQuestion)
        }catch(error){
            if(error instanceof mongoose.Error.CastError)
                res.status(400).json({
                    error: error.message
                })
            if(error instanceof DocumentIdNotFoundError)
                res.status(404).json({
                    error: error.message
                })
        }
        
    },

    updateOne:async (req,res)=>{
        const data=req.body
        const id=req.params.id
        try{
        const updateResult=await questionRepository.updateOne(id,data)
        res.status(200).json(updateResult)
        }catch(error){
            if(error instanceof mongoose.Error.CastError)
                res.status(400).json({
                    error: error.message
            })
            else
             res.status(404).json({
            error:error.message
             })
        }
    },

    deleteOne:async (req,res)=>{
        try{
            const deleteResult=await questionRepository.deleteOne(req.params.id)
            res.status(200).json(deletedResult)
        }
        catch(error){
            if(error instanceof mongoose.Error.CastError)
                res.status(400).json({
                    error: error.message
                })
        }
        
    },




}

export default questionCRUDControlller;