const fs = require("fs").promises;
const path = require("path");

// Ruta absoluta y segura al JSON de equipo
const rutaEquipo = path.join(__dirname, "../data/equipo.json");

// Obtener todos los integrantes del equipo
const obtenerEquipo = async (req, res, next) => {
    try {
        const data = await fs.readFile(rutaEquipo, "utf-8");
        const equipo = JSON.parse(data);
        res.json(equipo);
    } catch (error) {
        next(error); // Pasa el error al manejador nativo en server.js
    }
};

module.exports = {
    obtenerEquipo
};
