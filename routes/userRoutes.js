const express = require('express');

const {registerController, getAllusersContrlr}  = require('../controller/userContrl');


// router ----
const router = express.Router();




//register || post---
router.post('/register', registerController);
router.get('/users', getAllusersContrlr);



module.exports = router;
