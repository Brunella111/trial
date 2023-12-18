const express = require('express');
const mongoose = require('mongoose');
const Patient = require('./models/patientModel');
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/patient',async(req,res) => {
    try {
        const product = await Patient.find({});
        res.status(200).json( patient)
    } catch (error) { 
        res.status(500).json({message: error.message});
    }
})




mongoose.
connect('mongodb+srv://newadmin:ffff@nellaapi.rd8z423.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to mongoDB')
    app.listen(3000, () => {
        console.log('your node is running on port 3000');
    })

}).catch((error) => {
    console.log(error)
})

