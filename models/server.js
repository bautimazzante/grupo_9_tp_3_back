const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        // Render asigna un puerto dinámico, por eso usamos process.env.PORT
        this.port = process.env.PORT || 3000;

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();

        // Manejo de errores
        this.errorHandler();
    }

    middlewares() {
        // CORS es fundamental para que tu GitHub Pages pueda consultar esta API
        this.app.use(cors());
        // Permite recibir y procesar datos JSON
        this.app.use(express.json());
    }

    routes() {
        // Ruta de prueba
        this.app.get('/api', (req, res) => {
            res.json({ msg: 'API funcionando correctamente' });
        });

        // Tus rutas de servicios
        this.app.use('/servicios', require('../routes/serviciosRoutes'));
        
        // Puedes agregar aquí tus otras rutas (equipo, perfil, etc.)
        // this.app.use('/equipo', require('../routes/equipoRoutes'));
        // this.app.use('/perfil', require('../routes/perfilRoutes'));
    }

    errorHandler() {
        this.app.use((err, req, res, next) => {
            console.error("[Server Error]:", err.stack);
            res.status(err.status || 500).json({
                status: "error",
                message: err.message || "Error interno del servidor"
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