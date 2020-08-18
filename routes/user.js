const express = require('express');
const router = express.Router();

const { userById,showUser,updateUser,banAccountUser,transfer,findUser} = require("../controllers/user");

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    });
});

router.post('/:userId', requireSignin, isAuth,(req,res)=>{
     res.status(200).json(req.profile);
} );


router.post('/find/:id',findUser);

router.post('/:userId/show-user', requireSignin, isAuth, isAdmin,showUser );

router.put('/:userId/update-user/:id', requireSignin, isAuth, isAdmin,updateUser);


router.put('/:userId/ban-user/:id', requireSignin, isAuth, isAdmin,banAccountUser);

router.put('/:userId/transfer/:id', requireSignin, isAuth,transfer);







router.param('userId', userById);


module.exports = router;