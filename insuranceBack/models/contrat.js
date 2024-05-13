const mongoose = require ('mongoose')

const Contrat = mongoose.model('Contrat',{
    idct:{type:String, required: true},
    nomcontrat:{type:String, required: true},
    type:{type:String, required: true},
    terme:{type:String, required: true},
    datecreation:{type:Date, required: true}  

})

module.exports=Contrat;