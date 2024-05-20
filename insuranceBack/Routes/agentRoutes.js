const express = require('express');
const router = express.Router();
const agentController = require('../Controllers/agentController');

router.get('/getAgentByEmail/:email',agentController.getAgentByEmail);

module.exports = router;