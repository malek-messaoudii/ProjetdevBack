const mongoose = require('mongoose')


const  User = mongoose.model('users', {
    
    numérotel :{
        type :String
    },
    email : {
        type : String
    },
   
    mdp : {
        type : String
    },
    cmdp : {
        type : String
    },
    role: { type: String, enum: ['client', 'agentboutique','agentreparation','agentassurance', 'agentpolice', 'admin'], default: 'client' },
})


module.exports = User;