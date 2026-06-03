const fs = require("fs").promises;

const path = require("path");

const rutaServicios = path.join(__dirname, "../data/servicios.json");

const obtenerServicios = async (req, res, next) => {

    console.log("GET /servicios ejecutado");

  try {
    const data = await fs.readFile(rutaServicios, "utf-8");

    const servicios = JSON.parse(data);

    res.json(servicios);
  } catch (error) {
    next(error);
  }
};

const obtenerServicioById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    console.log(`GET /servicios/${id} ejecutado`);

    const data = await fs.readFile(rutaServicios, "utf-8");

    const servicios = JSON.parse(data);

    

    const servicio = servicios.find((s) => s.id === id);

    if (!servicio) {
      return res.status(404).json({ message: "Servicio no encontrado" });
    }

    res.json(servicio);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  obtenerServicios,
  
  obtenerServicioById,
};