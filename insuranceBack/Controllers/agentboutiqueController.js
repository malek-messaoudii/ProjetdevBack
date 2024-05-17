const User = require('../models/user');
const Boutique = require('../models/boutique');
const Agentboutique = require('../models/agentboutique');

exports.addAgentBoutique = async (req, res) => {
    const data = req.body;

   

    try {
        // Recherche de la boutique correspondante par nom et ID
        const boutique = await Boutique.findOne({ idb: data.idboutique, nom: data.nomboutique });

        // Vérification de l'existence de la boutique
        if (!boutique) {
            return res.status(404).send({ message: "Aucune boutique trouvée avec le nom et l'ID spécifiés" });
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

        const agentboutique = new Agentboutique({ ...data, role });
        const savedagentboutique = await agentboutique.save();
        res.status(200).send(savedagentboutique);
    } catch (err) {
        res.status(500).send({ message: "Une erreur s'est produite lors de l'ajout de l'agent de boutique", error: err });
    }
};
