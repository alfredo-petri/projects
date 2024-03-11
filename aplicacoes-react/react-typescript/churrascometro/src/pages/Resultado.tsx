import ResultadoChurrasco from "../components/ResultadoChurrasco"
import BgImage from "../assets/bg-2.jpg"

const Resultado = () => {
  return (
    <div className="page-container" style={{backgroundImage: `url(${BgImage})`}}>
      <h1>Resultado</h1>
      <ResultadoChurrasco />
    </div>
  )
}

export default Resultado