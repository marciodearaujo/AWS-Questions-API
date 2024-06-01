import mongoose from "mongoose"
const Schema = mongoose.Schema;


const questionSchema = new Schema({
    question: {
        type:String,
        required:[true,"The field question is required"],
        },       
    alternativeA:{
        type:String,
        required:[true,"The field alternativeA is required"]
    },
    alternativeB:{
        type:String,
        required:[true,"The field alternativeB is required"]
    },
    alternativeC:{
        type:String,
        required:[true,"The field alternativeC is required"],
    },
    alternativeD:{
        type:String,
        required:[true,"The field alternativeD is required"]
    },
    answer:{
        type:String,
        required:[true,"The field answer is required"],
        enum:["A","B","C","D"]
    }

})

export default questionSchema;