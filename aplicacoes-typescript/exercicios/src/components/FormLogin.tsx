import { useState } from "react";

const FormLogin = () => {

    const [user, setUser] = useState<string> ("");
    const [password, setPassword] = useState<string> ("");

        const handleSubmit = (event:React.FormEvent)=>{
        
        event.preventDefault();

        alert (`Seja bem vindo ${user}, senha:${password}`);
    }
  
    return (
    

    <form onSubmit={handleSubmit}>
        <label htmlFor="account">Usuario:</label>
        <input type="text" value={user} onChange={(e) => setUser (e.target.value)} id='account' placeholder='Digite o seu usuario'/>
        <br />
        <label htmlFor="password">Senha:</label>
        <input type="password" id='password' value={password} onChange={(e) => setPassword (e.target.value)} />
        <br />
        <button type="submit">Entrar</button>
    </form>
  )
}

export default FormLogin