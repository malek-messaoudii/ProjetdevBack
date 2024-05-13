const Produit = require('../models/produit');
const Boutique =require('../models/boutique');
const mongose = require('mongoose');



exports.addProduit = async (req, res) => {
  try {
    data = req.params;
    newProduit = new Produit(data);

    // Sauvegarde du nouveau produit dans la base de données
    savedProduit = await newProduit.save();

    // Envoi du produit sauvegardé au client
    res.status(201).send(savedProduit);
  } catch (error) {
    // Gestion des erreurs éventuelles
    res.status(400).send(error);
  }
};







exports.getAllProduits=async (req,res)=>{
    try
      {
        produits= await Produit.find()        // .find({nomproduit:'',numero:10})
         res.send(produits);
       }
    catch(error)
      {
    res.send(error)
      }
       
    }



exports.getProduitById=async (req,res)=>{
        try
          {  id=req.params.id;
            produit= await Produit.findById({_id:id})        
             res.send(produit);
           }
        catch(error)
          {
        res.send(error)
          } 
        };

       
        const mongoose = require('mongoose');

 exports.deleteProduit=async (req, res) => {
            try {
                const idProduit = req.params.id;
                // Récupérer le produit avant de le supprimer
                const deletedProduit = await Produit.findOneAndDelete({_id: idProduit});
                if (!deletedProduit) {
                    return res.status(404).send("Le produit n'a pas été trouvé.");
                }
                // Récupérer la catégorie du produit
                const categorieProduit = deletedProduit.categorie; // Assumant que 'categorie' est le champ commun entre Produit et Boutique
                
                // Mettre à jour la boutique
                // Supprimer le produit de la table 'produits[]' de la boutique
                const updatedBoutique = await Boutique.findOneAndUpdate(
                    { categorie: categorieProduit },
                       { $pull: { produits: idProduit } },   // Convertir l'ID du produit en ObjectID
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



   