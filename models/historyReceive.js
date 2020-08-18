const mongoose = require('mongoose');
const {ObjectId} =mongoose.Schema.Types;



const historyReceiveSchema = new mongoose.Schema({
    idTransfer:{
        type:ObjectId,
        required:true
   },
   idReceive:{
    type:ObjectId,
    required:true
},
    emailTransfer:{
        type:String,
        trim: true,
        required:true,
      },
    stkTransfer: {
        type: String,
        trim: true,
        required: true,

    },
    nameTransfer: {
        type: String,
        trim: true,
        required: true,
    },
    moneyReceive:{
        type:Number,
        required:true,
        default:0.0
    },
   
}, { timestamps: true });





module.exports = mongoose.model("historyReceive", historyReceiveSchema);