const Categorias = require("../models/Categorias");
const Productos = require("../models/Productos");


exports.obtenerProductosHome = async ( req, res) => {
    try{
        const productos = await Productos.find();

        res.json({ productos});
    }catch(error){
        console.log(error);
    }
};

exports.obtenerProducto = async(req, res)=>{
    const {id} = req.params
    const producto = await Productos.find().where("categoriaId").equals(id)
    res.json(producto);
   
 };

 
exports.crearProducto = async(req, res)=>{
    try{
        const producto = new Productos(req.body);
        producto.save();
        res.json(producto);
    }catch(error){
        console.log(error);
    }
};

exports.actualizarProducto = async ( req, res) => {
    const { id } = req.params;
    const producto = await Productos.findById(id);

    if(!producto){
        return res.status(400).json({ msg: "Producto no encontrado"});
    }
    if(producto.creador.toString() !== req.usuario.id.toString()){
        return res.status(400).json({ msg : "Acción no válida para este ususario"});
    }

    producto.nombre = req.body.nombre || producto.nombre;
    producto.descripcion = req.body.descripcion || producto.decripcion;
    producto.stock = req.body.stock || producto.stock;
    producto.precio = req.body.precio || producto.precio;    
    producto.imagen = req.body.imagen || producto.imagen;
    producto.save();

    res.json({ producto});

   
};

exports.borrarProducto = async(req, res)=>{
    try{
        await Productos.deleteOne({ _id: req.params.id});
        res.json({ msg: "Producto eliminado con éxito"});
    }catch(error){
        console.log(error);
    }
};