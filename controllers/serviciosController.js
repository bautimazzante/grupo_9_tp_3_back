const fs = require("fs").promises;

const obtenerServicios = async (req, res) => {
    try {
        const data = await fs.readFile("./data/servicios.json", "utf-8");
        const servicios = JSON.parse(data);
        res.json(servicios);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};

const obtenerServicioById = async (req, res) => {
    try {
        const data = await fs.readFile("./data/servicios.json", "utf-8");
        const servicios = JSON.parse(data);
        // Capturamos el id de los parámetros y lo pasamos a número
        const id = Number(req.params.id);
        const servicio = servicios.find(s => s.id === id);

        if (!servicio) {
            return res.status(404).json({ msg: "Servicio no encontrado" });
        }
        res.json(servicio);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};

// Exportamos ambas funciones
module.exports = {
    obtenerServicios,
    obtenerServicioById
};