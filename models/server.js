const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = 3000; //puerto 3000

        // Middlewares (funciones que añaden funciones extra al server)
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        this.errorHandler();
    }

    middlewares() {
        // Lectura y parseo del body (para recibir datos en JSON)
        this.app.use(express.json());
    }

    routes() {
    // Ruta de prueba 
    this.app.get('/api', (req, res) => {
        res.json({ msg: 'API funcionando correctamente' });
    });

    
    this.app.use('/servicios', require('../routes/serviciosRoutes'));
    }

    // manejo de errores
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