import { useState } from "react";

const Hooks = () => {
    
    const [value, setValue] = useState(1);
    
    console.log (value)

    return (
        <>
            <p>Valor: {value}</p>
            <button onClick={() => setValue(value+1)}>alterar valor</button>
        </>
    )

}

export default Hooks