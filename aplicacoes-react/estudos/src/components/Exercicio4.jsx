const Exercicio4 = ({name, age, job}) => {
  return (
    <div>
        <h3>Exercicio 04</h3>
        <h4>{name}</h4>
        <p>Idade: {age} anos.</p>
        <p>Profissão: {job}</p>
        <p>{age > 18 ? ("pode tirar habilitação") : ("menor de idade, não pode tirar habilitação")}</p>
    </div>
  )
}

export default Exercicio4