import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema= new Schema({
    "name": {
        type: String,
        require: true
    },
    "email": {
        type: String,
        require:true,
        unique : true
    },
    "username": {
        require: true,
        type: String,
        minlength:3  
    },
    
})
export default mongoose.model("User",userSchema);