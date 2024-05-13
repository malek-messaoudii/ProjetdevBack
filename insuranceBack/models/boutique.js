const mongoose = require ('mongoose')

const Boutique = mongoose.model('Boutiques',{

    idb:{type:Number,required: true},
    nom:{type:String},
    categorie: { type: String, required: true },
    produits: [{
        type: mongoose.Schema.Types.ObjectId,  // Référence aux identifiants des produits
        ref: 'Produit'                         // Nom du modèle de produit
    }]
    


})

module.exports=Boutique;

