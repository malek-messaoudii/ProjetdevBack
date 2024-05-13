const User = require('../models/user');
const Client = require('../models/client');
exports.addClient = async (req, res) => {
    const data = req.body;
    let role;

    // Logique pour déterminer le rôle en fonction de l'activité
    if (data.role === 'admin') {
        role = 'admin';
    } else {
        if (data.activite === 'repair') {
            role = 'agentreparation';
        } else if (data.activite === 'boutique') {
            role = 'agentboutique';
        } else if (data.activite === 'insurance') {
            role = 'agentassurance';
        } else {
            role = 'client';
        }
    }

    const client = new Client({ ...data, role });
    client.save()
        .then((savedClient) => {
            res.status(200).send(savedClient);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};
