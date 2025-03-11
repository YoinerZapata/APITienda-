const modeloUsuario = require("../models/usuario.model");
const modeloVendedor = require("../models/vendedor.model");

exports.registrar = async (req,res)=>{

    const nuevoUsuario = new modeloUsuario({
        correo: "juanitopro",
        contrasena: "12345678",
        rol: "vendedor"
    });
    let resul = await nuevoUsuario.save();
    console.log(resul)

    const nuevoVendedor = new modeloVendedor({
        nombre: "pedro",
        documento: "98765432",
        ventas: 0,
        userId: resul._id
    });
    let resultado = await nuevoVendedor.save();
    res.end()

}


