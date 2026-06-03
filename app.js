const Server = require('./models/server.js'); 
const server = new Server(); 

// Inicializa el servidor escuchando al puerto configurado
server.listen();