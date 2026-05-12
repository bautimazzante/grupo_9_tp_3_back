const express = require('express');
const cors = require('cors');

class Server {

    constructor() {

        this.app = express();
        this.port = 3000;

        this.middlewares();

        this.routes();

    }

    middlewares() {

        
        this.app.use(cors());

        
        this.app.use(express.json());

    }

    routes() {

        
        this.app.get('/api', (req, res) => {

            res.json({
                msg: 'API funcionando correctamente'
            });

        });

    
        this.app.use('/servicios', require('../routes/serviciosRoutes'));

        this.app.use('/equipo', require('../routes/equipoRoutes'));

        this.app.use('/perfil', require('../routes/perfilRoutes'));

    }

    listen() {

        this.app.listen(this.port, () => {

            console.log(`Servidor corriendo en puerto ${this.port}`);

        });

    }

}

module.exports = Server;