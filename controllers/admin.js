const User = require('../models/user');
const { errorHandler } = require('../helpers/dbErrorHandler');


exports.createAdmin=async (req,res)=>{
    const admin=new User({
        name:'Admin',
        email:'admin@admin.com',
        password:'admin',
        STK:'1010101010',
        CMND:'1010101010',
        role:1,
        adrress:'Ha Noi'
    })
    admin.save((err,user)=>{
        if (err) {
            return res.status(200).json({
                error:errorHandler(err)
            })
        }
        user.hashed_password=undefined;
        user.salt=undefined;
        res.status(200).render('createAdmin',{
            user:user
        })
    })
}