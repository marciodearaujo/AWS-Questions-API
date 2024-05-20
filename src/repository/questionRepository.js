
import QuestionSchema from "./schema/QuestionSchema.js"
import mongoose, { mongo } from "mongoose"
import DocumentIdNotFoundError from "../myErros/DocumentIdNotFoundError.js";


class QuestionMongoRepository{
    QuestionModel
    constructor(){      
        const uri = "mongodb+srv://"+process.env.DB_USER+":"+process.env.PASSWORD+"@clusterclf-c02.crbiqpt.mongodb.net/"+process.env.DATABASE+"?retryWrites=true&w=majority&appName=ClusterCLF-C02";
        try{
            mongoose.connect(uri)
            console.log("Conexao com o Atlas MongoDB estabelecida com sucesso!")
              this.QuestionModel=mongoose.model("questions",QuestionSchema)
        }catch(error){
            console.log("Erro ao conectar no banco de dados "+error)
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
            error.message="O documento de id "+id+" nao foi encontrado"
        else if(error instanceof mongoose.Error.CastError)
            error.message="O parâmetro id nao é válido"
        throw error
    }
    
 }

 async updateOne(id,data){
    try{
       const instance= new this.QuestionModel(data)
        await instance.validate(data)
        const updatedQuestion= await this.QuestionModel.updateOne({_id:id},{...data})
        return updatedQuestion
    }catch(error){
       if(error instanceof mongoose.Error.CastError)
            error.message="O parâmetro id nao é válido"
        throw error
    }
    
 }

 async deleteOne(id){
    try{
        const result= await this.QuestionModel.deleteOne({_id:id})
        return result
    }
    catch(error){
        error.message="O parâmetro id nao é válido"
        throw error
    }
    
 }

}

export {
    QuestionMongoRepository
}