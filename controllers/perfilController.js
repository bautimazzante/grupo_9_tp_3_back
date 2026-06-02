const fs = require("fs").promises;

const obtenerPerfil = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const data = await fs.readFile("./data/usuarios.json", "utf-8");
        const usuarios = JSON.parse(data);
        
        const usuario = usuarios.find(usuario => usuario.id === id);

        if (!usuario) {
            return res.status(404).json({
                msg: "Usuario no encontrado"
            });
        }
        
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};

module.exports = {
    obtenerPerfil
};