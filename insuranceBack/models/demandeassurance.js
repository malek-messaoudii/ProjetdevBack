const mongoose = require ('mongoose')

const Demandeassurance = mongoose.model('DemandeAssurance',{
    nomagenceassurance:{type:String,required:true,ref: 'AssuranceCompany'},
    typecontrat:{type:String,required:true,ref: 'Contrat'},
    prix:{type:Number},
    etattraitement:{ type: Boolean ,default :false },
    volprotection:{ type: Boolean ,default :false },
    nom:{type:String,required:true},
    prenom: {type:String,required:true},
    numerotel: {type:String,required:true},
    email: {type:String,required:true,ref: 'Client'},
    datedebut:{type:Date,required:true},
    datefin:{type:Date,required:true},
    numserieproduit: {type:String,required:true, unique: true },

})

module.exports=Demandeassurance;