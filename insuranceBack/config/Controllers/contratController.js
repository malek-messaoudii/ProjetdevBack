
 const Contrat =require ('../models/contrat');

exports.addContrat=async (req,res)=>{
    try
      {
        data=req.body;
    cntr=new Contrat(data);
    savedcontrat= await cntr.save()
    res.send(savedcontrat)
       }
    catch(error)
      {
    res.send(error)
      }
       
  }
    
    
exports. getAllContrats=async (req,res)=>{
        try
          {
            contrats= await Contrat.find()        // .find({nomcontrat:'',numero:10})
             res.send(contrats);
           }
        catch(error)
          {
        res.send(error)
          }
           
}
    
    
 exports.getContratById=async (req,res)=>{
            try
              {  id=req.params.id;
                contrat= await Contrat.findById({_id:id})        
                 res.send(contrat);
               }
            catch(error)
              {
            res.send(error)
              }
               
  }
    
exports.getContratByName=async (req,res)=>{
                try
                  {  nomc=req.params.nom;
                    contrat= await Contrat.findOne({nomcontrat:nomc})        //1er champ dans findOne (nom champ qui existe dans bd)2eme champ (recupere du param)
                     res.status(200).send(contrat);
                   }
                catch(error)
                  {
                res.status(400).send(error)
                  }
                   
 }
    
exports.deleteContrat=async (req,res)=>{
                    try
                      {  idc=req.params.id;
                        deletedcontrat= await Contrat.findOneAndDelete({_id:idct})        //1er champ dans findOne (nom champ qui existe dans bd)2eme champ (recupere du param)
                         res.send(deletedcontrat);
                       }
                    catch(error)
                      {
                    res.send(error)
                      }
                       
  }
    
 exports.updateContrat=async (req,res)=>{
                        try
                          {  idct=req.params.id;
                            newData=req.body;
                            updatedcontrat= await Contrat.findByIdAndUpdate({_id:idct},newData)        //1er champ dans findOne (nom champ qui existe dans bd)2eme champ (recupere du param)
                             res.send(updatedcontrat);
                           }
                        catch(error)
                          {
                        res.send(error)
                          }
                           
 }


