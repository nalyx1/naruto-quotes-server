import express from 'express';
import cors from 'cors';
import route from './services/route.js';

const server = express();
const port = 5000;

server.use(cors());
server.use(route)

server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});