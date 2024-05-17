
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










