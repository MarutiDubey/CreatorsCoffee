import mongoose from "mongoose";
const {Schema ,model } = mongoose

const UserSchema = new mongoose.Schema({
    name: {type:String,required:true},
    email: {type:String,required:true, unique: true},
    image: {type:String},
    username: {type:String,required:true, unique: true},
    razorpayId: {type:String, default: ""},
    razorpaySecret: {type:String, default: ""},
    createdAt: {type:Date,default:Date.now},
    updatedAt: {type:Date,default:Date.now},
})

export default mongoose.models.User || mongoose.model("User", UserSchema) 