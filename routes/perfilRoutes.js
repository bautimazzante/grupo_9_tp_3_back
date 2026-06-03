const { Router } = require("express");
const {
  obtenerUsuarios,
  obtenerUsuarioById,
} = require("../controllers/perfilController");

const router = Router();

router.get("/", obtenerUsuarios);

router.get("/:id", obtenerUsuarioById);

module.exports = router;
