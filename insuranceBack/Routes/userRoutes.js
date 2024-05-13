const express=require('express');
 const router=express.Router();
 const userController =require ('../Controllers/userController');



 router.post('/add',userController.addUser);
 router.post('/register',userController.Register);
 router.post('/register1',userController.Register1);
 router.post('/register2',userController.Register2);
 router.post('/login1',userController.login);
 router.post('/checkUnique',userController.checkUnique);
 router.post('/checkUnique2',userController.checkUnique2);
 router.delete('/delete/:id',userController.deleteUserAccount);
 router.put('/update/:id',userController.updateUserAccount);
 router.get('/getuser/:email',userController.getUserByEmail);
 router.get('/getrole/:email',userController.getRoleByEmail);
 module.exports=router;