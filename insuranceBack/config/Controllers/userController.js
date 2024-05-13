const bcrypt = require('bcrypt');
const User = require('../models/user');
const Client = require('../models/client'); 
const jwt = require('jsonwebtoken');
const Agent = require('../models/agent'); 


exports.Register1 = async (req, res) => {
    try {
        const data = req.body;
        const client = new Client({
            nom: data.nom,
            prénom: data.prénom,
            cin: data.cin,
            ville: data.ville,
            numérotel: data.numérotel,
            email: data.email,
            role: 'client', 
        });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(data.mdp, salt);

        client.mdp = hashedPassword;
        client.cmdp = hashedPassword;

        const savedClient = await client.save();

        res.status(200).send(savedClient);
    } catch (error) {
        console.error('Error registering client:', error);
        res.status(400).send(error);
    }
};

exports.Register2 = async (req, res) => {
    try {
        const data = req.body;
        const agent = new Agent({
            noms: data.noms,
            id: data.id,
            nomg: data.nomg,
            email: data.email,
            numérotel: data.numérotel,
            role: data.role, 
        });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(data.mdp, salt);

        agent.mdp = hashedPassword;
        agent.cmdp = hashedPassword;

        const savedAgent = await agent.save();

        res.status(200).send(savedAgent);
    } catch (error) {
        console.error('Error registering agent:', error);
        res.status(400).send(error);
    }
};









exports.checkUnique = async (req, res) => {
    try {
        const { email, numérotel, cin } = req.body;

        const emailExists = await Client.findOne({ email });
        const numerotelExists = await Client.findOne({ numérotel }); 
        const cinExists = await Client.findOne({ cin });

        if (emailExists || numerotelExists || cinExists) {
            res.json({ unique: false });
        } else {
            res.json({ unique: true });
        }
    } catch (error) {
        console.error('Error checking uniqueness:', error); // Changed 'alert' to 'console.error'
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.checkUnique2 = async (req, res) => {
    try {
        const { id, email, numérotel} = req.body;

        const emailExists = await Agent.findOne({ email });
        const numerotelExists = await Agent.findOne({ numérotel }); 
        const idExists = await Agent.findOne({ id });

        if (emailExists || numerotelExists || idExists) {
            res.json({ unique: false });
        } else {
            res.json({ unique: true });
        }
    } catch (error) {
        console.error('Error checking uniqueness:', error); // Changed 'alert' to 'console.error'
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


exports.login = async (req, res) => {
    try {
        const data = req.body;
        const user = await User.findOne({ email: data.email });

        if (!user) {
            return res.status(404).send('Email or password invalid');
        }

        const validPass = bcrypt.compareSync(data.mdp, user.mdp);
        if (!validPass) {
            return res.status(401).send('Email or password invalid');
        }

        const payload = {
            _id: user._id,
            email: user.email,
        };
        const token = jwt.sign(payload, '1234567'); 
        res.status(200).send({ mytoken: token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('Internal Server Error');
    }
};


exports.Register=async (req,res)=>{
    data = req.body;
    usr =new User(data);

    salt = bcrypt.genSaltSync(10);
    cryptedpass= await bcrypt.hashSync(data.mdp, salt);
    cryptedpass= await bcrypt.hashSync(data.cmdp, salt);
    usr.mdp=cryptedpass;
    usr.cmdp=cryptedpass;
    usr.save()
    .then (
        (saved)=>{
            res.status(200).send(saved)
        }
    )
    .catch(
        (err)=>{
        res.status(400).send(err);}
    )
}


exports.addUser=async (req , res)=>{
    data = req.body;
     // Logique pour déterminer le rôle en fonction de l'activité
     if (data.role === 'admin') { // Si le rôle est spécifié comme admin
      role = 'admin';
  } else {
      // Logique pour déterminer le rôle en fonction de l'activité pour les autres utilisateurs
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
 


  const usr = new User({ ...data, role }); 
      usr.save()
      .then (
        (savedUser)=> {
              res.status(200).send(savedUser)
        }
      )
      .catch(
        (err)=> {
            res.status(400).send(err)
        }
      )
}

exports.updateUserAccount=async (req,res)=>{
    id=req.params.id
    newData=req.body;
    User.findByIdAndUpdate({_id:id},newData)
    .then(
          (Updated)=>{
            res.send(Updated)
          }
    )
    .catch(
        (err)=>{
            res.send(err)      
          }
    )
}

exports.deleteUserAccount = async (req, res) => {
    const id = req.params._id;
  
    try {
      const deleteUser = await User.findOneAndDelete({ _id: id });
  
      if (!deleteUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };




  exports.getUserByEmail = async (req, res) => {
    const { email } = req.params;
  
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
  
    const userEmail = email.toLowerCase();
  
    try {
      const user = await User.findOne({ email: userEmail });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Assuming user.role holds the role information
      return res.status(200).json({ user, role: user.role });
    } catch (error) {
      // Consider using a logging library or a centralized error handling system
      console.error('Error fetching user by email:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };




exports.getRoleByEmail = async (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
  
    const userEmail = email.toLowerCase();
  
    try {
      const user = await User.findOne({ email: userEmail });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Assuming user.role holds the role information
      return res.status(200).json({ role: user.role });
    } catch (error) {
      // Consider using a logging library or a centralized error handling system
      console.error('Error fetching role by email:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
};

  

  

