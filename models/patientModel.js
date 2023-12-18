const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

  const EmergencyContact = new Schema({
    Name : String,
    OtherNames: String,
    Surname: String,
    Relationship: String,
  })

  const Patient = new Schema({
    Name : String,
    OtherNames: String,
    Surname: String,
    Relationship: String,
    ResidentialAddress: String,
    
  })
  

const Product = mongoose.model('Product',productSchema);
module.exports = Product;


    