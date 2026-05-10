const { Router } = require("express");

const { obtenerServicios } = require("../controllers/serviciosController");

const router = Router();

router.get("/", obtenerServicios);

module.exports = router;

