const User = require('../models/user');
const AssuranceCompany = require('../models/assurancecompany');
const Agentassurance = require('../models/agentassurance');

exports.addAgentAssurance = async (req, res) => {
    const data = req.body;

   

    try {
        // Recherche de l'agence d'assurance correspondante par nom et ID
        const assuranceCompany = await AssuranceCompany.findOne({ idass: data.idagenceassurance, nom: data.nomagenceassurance });

        // Vérification de l'existence de l'agence d'assurance
        if (!assuranceCompany) {
            return res.status(404).send({ message: "Aucune agence d'assurance trouvée avec le nom et l'ID spécifiés" });
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

        const agentassurance = new Agentassurance({ ...data, role });
        const savedagentassurance = await agentassurance.save();
        res.status(200).send(savedagentassurance);
    } catch (err) {
        res.status(500).send({ message: "Une erreur s'est produite lors de l'ajout de l'agent d'assurance", error: err });
    }
};