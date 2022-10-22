import express from 'express';
import cors from 'cors';
import route from './services/route.js';

const server = express();

server.use(cors());
server.use(route)

server.listen(process.env.PORT || 5000, () => {
    console.log(`Server listening`);
});
