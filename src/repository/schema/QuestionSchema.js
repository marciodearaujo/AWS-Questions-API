import mongoose from "mongoose"
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const questionSchema = new Schema({
    enunciation: {
        type:String,
        required:[true,"O campo enunciation é obrigatório"],
        min:[5,"O campo enunciation não pode ter menos de 5 caracteres"]
        },       
    alternativeA:{
        type:String,
        required:[true,"O campo alternativeA é obrigatório"]
    },
    alternativeB:{
        type:String,
        required:[true,"O campo alternativeB é obrigatório"]
    },
    alternativeC:{
        type:String,
        required:[true,"O campo alternativeC é obrigatório"],
    },
    alternativeD:{
        type:String,
        required:[true,"O campo alternative Dé obrigatório"]
    },
    answer:{
        type:String,
        required:[true,"O campo answer é obrigatório"],
        enum:["A","B","C","D"]
    }

})

export default questionSchema;