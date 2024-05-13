const mongoose = require('mongoose');

const ClaimSchema = new mongoose.Schema({
    description: { type: String },
    etat: { type: Boolean },
    state: { type: String },
    status: { type: String},
    idp: { type: mongoose.Schema.Types.ObjectId, ref: 'Produit' },
    idct : { type: mongoose.Schema.Types.ObjectId, ref: 'Contrat' },
    date: { type: Date, default: Date.now }
});

const Claim = mongoose.model('Claim', ClaimSchema);

module.exports = Claim;


