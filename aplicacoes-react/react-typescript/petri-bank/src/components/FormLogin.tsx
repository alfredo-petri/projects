import styled from "styled-components";

const Form = styled.form`
background-color: yellow
`



export const FormLogin = () => {
  return (
    <>
        <Form>
            <div>
                <label>
                    <span>Email:</span>
                    <input type="email" name="email" id="email" placeholder="Digite o seu email"/>
                </label>
            </div>
            <div>
                <label >
                    <span>Senha:</span>
                    <input type="password" name="password" id="password" placeholder="Digite a sua senha"/>
                </label>
            </div>
            <button type="submit">Entrar</button>
        </Form>
    </>
  )
}
