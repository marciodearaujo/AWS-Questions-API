
import QuestionSchema from "./schema/QuestionSchema.js"
import mongoose from "mongoose"
import DocumentIdNotFoundError from "../apiErros/DocumentIdNotFoundError.js";


class QuestionMongoRepository{
    QuestionModel
    constructor(){      
        const uri = "mongodb+srv://"+process.env.DB_USER+":"+process.env.PASSWORD+"@clusterclf-c02.crbiqpt.mongodb.net/"+process.env.DATABASE+"?retryWrites=true&w=majority&appName=ClusterCLF-C02";
        try{
            mongoose.connect(uri)
            console.log("Atlas MongoDB connection success!")
              this.QuestionModel=mongoose.model("questions",QuestionSchema)
        }catch(error){
            console.log("Database not connected"+error)
        }
    
  }

 async  save(question){
    try{
        let instance= new this.QuestionModel(question)
        const result=await instance.save()
        return result
    }catch(error){
        throw error
    }
        
    }

async findAll(){
    const questions=await this.QuestionModel.find({})
    return questions
 }

 async findById(id){
    try{
        const foundQuestion= await this.QuestionModel.findById(id).exec()
        if(foundQuestion!=null)
            return foundQuestion
        else
            throw new DocumentIdNotFoundError()
    }catch(error){
        if(error instanceof DocumentIdNotFoundError)
            error.message="Document id "+id+" not found"
        else if(error instanceof mongoose.Error.CastError)
            error.message="Parameter "+error.path+" is not valid"
        throw error
    }
    
 }

 async updateOne(id,data){
    try{
        const opts={ runValidators: true }
        const instance= new this.QuestionModel(data)
        const result= await this.QuestionModel.updateOne({_id:id},{...data},opts)
        return result
    }catch(error){
       if(error instanceof mongoose.Error.CastError)
            error.message="Parameter "+error.path+" is not valid"
        throw error
    }
    
 }

 async deleteOne(id){
    try{
        const result= await this.QuestionModel.deleteOne({_id:id})
        return result
    }
    catch(error){
        error.message="Parameter "+error.path+" is not valid"
        throw error
    }
    
 }

}

export default QuestionMongoRepository
