const fs = require("fs").promises;

// Función para obtener todos los servicios
const getServicios = async (req, res) => {
    try {
        const data = await fs.readFile("./data/servicios.json", "utf-8");
        const servicios = JSON.parse(data);
        res.json(servicios);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error interno del servidor");
    }
};

// Función para obtener un servicio por ID
const getServicioById = async (req, res) => {
    try {
        const data = await fs.readFile("./data/servicios.json", "utf-8");
        const servicios = JSON.parse(data);
        const id = Number(req.params.id);
        const servicio = servicios.find(s => s.id === id);

        if (!servicio) {
            return res.status(404).send("Servicio no encontrado");
        }
        res.json(servicio);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error interno del servidor");
    }
};

// Exportamos las funciones para que las rutas las puedan usar
module.exports = {
    getServicios,
    getServicioById
};