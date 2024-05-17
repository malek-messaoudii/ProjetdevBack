const User = require('../models/user');
const ReparationCompany = require('../models/reparationcompny');
const Agentreparation = require('../models/agentreparation');

exports.addAgentReparation = async (req, res) => {
    const data = req.body;

   

    try {
        // Recherche de l'agence de reparation correspondante par nom et ID
        const reparationCompany = await ReparationCompany.findOne({ idr: data.idagencereparation, nom: data. nomagencereparation });

        // Vérification de l'existence de la boutique
        if (! reparationCompany) {
            return res.status(404).send({ message: "Aucune agence de reparation trouvée avec le nom et l'ID spécifiés" });
        }

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

        const agentreparation = new Agentreparation({ ...data, role });
        const savedagentreparation = await agentreparation.save();
        res.status(200).send(savedagentreparation);
    } catch (err) {
        res.status(500).send({ message: "Une erreur s'est produite lors de l'ajout de l'agent de reparation", error: err });
    }
};