const mongoose = require("mongoose");

const ContactenosSchema = mongoose.Schema({
    nombre: {type: String, required:true, trim: true },
    email: {type: String, required:true, trim: true, unique:true },
    telefono:{type: Number, required:true, trim: true},
    mensaje: {type: String, required:true, trim: true },
});


//definir el modelo 
module.exports = mongoose.model("contactenos", ContactenosSchema);
