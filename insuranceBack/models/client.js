const mongoose = require('mongoose');
const User = require('./user');

const clientSchema = new mongoose.Schema({
    // Ajoutez des attributs spécifiques aux administrateurs
    nom: { type: String, required: true },
    prénom: { type: String, required: true },
    cin: { type: Number, required: true },
    ville: { type: String, required: true },

    // Autres attributs spécifiques aux administrateurs
});

// Créer un sous-modèle Admin à partir du modèle User
module.exports = User.discriminator('Client', clientSchema);