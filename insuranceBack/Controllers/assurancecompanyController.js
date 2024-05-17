
 const AssuranceCompany =require ('../models/assurancecompany');


exports.addAssuranceCompany=async (req,res)=>{
    try
      {
        data=req.body;
    ass=new AssuranceCompany (data);
    savedasscompany= await ass.save();
    res.send( savedasscompany);
       }
    catch(error)
      {
    res.status(400).send(error)
      }
       
    }

 exports.getAllAssuranceCompanies=async (req,res)=>{
        try
          {
            assurancecompanies= await AssuranceCompany.find()  ;      // .find({nomcontrat:'',numero:10})
             res.send( assurancecompanies);
           }
        catch(error)
          {
        res.status(400).send(error);
          }
           
        } 
        
 exports.getAssuranceCompanyById=async (req,res)=>{
            try
              {  id=req.params.ida;
                asscomp= await AssuranceCompany.findOne({idass:id});        //1er champ dans findOne (nom champ qui existe dans bd)2eme champ (recupere du param)
                 res.status(200).send(asscomp);
               }
            catch(error)
              {
            res.status(400).send(error)
              }
               
            }      

 exports.deleteAssuranceCompany=async (req,res)=>{
                try
                  {  idc=req.params.id;
                    deletedasscompany= await AssuranceCompany.findOneAndDelete({idass:idc})        //1er champ dans findOne (nom champ qui existe dans bd)2eme champ (recupere du param)
                     res.send(deletedasscompany);
                   }
                catch(error)
                  {
                res.send(error)
                  }
                   
                } 
 exports.updateAssuranceCompany=async (req,res)=>{
     try
        {  idc=req.params.id;
           newData=req.body;
           updatedasscompany= await AssuranceCompany.findOneAndUpdate({idass:idc},newData)  ;      //1er champ dans findOne (nom champ qui existe dans bd)2eme champ (recupere du param)
           res.status(200).send(updatedasscompany);
        }
     catch(error)
         {
         res.status(400).send(error);
         }
                       
        }              




