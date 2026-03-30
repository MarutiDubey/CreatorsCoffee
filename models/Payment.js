import mongoose from "mongoose";
const {Schema ,model } = mongoose

const PaymentSchema = new mongoose.Schema({
    name: {type: String,required:true},
    to_user: {type:String,required:true},
    oid: {type:String,required:true},
    message: {type:String,required:true},
    amount: {type:Number,required:true},
    status: {type:Boolean,default:false},
    createdAt: {type:Date,default:Date.now},
    updatedAt: {type:Date,default:Date.now},
    
})

export default mongoose.models.Payment || mongoose.model("Payment", PaymentSchema)