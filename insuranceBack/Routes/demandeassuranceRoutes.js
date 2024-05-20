const express=require('express');
const router=express.Router();
const demandeassuranceController =require ('../Controllers/demandeassuranceController');


router.post('/adddemandeassurance',demandeassuranceController.addDemandeAssurance);
router.get('/alldemandeassurance',demandeassuranceController.getAllDemandeAssurances);
router.get('/getdemandeassurancebyid/:id',demandeassuranceController.getDemandeAssurancetById);
router.get('/getdemandeassurancebyemail/:email',demandeassuranceController.getDemandeAssurancetByEmail);
router.get('/getDemandeAssurancetByAgenceName/:nom',demandeassuranceController.getDemandeAssurancetByAgenceName);
router.delete('/deletedemandeassurance/:id',demandeassuranceController.deleteDemandeAssurance);
router.put('/updatdemandeassurancevalid/:id',demandeassuranceController.updateDemandeAssurancevalid);
router.put('/updateDemandeAssurancerefus/:id', demandeassuranceController.updateDemandeAssurancerefus);





module.exports=router;




