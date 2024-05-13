const mongoose = require('mongoose');
const User = require('./user');

const agentboutiqueSchema = new mongoose.Schema({
    
   nomboutique: { type: String, required: true },
    idboutique: { type: String, required: true },
    
});

// Créer un sous-modèle Admin à partir du modèle User
module.exports = User.discriminator('Agentboutique', agentboutiqueSchema);