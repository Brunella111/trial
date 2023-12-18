import { Schema } from 'mongoose';
import patientModel from './models/patientModel';

const EmergencyContact = new Schema({
Name : String,
OtherNames: String,
Surname: String,
Relationship: String,
ResidentialAddress: String,
Gender: String,
});

const Patient = new patientModel({
    Name : String,
    OtherNames: String,
    Surname: String,
    Relationship: String,
    Gender: String,
    
});