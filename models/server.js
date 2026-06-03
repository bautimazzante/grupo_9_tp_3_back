const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.middlewares();

    this.routes();

    this.errorHandler();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.get("/api", (req, res) => {
      res.json({ msg: "API funcionando correctamente" });
    });
    this.app.use("/servicios", require("../routes/serviciosRoutes"));
    this.app.use("/equipo", require("../routes/equiposRoutes"));
    this.app.use("/perfil", require("../routes/usuariosRoutes"));
  }

  errorHandler() {
    this.app.use((err, req, res, next) => {
      console.error("[Server Error]:", err.stack);
      res.status(err.status || 500).json({
        status: "error",
        message: err.message || "Error interno del servidor",
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`);
    });
  }
}

module.exports = Server;
