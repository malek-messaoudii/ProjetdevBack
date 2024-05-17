const mongoose = require ('mongoose')

const AssuranceCompany = mongoose.model('AssuranceCompany',{

    idass:{type:String,required: true},
    nomagenceassurance:{type:String,required:true},
    local: { type: String },
    


})

module.exports=AssuranceCompany;