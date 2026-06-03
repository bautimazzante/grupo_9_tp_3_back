const fs = require("fs").promises;
const path = require("path");

// Ruta absoluta y segura al JSON de usuarios
const rutaUsuarios = path.join(__dirname, "../data/usuarios.json");

// Obtener todos los usuarios
const obtenerUsuarios = async (req, res, next) => {
    try {
        const data = await fs.readFile(rutaUsuarios, "utf-8");
        const usuarios = JSON.parse(data);
        res.json(usuarios);
    } catch (error) {
        next(error);
    }
};

// Obtener un perfil/usuario por ID (Item 2.e de la rúbrica)
const obtenerUsuarioById = async (req, res, next) => {
    try {
        const data = await fs.readFile(rutaUsuarios, "utf-8");
        const usuarios = JSON.parse(data);
        const id = Number(req.params.id);
        const usuario = usuarios.find(u => u.id === id);

        if (!usuario) {
            return res.status(404).json({ message: "Usuario/Perfil no encontrado" });
        }
        
        res.json(usuario);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    obtenerUsuarios,
    obtenerUsuarioById
};