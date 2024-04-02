import http from 'http';
//import 'dotenv/config';


const requestHandler = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('¡Hola, mundo desde Node.js con import!');
};

const server = http.createServer(requestHandler);

const port = process.env.PORT || 3000; // Usar el puerto definido en .env o 3000 por defecto
server.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

// node --env-file .env server.js ----> ejecutar así para .env nativo de VSC