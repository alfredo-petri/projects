import {useState, useEffect} from 'react'
import Square from './Square'

const Board = () => {
    const [isNext, setIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const winner = calculateWinner(squares);
    
    // Variavel AI
    const [aiIsThinking, setAiIsThinking] = useState (false); 
    
    const handleCLick = (i) => {
        if (squares[i] || winner || aiIsThinking) return;

        const newSquares = squares.slice();

        newSquares[i] = isNext ? "X" : "O";

        setSquares(newSquares)

        setIsNext(!isNext)
    };


    const resetGame = ()=> {
        setSquares (Array(9).fill(null));
        setIsNext(true);
    }

    // Inicio AI

    useEffect(() => {
        if (!isNext && !winner) {
            
            setAiIsThinking (true);

            setTimeout (() => {
                
                aiMove(squares, setSquares, setIsNext);

                setAiIsThinking(false);

            }, 1000);

        };
    }, [isNext, squares, winner]);

    // Fim AI


    return (
        <div>
            <div className='app'>
                <div className="status">
                    Status: {winner ? <p className='winner'>O vencedor é: {winner}</p> : (<p>Próximo a jogar: {isNext ? "X" : "O"}</p>)}
                </div>
            </div>
            <div className="board_row">
                <Square value={squares[0]} onClick = {()=> handleCLick (0)}/>
                <Square value={squares[1]} onClick = {()=> handleCLick (1)}/>
                <Square value={squares[2]} onClick = {()=> handleCLick (2)}/>
            </div>
            <div className="board_row">
                <Square value={squares[3]} onClick = {()=> handleCLick (3)}/>
                <Square value={squares[4]} onClick = {()=> handleCLick (4)}/>
                <Square value={squares[5]} onClick = {()=> handleCLick (5)}/>
            </div>
            <div className="board_row">
                <Square value={squares[6]} onClick = {()=> handleCLick (6)}/>
                <Square value={squares[7]} onClick = {()=> handleCLick (7)}/>
                <Square value={squares[8]} onClick = {()=> handleCLick (8)}/>
            </div>
            <button className='reset_button' onClick={resetGame}>Reiniciar Jogo</button>
        </div>
    )

}

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], 
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++){
        const [a, b, c] = lines [i];

        if(squares [a] && squares [a] === squares [b] && squares [b] === squares [c]){
            return squares [a];
        }
    }

    return null;

}

// Inicio AI//
const aiMove = (squares, setSquares, setIsNext) => {
    let move = null;
    for (let i = 0; i < squares.length; i++){
        if(!squares[i]) {
            move = i;
            break;
        }
    }

    if (move !== null) {
        const newSquares = squares.slice();

        newSquares[move] = "O";

        setSquares(newSquares)

        setIsNext(true)
    }
}

// Fim AI

export default Board