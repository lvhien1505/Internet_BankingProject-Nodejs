const mongoose = require('mongoose');
const {ObjectId} =mongoose.Schema.Types;



const historyTransferSchema = new mongoose.Schema({
    idReceive:{
         type:ObjectId,
         required:true
    },
    idTransfer:{
        type:ObjectId,
        required:true
   },
    emailReceive:{
        type:String,
        trim: true,
        required:true,
      },
    stkReceive: {
        type: String,
        trim: true,
        required: true,

    },
    nameReceive: {
        type: String,
        trim: true,
        required: true,
    },
    moneyTransfer:{
        type:Number,
        required:true,
        default:0.0
    },
   
}, { timestamps: true });





module.exports = mongoose.model("historyTransfer", historyTransferSchema);