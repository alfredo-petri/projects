export default function createGame() {
    const state = {
        players: {},
        fruits: {},
        screen: {
            width: 10,
            height: 10,
        },
    };

    const observers = [];

    function start() {
        const frequency = 2000;

        setInterval(addFruit, frequency);
    }

    function subscribe(observerFunction) {
        observers.push(observerFunction);
    }

    function notifyAll(command) {
        console
            .log
            // `keyboardListener () => Notyfying ${observers.length} observers`,
            ();
        for (const observerFunction of observers) {
            observerFunction(command);
        }
    }

    function setState(newState) {
        Object.assign(state, newState);
    }

    function addPlayer(command) {
        const playerId = command.playerId;
        const playerX =
            "playerX" in command
                ? command.playerX
                : Math.floor(Math.random() * state.screen.width);
        const playerY =
            "playerY" in command
                ? command.playerY
                : Math.floor(Math.random() * state.screen.height);

        state.players[playerId] = {
            x: playerX,
            y: playerY,
        };

        notifyAll({
            type: "add-player",
            playerId: playerId,
            playerX: playerX,
            playerY: playerY,
        });
    }

    function removePlayer(command) {
        const playerId = command.playerId;
        delete state.players[playerId];

        notifyAll({
            type: "remove-player",
            playerId: playerId,
        });
    }

    function addFruit(command) {
        const fruitId = command
            ? command.fruitId
            : Math.floor(Math.random() * 10000000);
        const fruitX = command
            ? command.fruitX
            : Math.floor(Math.random() * state.screen.width);
        const fruitY = command
            ? command.fruitY
            : Marh.floor(Math.random() * state.screen.height);

        state.fruits[fruitId] = {
            x: fruitX,
            y: fruitY,
        };

        notifyAll({
            type: "add-fruit",
            fruitId: fruitId,
            fruitX: fruitX,
            fruitY: fruitY,
        });
    }

    function removeFruit(command) {
        const fruitId = command.fruitId;
        delete state.fruits[fruitId];

        notifyAll({
            type: "remove-fruit",
            fruitId: fruitId,
        });
    }

    function movePlayer(command) {
        console.log(
            `game.movePlayer() => moving ${command.playerId} with ${command.keyPressed}`,
        );

        notifyAll(command);

        const acceptedMoves = {
            ArrowUp(player) {
                console.log("game.movePlayer().ArrowUp() => Moving player Up");
                if (player.y - 1 >= 0) {
                    player.y = player.y - 1;
                }
            },
            ArrowDown(player) {
                console.log(
                    "game.movePlayer().ArrowDown() => Moving player Down",
                );
                if (player.y + 1 < state.screen.height) {
                    player.y = player.y + 1;
                }
            },
            ArrowLeft(player) {
                console.log(
                    "game.movePlayer().ArrowLeft() => Moving player Left",
                );
                if (player.x - 1 >= 0) {
                    player.x = player.x - 1;
                }
            },
            ArrowRight(player) {
                console.log(
                    "game.movePlayer().ArrowRight() => Moving player Right",
                );
                if (player.x + 1 < state.screen.width) {
                    player.x = player.x + 1;
                }
            },
        };

        const keyPressed = command.keyPressed;
        const playerId = command.playerId;
        const player = state.players[playerId];
        const moveFunction = acceptedMoves[keyPressed];

        if (player && moveFunction) {
            moveFunction(player);
            checkForFruitCollision(playerId);
        }
    }

    function checkForFruitCollision(playerId) {
        const player = state.players[playerId];

        for (const fruitId in state.fruits) {
            const fruit = state.fruits[fruitId];

            console.log(`checking collision of ${playerId} and ${fruitId} `);

            if (player.x === fruit.x && player.y === fruit.y) {
                console.log(`collision between ${player} and ${fruit}`);
                removeFruit({ fruitId: fruitId });
            }
        }
    }

    return {
        addPlayer,
        removePlayer,
        addFruit,
        removeFruit,
        movePlayer,
        state,
        setState,
        subscribe,
        start,
    };
}
