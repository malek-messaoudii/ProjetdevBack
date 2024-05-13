const express=require('express');
const router=express.Router();
const claimController =require ('../Controllers/claimController');

router.post('/addclaim' ,claimController.addclaim);

module.exports = router;