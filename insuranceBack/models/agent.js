const mongoose = require('mongoose');
const User = require('./user');

const agent = new mongoose.Schema({
    
    noms: { type: String, required: true },
    id: { type: Number, required: true },
    nomg: { type: String, required: true },    
});

module.exports = User.discriminator('Agent', agent);