const express = require('express');
const router = express.Router();
const {historyMoneyReceive,historyMoneySend}=require('../controllers/history')


router.get('/receive/:id',historyMoneyReceive);

router.get('/send/:id',historyMoneySend);



module.exports = router;