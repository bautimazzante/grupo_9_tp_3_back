const { Router } = require("express");

const { obtenerPerfil } = require("../controllers/perfilController");

const router = Router();

router.get("/:id", obtenerPerfil);

module.exports = router;