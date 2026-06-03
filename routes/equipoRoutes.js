const { Router } = require("express");
const { obtenerEquipo } = require("../controllers/equipoController");

const router = Router();

// GET /equipo
router.get("/", obtenerEquipo);

module.exports = router;