const express=require('express');
 const router=express.Router();
 const boutiqueController =require ('../Controllers/boutiqueController');
 router.post('/addboutique',boutiqueController.addboutique);
 router.get('/allboutiques',boutiqueController.getallboutiques);
 router.get('/getboutiquebyidboutique/:id',boutiqueController.getboutiqueById);
 router.get('/getboutiquebycategorie/:categorie',boutiqueController.getboutiqueByCategorie);
 router.delete('/deleteboutique/:id',boutiqueController.deleteboutique);
 router.put('/updateboutique/:id',boutiqueController.updateboutique);

 module.exports=router;