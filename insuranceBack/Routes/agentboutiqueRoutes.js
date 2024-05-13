const express = require('express');
const router = express.Router();
const agentboutiqueController = require('../Controllers/agentboutiqueController');

router.post('/addagentBoutique',agentboutiqueController.addAgentBoutique);

module.exports = router;