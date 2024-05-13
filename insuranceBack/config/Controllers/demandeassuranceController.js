
const express=require('express');
const router=express.Router();
const DemandeAssurance =require ('../models/demandeassurance');
const Contrat =require ('../models/contrat');
const Produit =require ('../models/produit');
const Client =require ('../models/client');

exports.addDemandeAssurance = async (req, res) => {
  try {
      const data = req.params;
      console.log(data);
      // Vérification des clés étrangères
      const clientExists = await Client.findById(data.idclient);
      if (!clientExists) {
          return res.status(400).send("Le client spécifié n'existe pas");
      }

      const contratExists = await Contrat.findOne({ idc: data.idcontrat });
      if (!contratExists) {
          return res.status(400).send("Le contrat spécifié n'existe pas");
      }

      const produitExists = await Produit.findOne({ idp: data.idproduit });
      if (!produitExists) {
          return res.status(400).send("Le produit spécifié n'existe pas");
      }
     
      // Création de la demande d'assurance
      const newDemandeAssurance = new DemandeAssurance(data);
      const savedDemandeAssurance = await newDemandeAssurance.save();

      res.status(200).send(savedDemandeAssurance);
  } catch (error) {
      res.status(400).send(error.message);
  }
};

exports.getAllDemandeAssurances=async (req,res)=>{
        try
          {
            demandesassurance= await DemandeAssurance.find()  ;      // .find({nomcontrat:'',numero:10})
             res.send(demandesassurance);
           }
        catch(error)
          {
        res.status(400).send(error);
          }
           
        }    
        
exports.getDemandeAssurancetById=async (req,res)=>{
            try
              {  idd=req.params.id;
                demass= await DemandeAssurance.findOne({iddass:idd});        //1er champ dans findOne (nom champ qui existe dans bd)2eme champ (recupere du param)
                 res.status(200).send(demass);
               }
            catch(error)
              {
            res.status(400).send(error)
              }
               
            }      
exports.deleteDemandeAssurance=async (req,res)=>{
   try
    {  idc=req.params.id;
       deleteddemandassurance= await DemandeAssurance.findOneAndDelete({iddass:idc}) ;       //1er champ dans findOne (nom champ qui existe dans bd)2eme champ (recupere du param)
       res.status(200).send(deleteddemandassurance);
    }
   catch(error)
     {
      res.status(400).send(error)
     }
                   
                } 
                
exports.updateDemandeAssurance=async (req,res)=>{
    try
     {  idc=req.params.id;
         newData=req.body;
         updateddemandassurance= await DemandeAssurance.findOneAndUpdate({iddass:idc},newData)  ;      //1er champ dans findOne (nom champ qui existe dans bd)2eme champ (recupere du param)
        res.status(200).send(updateddemandassurance);
     }
    catch(error)
    {
    res.status(400).send(error);
    }
                                      
                       } 










