
const express=require('express');
const router=express.Router();
const DemandeAssurance =require ('../models/demandeassurance');
const Contrat =require ('../models/contrat');
const AssuranceCompany=require('../models/assurancecompany');
const Client =require ('../models/client');

exports.addDemandeAssurance = async (req, res) => {
  try {
      const data = req.body;
     
      // Vérification des clés étrangères
      const clientExists = await Client.findOne({email:data.email});
      if (!clientExists) {
          return res.status(400).send("Le client spécifié n'existe pas");
      }

      const agenceassuranceExists = await AssuranceCompany.findOne({nomagenceassurance: data.nomagenceassurance });
    
      if (!agenceassuranceExists) {
          return res.status(400).send("L'agence d'assurance spécifié n'existe pas");
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
            
            
 exports.getDemandeAssurancetByEmail=async (req,res)=>{
              try
                {  email=req.params.email;
                  demass= await DemandeAssurance.find({email:email});        //1er champ dans findOne (nom champ qui existe dans bd)2eme champ (recupere du param)
                   res.status(200).send(demass);
                 }
              catch(error)
                {
              res.status(400).send(error)
                }
                 
              }      
 exports.getDemandeAssurancetByAgenceName=async (req,res)=>{
      try
         {  nom=req.params.nom;
            demass= await DemandeAssurance.find({nomagenceassurance:nom,etattraitement:'En Attente De Validation'});        //1er champ dans findOne (nom champ qui existe dans bd)2eme champ (recupere du param)
            console.log(`Found demandes: ${JSON.stringify(demass)}`);
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
                
exports.updateDemandeAssurancevalid=async (req,res)=>{
    try
     {  const idc = req.params.id;
      const newData = { etattraitement: 'Validé' }; // Only update the 'etat' field to true
      const updateddemandassurance = await DemandeAssurance.findOneAndUpdate(
        { _id: idc }, // Assuming _id is the primary key field
        newData,
        { new: true } // Return the updated document
      );
        res.status(200).send(updateddemandassurance);
     }
    catch(error)
    {
    res.status(400).send(error);
    }
  };

    exports.updateDemandeAssurancerefus = async (req, res) => {
      try {
        const idc = req.params.id;
        const newData = { etattraitement: 'Refusé' }; // Update the 'etattraitement' field to 'Refusé'
        const updateddemandassurance2 = await DemandeAssurance.findOneAndUpdate(
          { _id: idc }, // Assuming _id is the primary key field
          newData,
          { new: true } // Return the updated document
        );
        res.status(200).send(updateddemandassurance2);
      } catch (error) {
        res.status(400).send(error);
      }
    };










