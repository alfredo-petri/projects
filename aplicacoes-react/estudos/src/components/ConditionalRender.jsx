import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState(true);
    const [name] = useState("Joao");
    
    return (
        <>
            <h2>Condicional Simples</h2>
            <h3>Isso será exibido?</h3>
            {x && <p>Como o resultado foi true, a mensagem foi exibida</p>}


            <h2>Condicional composta</h2>
            <h3>O nome do usuário é João?</h3>
            {name === "João" ? (
                <div>
                    <p>Sim, nome do usuário é João</p>
                </div>
            ) : (
               <div>
                <p>Não, o nome do usuário nao é João, o nome é {name}</p>
               </div>
            )}
        </>
    )
}

export default ConditionalRender