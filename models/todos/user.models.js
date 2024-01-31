import {mongoose,Schema} from 'mongoose'

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,"Must contain minimum of 6 alphabets, 2 numbers"]

    },
    // In-Built Validator 
    role:{
        type:String,
        enum:{
            value:['Student','Teacher'],
            message: "{Value} is not Supported"
        },
        required:[true,"Choose role as either Student or Teacher"]
    }
},{timestamps:true}
)

export const userModel=new mongoose.model("User",userSchema);