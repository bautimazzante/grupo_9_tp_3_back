const usuarios = require("../data/usuarios.json");

const obtenerPerfil = (req, res) => {

    const id = parseInt(req.params.id);

    const usuario = usuarios.find(usuario => usuario.id === id);

    if (!usuario) {

        return res.status(404).json({
            msg: "Usuario no encontrado"
        });

    }

    res.json(usuario);

};

module.exports = {
    obtenerPerfil
};