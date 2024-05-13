const express=require('express');
 const router=express.Router();
 const reparationcompanyController =require ('../Controllers/reparationcompanyController');

 router.post('/addreparationcompany',reparationcompanyController.addReparationCompany);
 router.get('/allreparationcompany',reparationcompanyController.getAllReparationCompanies);
 router.get('/getcontratbyidrep/:idrep',reparationcompanyController.getReparationCompanyById);
 router.delete('/deleterepcompany/:id',reparationcompanyController.deleteReparationCompany);
 router.put('/updaterepcompany/:id',reparationcompanyController.updateReparationCompany);
 module.exports=router;