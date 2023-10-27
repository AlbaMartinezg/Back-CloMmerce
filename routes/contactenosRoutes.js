const express = require("express");
const router = express.Router();
const contactenosController = require("../controllers/contactenosController")

router.post(
    "/send-email",
    contactenosController.crearMensaje
);




//definir rutas para poder usarlas
module.exports = router;