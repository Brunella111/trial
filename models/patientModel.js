const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    patient: {
        type: String,
        required: [true,"enter you name"]
    },
    surname:{
        type : Number,
        required:true,
        default:18
    },
    othernames:{
        type : String,
        required:true,
    },
    gender:{
        type : String,
        required:true,
    },
    phoneNumber:{
        type : Number,
        required:true,
    },
    ResidentialAddress:{
        type : String,
        required:true,
    },
    EmergencyNames:{
        type : String,
        required:true,
    },
    contact:{
        type : Number,
        required:true,
    },
    relationship:{
        type : String,
        required:true,
    },
    
},
{
    timestamps: true
}
)

const Patient = mongoose.model('patient',productSchema);
module.exports = Patient;