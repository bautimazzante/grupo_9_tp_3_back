const equipo = require("../data/equipo.json");

const obtenerEquipo = (req, res) => {

    res.json(equipo);

};

module.exports = {
    obtenerEquipo
};