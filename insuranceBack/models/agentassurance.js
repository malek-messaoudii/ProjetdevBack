const mongoose = require('mongoose');
const User = require('./user');

const agentassuranceSchema = new mongoose.Schema({
    
   nomagenceassurance: { type: String, required: true },
    idagenceassurance: { type: String, required: true },
    
});

// Créer un sous-modèle Admin à partir du modèle User
module.exports = User.discriminator('Agentassurance', agentassuranceSchema);