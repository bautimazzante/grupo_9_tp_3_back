const { Router } = require("express");
const {
  obtenerUsuarios,
  obtenerUsuarioById,
} = require("../controllers/perfilController.js");

const router = Router();

router.get("/", obtenerUsuarios);

router.get("/:id", obtenerUsuarioById);

module.exports = router;
