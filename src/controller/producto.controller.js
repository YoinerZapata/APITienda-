const modeloProducto = require('../models/producto.model');


exports.consultar = async (req,res)=>{
    let listaProductos = await modeloProducto.find({});
    console.log(listaProductos)
    if (listaProductos){
        res.json(listaProductos)
    }else{
        res.json({"Error":"Hubo un error"})
    }
};

