const express=require('express');
 const router=express.Router();
 const assurancecompanyController =require ('../Controllers/assurancecompanyController');



 router.post('/addassurancecompany',assurancecompanyController.addAssuranceCompany);
 router.get('/allassurancecompany',assurancecompanyController.getAllAssuranceCompanies);
 router.get('/getcontratbyidass/:ida',assurancecompanyController.getAssuranceCompanyById);
 router.delete('/deleteasscompany/:id',assurancecompanyController.deleteAssuranceCompany);
 router.put('/updateasscompany/:id',assurancecompanyController.updateAssuranceCompany);
 module.exports=router;