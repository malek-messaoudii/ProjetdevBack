
 const Boutique =require ('../models/boutique');
 const Produit = require('../models/produit');
 const mongoose = require('mongoose');
 exports.addboutique= async (req, res) => {
    try {
        data=req.body;
        nouvelleBoutique = new Boutique(data);

        // Sauvegarde de la nouvelle boutique dans la base de données
         savedBoutique = await nouvelleBoutique.save();

        // Envoi de la boutique sauvegardée au client
        res.status(201).send(savedBoutique);
    } catch (error) {
        // Gestion des erreurs éventuelles
        res.status(400).send(error);
    }
};

exports.getallboutiques= async (req, res) => {
    try {
        // Récupérer toutes les boutiques de la base de données et peupler les produits associés
        const boutiques = await Boutique.find().populate('produits'); //on peut specifier les champs du produit qu'on veut les afficher comme ca .populate('produits', 'nom prix')  Liste des champs à inclure, séparés par des espaces

        // Envoyer les boutiques et leurs produits récupérés au client
        res.status(200).send(boutiques);
    } catch (error) {
        // Envoyer une réponse d'erreur
        res.status(500).send(error);
    }
};

exports.getboutiqueById=async (req,res)=>{
    try
      {  id=req.params.id;
        boutique= await Boutique.findOne({idb:id})        //1er champ dans findOne (nom champ qui existe dans bd)2eme champ (recupere du param)
        
         if (!boutique) 
         {
            return res.status(404).send({ message: "Boutique non trouvée" });
         }
       
        res.status(200).send(boutique);
    } 
    catch (error) {
        res.status(500).send(error);
    }
       
    }



exports.getboutiqueByCategorie=async (req,res)=>{
        try
          {  categ=req.params.categorie;
            boutique= await Boutique.findOne({categorie:categ})        //1er champ dans findOne (nom champ qui existe dans bd)2eme champ (recupere du param)
            
             if (!boutique) 
             {
                return res.status(404).send({ message: "Boutique non trouvée" });
             }
           
            res.status(200).send(boutique);
        } 
        catch (error) {
            res.status(500).send(error);
        }
           
        }

exports.deleteboutique=async (req,res)=>{
            try
              {  idc=req.params.id;
                deletedBoutique= await Boutique.findOneAndDelete({idb:idc})        //1er champ dans findOne (nom champ qui existe dans bd)2eme champ (recupere du param)
                if (!deletedBoutique) {
                    return res.status(404).send({ message: "Boutique non trouvée" });
                }
                
                // Supprimer tous les produits associés à cette boutique    Cela garantit que tous les produits qui étaient associés uniquement à la boutique supprimée sont aussi supprimés
                if (deletedBoutique.produits && deletedBoutique.produits.length > 0) {
                    await Produit.deleteMany({ _id: { $in: deletedBoutique.produits } });
                }
        
                res.status(200).send({ message: "Boutique et tous ses produits associés supprimés avec succès", deletedBoutique });
            } catch (error) {
                res.status(500).send(error);
            }
            } 

exports.updateboutique=async (req,res)=>{
                try
                  {  idc=req.params.id;
                    newData=req.body;
                    updatedBoutique= await Boutique.findOneAndUpdate({idb:idc},newData)        //1er champ dans findOne (nom champ qui existe dans bd)2eme champ (recupere du param)
                    if (!updatedBoutique) {
                        return res.status(404).send({ message: "Boutique non trouvée" });
                    }
            
                    res.status(200).send(updatedBoutique);
                } catch (error) {
                    res.status(500).send(error);
                }
                   
                }           


