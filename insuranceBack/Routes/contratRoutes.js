const express=require('express');
 const router=express.Router();
 const contratController =require ('../Controllers/contratController');


 router.post('/addcontrat',contratController.addContrat);
 router.get('/allcontrats',contratController.getAllContrats);
 router.get('/getcontratbyid/:id',contratController.getContratById);
 router.get('/getcontratbyname/:nom',contratController.getContratByName);
 router.delete('/deletecontrat/:id',contratController.deleteContrat);
 router.put('/updatecontrat/:id',contratController.updateContrat);
 module.exports=router;