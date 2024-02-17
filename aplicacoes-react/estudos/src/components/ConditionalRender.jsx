import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState(true);
    const [name] = useState("Joao");
    
    return (
        <>
            <h3>Condicional Simples</h3>
            <p>Isso será exibido?</p>
            {x && <p>Como o resultado foi true, a mensagem foi exibida</p>}


            <h3>Condicional composta</h3>
            <p>O nome do usuário é João?</p>
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