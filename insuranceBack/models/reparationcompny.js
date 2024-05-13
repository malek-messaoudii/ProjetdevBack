const mongoose = require ('mongoose')

const ReparationCompany = mongoose.model('ReparationCompany',{

    idr:{type:String,required: true},
    nom:{type:String,required:true},
    categorie:{type:String,required:true},
    local: { type: String },
})

module.exports=ReparationCompany;