const express = require('express');
const router = express.Router();

const { signup, signin, signout } = require("../controllers/auth");
const { createAdmin} = require("../controllers/admin");
const { userSignupValidator } = require('../validator')

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.get('/create-admin',createAdmin);


module.exports = router;