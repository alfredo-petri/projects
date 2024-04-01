import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import createGame from "./public/game.js";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);

const game = createGame();

game.start();

game.subscribe((command) => {
    console.log(`Emitting ${command.type}`);
    io.emit(command.type, command);
});

console.log(game.state);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "public/index.html"));
});

io.on("connection", (socket) => {
    const playerId = socket.id;
    console.log(`O player ${playerId} se conectou`);

    game.addPlayer({ playerId: playerId });

    socket.emit("setup", game.state);

    socket.on("disconnect", () => {
        game.removePlayer({ playerId: playerId });
        console.log(`O player ${playerId} se desconectou`);
    });

    socket.on("move-player", (command) => {
        command.playerId = playerId;
        command.type = "move-player";
        game.movePlayer(command);
        console.log(`the player is moving`);
    });
});

server.listen(3000, () => {
    console.log("server running at http://localhost:3000");
});
