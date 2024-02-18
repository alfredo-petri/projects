const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
        <h3>Executando Função via Props</h3>
        <br />
        <button onClick={myFunction}>Clique aqui para executar a função</button>
    </div>
  )
}

export default ExecuteFunction