const express = require('express');
const cors = require('cors');

class Server {

    constructor() {

        this.app = express();
        this.port = 3000;

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();

    }

    middlewares() {

        // Permitir conexiones externas (frontend)
        this.app.use(cors());

        // Leer JSON
        this.app.use(express.json());

    }

    routes() {

        // Ruta de prueba
        this.app.get('/api', (req, res) => {

            res.json({
                msg: 'API funcionando correctamente'
            });

        });

        // Ruta servicios
        this.app.use('/servicios', require('../routes/serviciosRoutes'));

    }

    listen() {

        this.app.listen(this.port, () => {

            console.log(`Servidor corriendo en puerto ${this.port}`);

        });

    }

}

module.exports = Server;