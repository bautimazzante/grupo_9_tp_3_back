const { Router } = require("express");

const { obtenerServicios, obtenerServicioById } = require("../controllers/serviciosController");

const router = Router();

router.get("/:id", obtenerServicioById);

router.get("/", obtenerServicios);

module.exports = router;