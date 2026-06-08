const express = require("express");
const cors = require("cors");
const path = require("path");

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
    this.app.use(express.static(path.join(__dirname, "../assets")));
  }

  routes() {
    this.app.get("/api", (req, res) => {
      res.json({ msg: "API funcionando correctamente" });
    });

    this.app.use(
      "/servicios",
      require(path.join(__dirname, "../routes/serviciosRoutes.js")),
    );

    this.app.use(
      "/equipo",
      require(path.join(__dirname, "../routes/equipoRoutes.js")),
    );

    this.app.use(
      "/perfil",
      require(path.join(__dirname, "../routes/perfilRoutes.js")),
    );
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
