const mongoose = require('mongoose');
const { Schema } = mongoose;
const Boutique = require('./boutique');

const ProduitSchema = new Schema({
    idp: { type: String, required: true },
    categorie:{type:String,required:true},
    modele: { type: String, required: true },
    marque: { type: String, required: true },
    num_se: { type: Number },
    prix: { type: Number, required: true },
    image: { type: String, required: true },
    idb: { type: String, ref: 'Boutique', required: true }
});
const Produit = mongoose.model('Produit', ProduitSchema);

module.exports = Produit;

