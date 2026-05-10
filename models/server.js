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
        // Aca vamos a definir las rutas más adelante
        this.app.get('/api', (req, res) => {
            res.json({ msg: 'API funcionando correctamente' });
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}

module.exports = Server;