import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import createGame from './public/game.js'
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

const game = createGame()
game.addPlayer({ playerId: "player1", playerX: 0, playerY: 0 });
game.addFruit({ fruitId: "maça", fruitX: 2, fruitY: 3 });
game.addFruit({ fruitId: "uva", fruitY: 4, fruitX: 6 });
game.addFruit({ fruitId: "banana", fruitY: 8, fruitX: 2 });

console.log(game.state)

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected');
});
  

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});