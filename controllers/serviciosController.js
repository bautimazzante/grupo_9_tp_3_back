const fs = require("fs").promises;
const path = require("path");

// Ruta absoluta y segura al JSON
const rutaServicios = path.join(__dirname, "../data/servicios.json");

// 1. Obtener todos los servicios
const obtenerServicios = async (req, res, next) => {
    try {
        const data = await fs.readFile(rutaServicios, "utf-8");
        const servicios = JSON.parse(data);
        res.json(servicios);
    } catch (error) {
        next(error); // Pasa el error al manejador nativo
    }
};

// 2. Obtener un servicio por ID (El punto que les faltaba)
const obtenerServicioById = async (req, res, next) => {
    try {
        const data = await fs.readFile(rutaServicios, "utf-8");
        const servicios = JSON.parse(data);
        const id = Number(req.params.id);
        const servicio = servicios.find(s => s.id === id);

        if (!servicio) {
            return res.status(404).json({ message: "Servicio no encontrado" });
        }

        res.json(servicio);
    } catch (error) {
        next(error); // Pasa el error al manejador nativo
    }
};

// Exportamos ambas funciones
module.exports = {
    obtenerServicios,
    obtenerServicioById
};