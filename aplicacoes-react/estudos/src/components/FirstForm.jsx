import styles from './firstForm.module.css'
import {useState} from 'react'

const FirstForm = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value);   
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o form")
    }

    return (
        <div>
            <h3>Forms</h3>
            <form className={styles.FirstForm} onSubmit={handleSubmit}>
                {/* Label + For */}
                <label htmlFor="name">Nome: </label>
                <input type="text" name='name' placeholder='Digite o seu nome' onChange={handleName}/>
                

                {/* Label envolvendo input */}
                <label> 
                    <span>Email: </span>
                    <input type="text" placeholder='Digite o seu email' onChange={(e) => setEmail (e.target.value)}/>
                </label>
                <button type='submit'>enviar</button>

            </form>
        </div>
    )
}

export default FirstForm