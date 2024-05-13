// admin.js
const mongoose = require('mongoose');
const User = require('./user');

const adminSchema = new mongoose.Schema({
    // Ajoutez des attributs spécifiques aux administrateurs
    author: { type: String, required: true }
    // Autres attributs spécifiques aux administrateurs
});

// Créer un sous-modèle Admin à partir du modèle User
module.exports = User.discriminator('Admin', adminSchema);
