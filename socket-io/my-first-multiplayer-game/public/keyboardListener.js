export default function createKeyboardListener(document) {
    const state = {
        observers: [],
        playerId: null,
    };

    function registerPlayerId(playerId) {
        state.playerId = playerId;
    }

    function subscribe(observerFunction) {
        state.observers.push(observerFunction);
    }

    function notifyAll(command) {
        console
            .log
            // `keyboardListener () => Notyfying ${state.observers.length} observers`,
            ();
        for (const observerFunction of state.observers) {
            observerFunction(command);
        }
    }

    const handleKeydown = (event) => {
        const keyPressed = event.key;

        const command = {
            type: "move-player",
            playerId: state.playerId,
            keyPressed,
        };

        notifyAll(command);
    };

    document.addEventListener("keydown", handleKeydown);

    return {
        subscribe,
        registerPlayerId,
    };
}
