import { useState } from "react";

const Hooks = () => {
    
    const [value, setValue] = useState(1);
    
    console.log (value)

    return (
        <div>
            <h3>Hooks</h3>
            <p>Valor: {value}</p>
            <button onClick={() => setValue(value+1)}>alterar valor</button>
        </div>
    )

}

export default Hooks