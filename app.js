const Server = require('./models/server.js'); 
const server = new Server(); 

// inicializa el servidor escuchando al puerto configurado
server.listen();