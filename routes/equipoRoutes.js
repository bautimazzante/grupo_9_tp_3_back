const { Router } = require("express");

const { obtenerEquipo } = require("../controllers/equipoController");

const router = Router();

router.get("/", obtenerEquipo);

module.exports = router;