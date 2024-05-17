const Produit = require('../models/produit');
const Boutique =require('../models/boutique');
const mongoose = require('mongoose');



exports.addProduit = async (req, res) => {
  try {
    data = req.body;
    const categorie = req.body['categorie'].trim();
   console.log (data);

     // Recherche de la boutique correspondante par catégorie
     const boutique = await Boutique.findOne({ categorie: new RegExp('^' + categorie + '$', 'i') });
    
     // Vérification de l'existence de la boutique
     if (!boutique) {
      return res.status(404).send({ message: "Aucune boutique trouvée pour cette catégorie" });
  }
 


 
    
  const pd = new Produit({
    idp: data.idp,
    nomproduit: data.nomproduit,
    categorie: categorie,
    modele: data.modele,
    marque: data.marque,
    prix: parseFloat(data.prix), // Convertir en float pour s'assurer que le type est correct
    idb:data.idb,
   
  });

  // Gestion du fichier chargé
  if (req.file) {
    pd.image = req.filename; // Utilisation du nom du fichier du fichier chargé
  }
  const imagePath = req.filename;
const savedProduit = await pd.save(); //enreg dans db
// Ajouter le produit à la liste des produits de la boutique
boutique.produits.push(savedProduit._id);
await boutique.save();

res.status(200).send({savedProduit, imagePath });
}
catch (error) {
console.error(error); // Log l'erreur pour aider au débogage
res.status(400).send({ message: "Erreur lors du traitement de la requête", error: error.message });
}

};







exports.getAllProduits=async (req,res)=>{
    try
      {
        produits= await Produit.find()        // .find({nomproduit:'',numero:10})
        const produitsWithImagePaths = produits.map(produit => {
          return {
              idp: produit.idp,
              categorie: produit.categorie,
              modele: produit.modele,
              marque:produit.marque,
              prix: produit.prix,
              image: `http://localhost:4000/uploads/${produit.image}`, // Assurez-vous que le chemin de l'image est correctement formé
              idb: produit.idb
          };
      });
      res.send(produitsWithImagePaths);
       }
    catch(error)
      {
    res.send(error)
      }
       
    }



exports.getProduitById=async (req,res)=>{
        try
          {  id=req.params.id;
            produit= await Produit.findOne({idp:id})        
             res.send(produit);
           }
        catch(error)
          {
        res.send(error)
          } 
        };

       
      

 exports.deleteProduit=async (req, res) => {
            try {
                const idp = req.params.id;
                
                // Récupérer le produit avant de le supprimer
                const deletedProduit = await Produit.findOneAndDelete({idp: idp});
                if (!deletedProduit) {
                    return res.status(404).send("Le produit n'a pas été trouvé.");
                }
                // Récupérer la catégorie du produit
                const categorieProduit = deletedProduit.categorie; // Assumant que 'categorie' est le champ commun entre Produit et Boutique
                
                // Mettre à jour la boutique
                // Supprimer le produit de la table 'produits[]' de la boutique
                const updatedBoutique = await Boutique.findOneAndUpdate(
                    { categorie: categorieProduit },
                       { $pull: { produits:deletedProduit._id} },   // Convertir l'ID du produit en ObjectID
                    { new: true } // Pour obtenir la boutique mise à jour après la modification
                );
                if (!updatedBoutique) {
                    return res.status(404).send("La boutique associée au produit n'a pas été trouvée.");
                }
        
                res.send(deletedProduit);
            } catch (error) {
                res.status(500).send(error);
            }
        };
        

    
exports.updateProduit=async (req,res)=>{
        try
          {  idc=req.params.id;
            newData=req.body;
            updatedproduit= await Produit.findByIdAndUpdate({_id:idc},newData)        //1er champ dans findOne (nom champ qui existe dans bd)2eme champ (recupere du param)
             res.send(updatedproduit);
           }
        catch(error)
          {
        res.send(error)
          }
           
        };



   