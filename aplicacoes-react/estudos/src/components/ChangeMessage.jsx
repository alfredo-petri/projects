const ChangeMessage = ({handleMessage}) => {

    const messages = ["Alfredo", "Gabi", "Junior"]

    return (
        <div>
            <button onClick={()=> handleMessage(messages[0])}>Usuario 1</button>
            <button onClick={()=> handleMessage(messages[1])}>Usuario 2</button>
            <button onClick={()=> handleMessage(messages[2])}>Usuario 3</button>
        </div>
    )
}

export default ChangeMessage