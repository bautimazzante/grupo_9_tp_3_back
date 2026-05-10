const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = 3000; //puerto 3000

        // Middlewares (Funciones que añaden funciones extra al server)
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {
        // Lectura y parseo del body (para recibir datos en JSON)
        this.app.use(express.json());
    }

    routes() {
    // Ruta de prueba que ya tenías
    this.app.get('/api', (req, res) => {
        res.json({ msg: 'API funcionando correctamente' });
    });

    // CONECTAR TUS RUTAS DE SERVICIOS AQUÍ:
    this.app.use('/servicios', require('../routes/serviciosRoutes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}

module.exports = Server;