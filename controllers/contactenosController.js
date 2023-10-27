const Mensajes = require("../models/Contactenos");


exports.crearMensaje = async(req, res)=>{
    
        try{
            const mensaje = new Mensajes(req.body);
        mensaje.save();
        res.send(mensaje);
        }catch(error){
            console.log(error);
        }
   
 };

 

