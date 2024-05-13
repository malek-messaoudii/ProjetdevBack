// adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');

// GET: Obtenir tous les utilisateurs
router.get('/users', adminController.getAllUsers);


// POST: Attribuer un rôle à un utilisateur (réservé à l'admin)
router.post('/users/:userId/assign-role', adminController.assignRole);

// GET: Obtenir un utilisateur by id
router.get('/getbyid/:id',adminController.getUserById);

// GET: Obtenir un utilisateur by email 
router.get('/getbyemail',adminController.getUserByEmail);

module.exports = router;
