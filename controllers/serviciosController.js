const servicios = require("../data/servicios.json");

const obtenerServicios = (req, res) => {

    res.json(servicios);

};

module.exports = {
    obtenerServicios
};