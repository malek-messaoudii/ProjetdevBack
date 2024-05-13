const mongoose = require ('mongoose')

const Demandeassurance = mongoose.model('DemandeAssurance',{
    iddass:{type:String},
    typecontrat:{type:String,required:true},
    prix:{type:Number},
    etat:{ type: Boolean },
    nom:{type:String,required:true},
    prenom: {type:String,required:true},
    numérotel: {type:Number,required:true},
    email: {type:String,required:true},
    datedebut:{type:Date,required:true},
    datefin:{type:Date,required:true},
    idclient: { type: mongoose.Schema.Types.ObjectId, ref: 'Client'},
    idcontrat: { type: String, ref: 'Contrat'},
    idproduit: { type: String, ref: 'Produit'}

})

module.exports=Demandeassurance;