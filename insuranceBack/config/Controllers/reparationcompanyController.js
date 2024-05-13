
 const ReparationCompany =require ('../models/reparationcompny');

 exports.addReparationCompany=async (req,res)=>{
    try
      {
        data=req.body;
    repa=new ReparationCompany (data);
    savedreparacompany= await repa.save();
    res.send(  savedreparacompany);
       }
    catch(error)
      {
    res.status(400).send(error)
      }
       
   }
exports.getAllReparationCompanies=async (req,res)=>{
        try
          {
            reparationcompanies= await ReparationCompany.find()   ;     // .find({nomcontrat:'',numero:10})
             res.send( reparationcompanies);
           }
        catch(error)
          {
        res.status(400).send(error);
          }
           
   }   
        
 exports.getReparationCompanyById=async (req,res)=>{
            try
              {  id=req.params.idrep;
                repcomp= await ReparationCompany.findOne({idr:id});        //1er champ dans findOne (nom champ qui existe dans bd)2eme champ (recupere du param)
                 res.status(200).send(repcomp);
               }
            catch(error)
              {
            res.status(400).send(error)
              }
               
 }           


 exports.deleteReparationCompany=async (req,res)=>{
                try
                  {  idrep=req.params.id;
                    deletedrepcompany= await ReparationCompany.findOneAndDelete({idr:idrep})        //1er champ dans findOne (nom champ qui existe dans bd)2eme champ (recupere du param)
                     res.send(deletedrepcompany);
                   }
                catch(error)
                  {
                res.send(error)
                  }
                   
 }

exports.updateReparationCompany=async (req,res)=>{
     try
        {  idc=req.params.id;
           newData=req.body;
           updatedrepcompany= await ReparationCompany.findOneAndUpdate({idr:idc},newData)  ;      //1er champ dans findOne (nom champ qui existe dans bd)2eme champ (recupere du param)
           res.status(200).send(updatedrepcompany);
        }
     catch(error)
         {
         res.status(400).send(error);
         }
                       
  } 




