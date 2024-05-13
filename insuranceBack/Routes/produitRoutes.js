const express=require('express');
const router=express.Router();
const produitController =require ('../Controllers/ProduitController');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            const date = Date.now();
            req.date = date;  
            const uploadDir = path.join(__dirname, '..', 'uploads', date.toString());
            fs.mkdirSync(uploadDir, { recursive: true });
            callback(null, uploadDir);
        },
        filename: (req, file, callback) => {
            let extension = file.mimetype.split('/')[1];
            let fl = file.fieldname + '.' + extension;
            const fullFilename = path.join(req.date.toString(), fl);  // Accessing date from req object
            callback(null, fl);
            req.filename = fullFilename;  // Store the complete file path in req for later use
        }
    })
});

router.post('/addproduit', upload.any('file'),produitController.addProduit);
router.get('/allproduits',produitController.getAllProduits);
router.get('/getproduitbyid/:id',produitController.getProduitById);
router.delete('/deleteproduit/:id',produitController.deleteProduit);
router.put('/updateproduit/:id',produitController.updateProduit);






module.exports=router;




