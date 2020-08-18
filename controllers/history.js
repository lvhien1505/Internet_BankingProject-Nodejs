const historyReceive = require('../models/historyReceive');
const historyTransfer = require('../models/historyTransfer');


exports.historyMoneyReceive=(req,res)=>{

    historyReceive.find().then((arrHistory)=>{  
       const newArrHistory=arrHistory.filter((data)=>{
           return data.idReceive==req.params.id
        })
        return res.status(200).json(newArrHistory)
    })
}


exports.historyMoneySend=(req,res)=>{

    historyTransfer.find().then((arrHistory)=>{  
       const newArrHistory=arrHistory.filter((data)=>{
           return data.idTransfer==req.params.id
        })
        return res.status(200).json(newArrHistory)
    })
}