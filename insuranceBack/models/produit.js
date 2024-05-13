const mongoose = require('mongoose');
const { Schema } = mongoose;
const Boutique = require('./boutique');

const ProduitSchema = new Schema({
    idp: { type: String, required: true },
    type: { type: String, required: true },
    modele: { type: String, required: true },
    num_se: { type: Number },
    prix: { type: Number, required: true },
    image: { type: String, required: true },
    idsh: { type: Schema.Types.ObjectId, ref: 'Boutique', required: true }
});
const Produit = mongoose.model('Produit', ProduitSchema);

module.exports = Produit;

