const Challenge = () => {

    const handleMyEvent = () => {
        let num1 = 15;
        let num2 = 27;
        let resultado = num1 + num2;
        let print = `A soma entre ${num1} e ${num2} resulta em ${resultado}!`;

        alert (print);
    }

    return (
        <>
            <h3>Events</h3>
            <button onClick={handleMyEvent}>clique para efetuar a operação</button>
        </>
    )

}

export default Challenge;