
const User = require('../models/user');
const Agent = require('../models/agent'); 

exports.getAgentByEmail = async (req, res) => {
    const  uemail  = req.params.email;
    try {
      const user = await Agent.findOne({ email: uemail });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Assuming user.role holds the role information
      return res.status(200).send(user);
    } catch (error) {
      // Consider using a logging library or a centralized error handling system
      console.error('Error fetching user by email:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };