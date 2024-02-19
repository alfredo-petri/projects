import { useState } from "react";
import './CalculatorCopy.css';

const CalculatorCopy = () => {

    const [currentValue, setCurrentValue] = useState("0");
    const [pendingOperation, setPendingOperation] = useState(null);
    const [pendingValue, setPendingValue] = useState(null);
    const [completeOperation, setCompleteOperation] = useState("");

    const keyPadNumbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
    const operations = ['+', '-', '*', '/'];

    const handleClick = (val) => {
        setCurrentValue (prevValue => {
            if (prevValue === '0') {
                return val;
            } else {
                return prevValue + val;
            }
        });
        setCompleteOperation (prevOperation => prevOperation + val);
    };

    const handlerClear = () => {
        setCurrentValue ('0');
        setPendingOperation (null);
        setPendingValue (null);
        setCompleteOperation ('');
    };

    const handleOperations = (operation) => {
        setCompleteOperation(currentValue + " " + operation + " ");
        setPendingOperation(operation);
        setPendingValue(currentValue);
        setCurrentValue('');
    }

    const handleCalculate = () => {
        if (!pendingOperation || !pendingValue) {
            return;
        }

        const num1 = parseFloat (pendingValue);
        const num2 = parseFloat (currentValue);
        let result;

        switch (pendingOperation) {
            case '+':
                result = num1 + num2;
            break
            case '-':
                result = num1 - num2;
            break
            case '*':
                result = num1 * num2;
            break
            case '/':
                if (num2  !== 0) {
                    result = num1 / num2;
                } else {
                    setCurrentValue ("Error");
                    setCompleteOperation ("Error");
                    setPendingOperation (null);
                    setPendingValue (null);
                    return;
                }
            break
        }

        setCompleteOperation (pendingValue + " " + pendingOperation + " " + currentValue + " = " + result);
        setCurrentValue (result.toString());
        setPendingOperation (null);
        setPendingValue (null);
    }

    return (

        <div className="calculator">
            
            <div className="display">
                <div className="complete_operation">{completeOperation}</div>
                <div className="current_value">{currentValue}</div>
            </div>

            <button className="button_clear" onClick={handlerClear}>AC</button>

            <div className="buttons">
               
                    <div className="numbers">
                        {keyPadNumbers.map((num) => (
                            <button key={num} onClick={()=> handleClick (num)}>{num}</button>
                        ))}
                        <button onClick={handleCalculate}>=</button>
                    </div>
              
                
                
                    <div className="operations">
                    {operations.map((operation) => (
                        <button key={operation} onClick={()=> handleOperations(operation)}>{operation}</button>
                    ))}
                    </div>
                
                
                
            </div>

            

        </div>
    )
}

export default CalculatorCopy