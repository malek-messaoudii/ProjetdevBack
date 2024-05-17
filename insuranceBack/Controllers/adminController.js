// userController.js
const User = require('../models/user');
const Admin = require('../models/admin');
// Obtenir tous les utilisateurs
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// Attribuer un rôle à un utilisateur (réservé à l'admin)
exports.assignRole = async (req, res) => {
    const { userId } = req.params;
    const { role } = req.body;

    try {
        // Vérifier si l'utilisateur existe
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé.' });
        }

        // Mettre à jour le rôle de l'utilisateur
        user.role = role;
        await user.save();

        res.json({ message: 'Rôle attribué avec succès.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getUserById=async (req,res)=>{
    myid = req.params.id;
    User.findOne({ _id : myid})
    .then(
        (user)=> {
            res.send(user)
        }
    )
    .catch (
        (err)=>{
            res.send(err);
        }
    )
}
