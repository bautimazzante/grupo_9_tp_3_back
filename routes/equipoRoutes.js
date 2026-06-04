const { Router } = require("express");
const { obtenerEquipo } = require("../controllers/equipoController.js");

const router = Router();

// GET /equipo
router.get("/", obtenerEquipo);

module.exports = router;