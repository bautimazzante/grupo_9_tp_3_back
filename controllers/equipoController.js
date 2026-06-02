const fs = require("fs").promises;

const obtenerEquipo = async (req, res) => {
    try {
        const data = await fs.readFile("./data/equipo.json", "utf-8");
        const equipo = JSON.parse(data);
        res.json(equipo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};

module.exports = {
    obtenerEquipo
};