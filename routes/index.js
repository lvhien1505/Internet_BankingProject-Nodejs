const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index');
})


router.get('/signin',(req,res)=>{
    res.render('index');
})


router.get('/signup',(req,res)=>{
    res.render('signup');
})



router.get('/thongtin',(req,res)=>{
    res.render('infoUser');
})


router.get('/giaodich',(req,res)=>{
    res.render('deal');
})

router.get('/chuyenkhoan',(req,res)=>{
    res.render('transfer');
})


router.get('/dashboard',(req,res)=>{
    res.render('dashboardAdmin');
})


router.get('/update',(req,res)=>{
    res.render('updateInfoUser');
})


router.get('/lichsu',(req,res)=>{
    res.render('historyDeal');
})








module.exports = router;