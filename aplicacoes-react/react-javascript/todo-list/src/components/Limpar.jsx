import React from 'react'

const Limpar = ({tasks, limpar}) => {

    return (
        <button className='limpar' onClick={limpar} style={{display: tasks.length == 0 ? "none" : "inline-block"}}>Limpar</button>
    )
}

export default Limpar