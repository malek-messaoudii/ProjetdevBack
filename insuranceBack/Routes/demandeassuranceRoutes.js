const express=require('express');
const router=express.Router();
const demandeassuranceController =require ('../Controllers/demandeassuranceController');


router.post('/adddemandeassurance',demandeassuranceController.addDemandeAssurance);
router.get('/alldemandeassurance',demandeassuranceController.getAllDemandeAssurances);
router.get('/getdemandeassurancebyid/:id',demandeassuranceController.getDemandeAssurancetById);
router.delete('/deletedemandeassurance/:id',demandeassuranceController.deleteDemandeAssurance);
router.put('/updatdemandeassurance/:id',demandeassuranceController.updateDemandeAssurance);






module.exports=router;




