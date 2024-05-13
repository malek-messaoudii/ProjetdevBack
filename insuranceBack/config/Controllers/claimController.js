const Claim =require ('../models/claim');
const Produit = require('../models/produit');
const Client = require('../models/client');
const Contrat = require('../models/claim')
const mongoose = require('mongoose');

exports.addclaim = async (req, res) => {
    try {
        const { description, etat } = req.body; // Retrieve description and etat from request body

        // Create a new instance of the Claim model with the received data and current date
        const newClaim = new Claim({
            description,
            etat,
            date: new Date() // Add the current date
        });

        const savedClaim = await newClaim.save();

        // Respond with the saved claim
        res.status(201).json(savedClaim);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


