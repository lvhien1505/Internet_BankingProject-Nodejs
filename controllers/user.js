const User = require('../models/user');
const historyReceive = require('../models/historyReceive');
const historyTransfer = require('../models/historyTransfer');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        user.hashed_password=undefined;
        user.salt=undefined;
        req.profile = user;
        next();
    });
};


exports.showUser=(req,res,next)=>{
   User.find({role:0}).exec((err,arr)=>{
         if (arr) {
             return res.status(200).json(arr)
         }
         return res.status(400).json({
            error: 'User not found'
        });
   })
}


exports.updateUser=async (req,res,next)=>{
    const id=req.params.id;
    try {
        await User.findOneAndUpdate({_id:id},req.body,{new:true}).then((user)=>{
            if (user) {
                user.hashed_password=undefined;
                user.salt=undefined;
                return  res.status(200).json(user)
            }
           
        })
    } catch (error) {
        return res.status(200).json({
            error:errorHandler(error)
        })
    }
   

 }

exports.banAccountUser=async (req,res,next)=>{
    try {
        await User.findOne({_id:req.params.id}).then((user)=>{
            if (user) {
                const isActive=!user.isActive;
                User.findOneAndUpdate({_id:user._id},{isActive:isActive},{new:true}).then((result)=>{
        
                    if (result) {
                        return  res.status(200).json({
                            message:'Ban/Active thanh cong'
                        });
                    }
                
                })
                
            }
        
        })
    
    } catch (err) {
        return res.status(200).json({
            error:errorHandler(err)
        })
    }
   
 
   


 }

 exports.transfer=async (req,res,next)=>{
     const transferMoney=parseFloat(req.body.numMoney);

     const {_id,numMoney} =req.profile;
     const numMoneyTransfer=numMoney-transferMoney;
     if (numMoneyTransfer <= 0) {
         return res.status(200).json({
             error:'So du khong du'
         })
     }
     const userTransfer= await User.findOne({_id:_id});
     const userReceive=await  User.findOne({_id:req.params.id});
     userTransfer.numMoney=userTransfer.numMoney-transferMoney;
     userReceive.numMoney=userReceive.numMoney+transferMoney;
     await historyTransfer.create({
        idReceive:userReceive._id,
        idTransfer:userTransfer._id,
        nameReceive:userReceive.name,
        emailReceive:userReceive.email,
        stkReceive:userReceive.STK,
        moneyTransfer:transferMoney
    })

   await historyReceive.create({
        idTransfer:userTransfer._id,
        idReceive:userReceive._id,
        nameTransfer:userTransfer.name,
        emailTransfer:userTransfer.email,
        stkTransfer:userTransfer.STK,
        moneyReceive:transferMoney
    })

     await userReceive.save();
     await userTransfer.save((err,data)=>{
         if (err) {
             return res.status(200).json({
                 error:errorHandler(err)
             })
         }
         
              req.profile=data;
              return res.status(200).json({
                    message:'Chuyen tien thanh cong!'
               
         })
        
     })
     
 }



 exports.findUser=(req,res)=>{
     const id=req.params.id;
     User.findOne({_id:id}).then((data)=>{
         if (data) {
             data.hashed_password=undefined,
             data.status=undefined;
            return res.status(200).json(data);
         }
         res.status(404).json({
             error:'Loi find User'
         })
     })
 }

exports.ktuser=(req,res)=>{
     const {STK}=req.body;
     console.log(STK)
     User.findOne({
         STK:STK
     }).then((data)=>{
         if (data) {
             return res.status(200).json({
               id:data._id,
               name:data.name,
               email:data.email
             })
         }
         res.status(404).json({
             message:'Loi'
         })
     })
 }