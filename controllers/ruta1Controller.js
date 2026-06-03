const fs = require("fs").promises;
const path = require("path");

const rutaServicios = path.join(__dirname, "../data/servicios.json");
// Función para obtener todos los servicios
const getServicios = async (req, res, next) => {
    try {
        const data = await fs.readFile("./data/servicios.json", "utf-8");
        const servicios = JSON.parse(data);
        res.json(servicios);
    } catch (error) {
        next(error);
    }
};

// Función para obtener un servicio por ID
const getServicioById = async (req, res, next) => {
    try {
        const data = await fs.readFile("./data/servicios.json", "utf-8");
        const servicios = JSON.parse(data);
        const id = Number(req.params.id);
        const servicio = servicios.find(s => s.id === id);

        if (!servicio) {
            return res.status(404).json({ message: "Servicio no encontrado" });
        }
        
        res.json(servicio);
    } catch (error) {
        // Pasamos el error al manejador nativo del servidor
        next(error);
    }
};

// Exportamos las funciones para que las rutas las puedan usar
module.exports = {
    getServicios,
    getServicioById
};