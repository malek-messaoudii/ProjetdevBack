const mongoose = require('mongoose');
const User = require('./user');

const agentreparationSchema = new mongoose.Schema({
    
   nomagencereparation: { type: String, required: true },
    idagencereparation: { type: String, required: true },
    
});

// Créer un sous-modèle Admin à partir du modèle User
module.exports = User.discriminator('Agentreparation', agentreparationSchema);